import { produce } from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface State {
  money: number;
  add: (amount: number) => void;
}
export const walletStore = create<State>()(
  devtools(
    persist((set) => ({
      money: 0,
      add: (amount: number) => set(produce((state: State) => {
        state.money += amount;
      })),
    }), {
      name: "wallet"
    })
  )
);