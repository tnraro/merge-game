import { Pos } from "./pos";

export const distance2 = (a: Pos, b: Pos) => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return dx * dx + dy * dy;
}