export interface ItemRuntime {
  id: string;
  disabled: boolean;
}

export interface ItemSlot {
  key: string;
  item: ItemRuntime | null;
  x: number;
  y: number;
}

export interface Board {
  width: number,
  height: number,
  items: ItemSlot[],
}
