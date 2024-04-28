import { useStore } from "zustand";
import { boardStore } from "./lib/board/board-store";
import { Board } from "./lib/board/board";
import { Item } from "./lib/item/item";

function App() {
  const board = useStore(boardStore);

  return (
    <Board>
      {board.board.items.map((item) => <Item {...item} />)}
    </Board>
  )
}

export default App
