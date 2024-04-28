import { ReactNode } from "react";
import "./board.css";
import { config } from "./config";

interface Props {
  children?: ReactNode;
}

export const Board = (props: Props) => {
  return <div
    className="board"
    style={{
      "--board-width": config.width,
      "--board-height": config.height
    }}>
    {props.children}
    {Array.from({ length: config.width * config.height }).map((_, i) => <div key={i} className="board__slot" />)}
  </div>;
}
