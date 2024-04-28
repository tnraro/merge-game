import { useState } from "react";
import { useStore } from "zustand";
import { data } from "../../data";
import { MoveState, boardStore, getMoveState } from "../board/board-store";
import { config } from "../board/config";
import "./item.css";
import { get } from "../board/board-trait";

interface Props {
  item: {
    id: string;
    disabled: boolean;
  } | null;
  x: number;
  y: number;
}

export const Item = (props: Props) => {
  const item = data.get(props.item?.id ?? "");
  const [moving, setMoving] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const board = useStore(boardStore);
  if (item == null) return (
    <div className="item"></div>
  );
  const hoverPos = {
    x: Math.max(0, Math.min(config.width - 1, Math.round((pos.x / 2.5) / 16))),
    y: Math.max(0, Math.min(config.height - 1, Math.round((pos.y / 2.5) / 16))),
  };
  const target = get(board.board, hoverPos);
  const moveState = getMoveState(props, target);

  return <>
    <div
      className={[
        "item",
        props.item?.disabled ? "item--disabled" : "",
        moving ? "item--moving" : "",
      ].join(" ")}
      style={{
        "--item-x": moving ? `${pos.x}px` : `${props.x * 2.5}rem`,
        "--item-y": moving ? `${pos.y}px` : `${props.y * 2.5}rem`,
      }}
      onMouseDown={(e) => {
        if (props.item == null || props.item.disabled) return;
        setMoving(true);
        const parent = e.currentTarget.parentElement!.getBoundingClientRect();
        const self = e.currentTarget.getBoundingClientRect();
        const move = (e: { clientX: number, clientY: number }) => {
          setPos({
            x: e.clientX - parent.x - self.width * 0.5,
            y: e.clientY - parent.y - self.width * 0.5,
          });
        }
        move(e);
        const stop = () => {
          setMoving(false);
          window.removeEventListener("mousemove", move);
        }
        const apply = (e: { clientX: number, clientY: number }) => {
          const pos = {
            x: e.clientX - parent.x - self.width * 0.5,
            y: e.clientY - parent.y - self.width * 0.5,
          };
          const hoverPos = {
            x: Math.max(0, Math.min(config.width - 1, Math.round((pos.x / 2.5) / 16))),
            y: Math.max(0, Math.min(config.height - 1, Math.round((pos.y / 2.5) / 16))),
          };
          if (props.x === hoverPos.x && props.y === hoverPos.y) {
            board.use(hoverPos);
          } else {
            board.move(props, hoverPos);
          }
          stop();
        }
        window.addEventListener("mouseup", apply, { once: true });
        window.addEventListener("blur", stop, { once: true });
        window.addEventListener("mousemove", move);
      }}
    >
      {item.id}
    </div >
    {moving &&
      <div
        className={[
          "item__indicator",
          moveState === MoveState.Promote && "item__indicator--promotable",
          moveState === MoveState.Deny && "item__indicator--denied",
        ].join(" ")}
        style={{
          "--item-indicator-y": `${hoverPos.y * 2.5}rem`,
          "--item-indicator-x": `${hoverPos.x * 2.5}rem`
        }}
      />
    }
  </>
}