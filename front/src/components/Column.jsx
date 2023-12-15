import React from "react";
import { useDrop } from "react-dnd";
// import "./Column.styles.scss";
import DraggableCard from "./DraggableCard";
import Card from "./Card";
import { ItemTypes } from "../constants";

const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item) => {
      const from = item;
      const to = { columnIndex };
      handleMoveMyTask(from, to);
    },
    canDrop: (item) => item.columnIndex !== columnIndex,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div
      ref={dropRef}
      className=" h-full w-[23rem] flex flex-col bg-[#FBFBFB] mr-[12px] p-[12px] rounded-lg"
    >
      <h1 className="font-bold text-2xl m-{5px}-{0px}-{20px}-{0px} w-full pl-4">
        {title}
      </h1>
      <div className="flex flex-col mt-5 gap-4">
        {cards}
        {isOver && canDrop ? <Card empty /> : ""}
      </div>
      {/* <div className="column__add-task-input">
        <textarea type="text" placeholder="Type task here ..." />
        <button className="column__add-task-btn">Add Task</button>
      </div> */}
    </div>
  );
};

export default Column;
