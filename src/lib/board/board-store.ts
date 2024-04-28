import { produce } from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { data } from "../../data";
import { pick } from "../utils/pick";
import { Board, ItemSlot } from "./board-types";
import { ch, get, init, mv, rm } from "./board-trait";
import { config } from "./config";
import { Pos } from "../utils/pos";
import { distance2 } from "../utils/distance";

interface State {
  board: Board,
  move: (from: Pos, to: Pos) => void,
  use: (pos: Pos) => void,
}

export const enum MoveState {
  Move,
  Promote,
  Swap,
  Deny,
}

export const getMoveState = (
  me: Pick<ItemSlot, "item" | "x" | "y">,
  target: Pick<ItemSlot, "item" | "x" | "y">
) => {
  if (me.item == null || me.item.disabled) return MoveState.Deny;
  if (target.item == null) return MoveState.Move;
  if (me.x === target.x && me.y === target.y) return MoveState.Deny;
  if (me.item.id === target.item.id) {
    const next = data.get(me.item.id)?.next;
    if (next == null) return MoveState.Deny;
    return MoveState.Promote;
  }
  if (target.item.disabled) return MoveState.Deny;
  return MoveState.Swap;
}

export const boardStore = create<State>()(
  devtools(
    (set) => ({
      board: init(config),
      move: (from, to) => set(produce((state: State) => {
        const a = get(state.board, from);
        const b = get(state.board, to);
        if (a.item == null) return;
        const s = getMoveState(a, b);
        if (s === MoveState.Move) {
          mv(state.board, from, to);
          return;
        }
        if (s === MoveState.Promote) {
          const item = data.get(a.item.id)!.next!;
          rm(state.board, from);
          ch(state.board, to, item);
          return;
        }
        if (s === MoveState.Deny) {
          return;
        }
        if (s === MoveState.Swap) {
          mv(state.board, from, to);
        }
      })),
      use: (pos) => set(produce((state: State) => {
        const cell = get(state.board, pos);
        if (cell.item == null) return;
        const use = data.get(cell.item.id)?.use;
        if (use == null) return;
        if (use.type === "produce") {
          const pickedItem = pick(use.table).itemId;
          const items = state.board.items
            .filter(item => item.item == null)
            .sort((a, b) => distance2(pos, a) - distance2(pos, b));
          if (items.length === 0) return;
          items[0].item = {
            id: pickedItem,
            disabled: false,
          };
        }
      }))
    }),
  )
);

