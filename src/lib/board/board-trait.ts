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
  return {
    ...board,
    items: [
      newItemSlot(0, 0, "🌻", true),
      newItemSlot(1, 0, "🌷", true),
      newItemSlot(2, 0, "🌹", true),
      newItemSlot(3, 0, "🥔", true),
      newItemSlot(4, 0, "🍏", true),
      newItemSlot(5, 0, "🥔", true),
      newItemSlot(6, 0, "🥔", true),
      newItemSlot(7, 0, "🥔", true),
      newItemSlot(8, 0, "🥔", true),

      newItemSlot(0, 1, "🌻", true),
      newItemSlot(1, 1, "🍋", true),
      newItemSlot(2, 1, "🌷", true),
      newItemSlot(3, 1, "🥔", true),
      newItemSlot(4, 1, "🌹", true),
      newItemSlot(5, 1, "🥔", true),
      newItemSlot(6, 1, "🍑", true),
      newItemSlot(7, 1, "🥔", true),
      newItemSlot(8, 1, "🥔", true),

      newItemSlot(0, 2, "🌻", true),
      newItemSlot(1, 2, "🌻", true),
      newItemSlot(2, 2, "🥔", true),
      newItemSlot(3, 2, "🌸", true),
      newItemSlot(4, 2, "🍇", true),
      newItemSlot(5, 2, "🥕", true),
      newItemSlot(6, 2, "🥔", true),
      newItemSlot(7, 2, "🥔", true),
      newItemSlot(8, 2, "🥔", true),

      newItemSlot(0, 3, "🥔", true),
      newItemSlot(1, 3, "🥔", true),
      newItemSlot(2, 3, "🥔", true),
      newItemSlot(3, 3, "🌲", true),
      newItemSlot(4, 3, "🌱", true),
      newItemSlot(5, 3, "🍎", true),
      newItemSlot(6, 3, "🌺", true),
      newItemSlot(7, 3, "🥔", true),
      newItemSlot(8, 3, "🥔", true),

      newItemSlot(0, 4, "🥔", true),
      newItemSlot(1, 4, "🥔", true),
      newItemSlot(2, 4, "🥔", true),
      newItemSlot(3, 4, "🍊", true),
      newItemSlot(4, 4, "🌱"),
      newItemSlot(5, 4),
      newItemSlot(6, 4, "🍎", true),
      newItemSlot(7, 4, "🥔", true),
      newItemSlot(8, 4, "🥔", true),

      newItemSlot(0, 5, "🥔", true),
      newItemSlot(1, 5, "🥔", true),
      newItemSlot(2, 5, "🌼", true),
      newItemSlot(3, 5, "🍉", true),
      newItemSlot(4, 5, "🍌", true),
      newItemSlot(5, 5, "🌿", true),
      newItemSlot(6, 5, "🥔", true),
      newItemSlot(7, 5, "🥔", true),
      newItemSlot(8, 5, "🥔", true),

      newItemSlot(0, 6, "🥔", true),
      newItemSlot(1, 6, "🥔", true),
      newItemSlot(2, 6, "🍏", true),
      newItemSlot(3, 6, "🍏", true),
      newItemSlot(4, 6, "🍅", true),
      newItemSlot(5, 6, "🍓", true),
      newItemSlot(6, 6, "🌽", true),
      newItemSlot(7, 6, "🍈", true),
      newItemSlot(8, 6, "🥦", true),

      newItemSlot(0, 7, "🥥", true),
      newItemSlot(1, 7, "🥭", true),
      newItemSlot(2, 7, "🍐", true),
      newItemSlot(3, 7, "🍏", true),
      newItemSlot(4, 7, "🍈", true),
      newItemSlot(5, 7, "🍈", true),
      newItemSlot(6, 7, "🍒", true),
      newItemSlot(7, 7, "🍆", true),
      newItemSlot(8, 7, "🥦", true),

      newItemSlot(0, 8, "🥝", true),
      newItemSlot(1, 8, "🥝", true),
      newItemSlot(2, 8, "🍍", true),
      newItemSlot(3, 8, "🍍", true),
      newItemSlot(4, 8, "🥭", true),
      newItemSlot(5, 8, "🍒", true),
      newItemSlot(6, 8, "🍒", true),
      newItemSlot(7, 8, "🫑", true),
      newItemSlot(8, 8, "🥑", true),
    ]
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