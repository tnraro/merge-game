import { Pos } from "../utils/pos";
import { Board, ItemSlot } from "./board-types";

const newItemSlot = (x: number, y: number, item: string | null = null, disabled = false): ItemSlot => {
  return {
    key: crypto.randomUUID(),
    item: item ? {
      id: item,
      disabled,
    } : null,
    x,
    y,
  }
}


export const init = (board: { width: number, height: number }): Board => {
  const items = `
🥔🥔🥔🥔🥔🥔🥔
🥔🥔🍐🍏🍋🍈🥔
🥔🍐🍓🌱🌿🥭🥔
🥔🥔🍇@🍎🍍🥔
🥔🥔🍉🍌🍊🥔🥔
🌼🌼🍅🥔🥕🥔🥔
🫑🫑🍆🌽🥔🥔🥔
`.trim().split(/\s*\n\s*/g).flatMap((s, y) => {
    return [...s].map((id, x) => {
      console.log(x, y, id);
      if (id === "@") {
        return newItemSlot(x, y, "🌱");
      }
      if (/\s/.test(id)) {
        return newItemSlot(x, y);
      }
      return newItemSlot(x, y, id, true);
    })
  });
  return {
    ...board,
    items,
  }
}

export const index = (board: Board, pos: Pos) => {
  return pos.y * board.width + pos.x;
}

export const get = (board: Board, pos: Pos): ItemSlot => {
  const i = index(board, pos);
  return board.items[i];
}

export const rm = (board: Board, pos: Pos): void => {
  const i = index(board, pos);
  board.items[i].item = null;
}

export const mv = (board: Board, pos1: Pos, pos2: Pos): void => {
  const i1 = index(board, pos1);
  const i2 = index(board, pos2);
  const item1 = board.items[i1];
  const item2 = board.items[i2];
  board.items[i1] = {
    ...item2,
    x: item1.x,
    y: item1.y,
  };
  board.items[i2] = {
    ...item1,
    x: item2.x,
    y: item2.y,
  };
}

export const ch = (board: Board, pos: Pos, item: string): void => {
  const i = index(board, pos);
  board.items[i].item = { id: item, disabled: false };
}