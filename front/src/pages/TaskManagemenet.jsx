import React, { useState } from "react";
import ContentPages from "./ContentPages";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import "./TaskBoard.styles.scss";
import Column from "../components/Column";
import CustomDragLayer from "../components/CustomDragLayer";
import TaksManagerOptions from "../components/TaksManagerOptions";

const TaskManagemenet = () => {
  const tasks = [
    {
      title: "Todo",
      tasks: [
        {
          text: "Read chapters for next class",
          team: "Design Team",
          assignee: {
            name: "Younes",
            profile: "profile.png",
          },
        },
        {
          text: "Design the dasbord",
          team: "Design Team",
          assignee: {
            name: "Aya",
            profile: "profile.png",
          },
        },
      ],
    },
    {
      title: "In progress",
      tasks: [
        {
          text: "Design the dasbord",
          team: "Design Team",
          assignee: {
            name: "Aya",
            profile: "profile.png",
          },
        },
        ,
        {
          text: "Develop the landing page",
          team: "Dev Team",
          assignee: {
            name: "Ouassim",
            profile: "profile.png",
          },
        },
      ],
    },
    {
      title: "Done",
      tasks: [],
    },
  ];
  return (
    <ContentPages
      title="Task Management"
      content={<TaskBoard tasks={tasks} />}
    />
  );
};

export default TaskManagemenet;

const TaskBoard = (props) => {
  const [myTasks, moveMyTask] = useState(props.tasks);

  const handleMoveMyTask = (from, to) => {
    const { task, columnIndex: fromColumnIndex, index } = from;
    const { columnIndex: toColumnIndex } = to;

    const newMyTasks = [...myTasks];
    // remove task
    newMyTasks[fromColumnIndex].tasks.splice(index, 1);
    // move task
    newMyTasks[toColumnIndex].tasks.push(task);
    moveMyTask(newMyTasks);
  };

  const columns = myTasks.map((tasks, columnIndex) => {
    const propsToColumn = { tasks, columnIndex, handleMoveMyTask };
    return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
  });

  return (
    <div className="w-full h-full  flex flex-col ">
      <TaksManagerOptions />

      <DndProvider backend={HTML5Backend}>
        <CustomDragLayer />
        <div className="inline-flex items-start justify-between p-[1%] w-full h-full">
          {columns}
        </div>
      </DndProvider>
    </div>
  );
};
