import React from "react";
import ContentPages from "./ContentPages";

const TaskManagemenet = () => {
  return (
    <ContentPages
      title="Task Management"
      content={
        <ul>
          <li>1</li>
          <li>2</li>
          <li>2</li>
        </ul>
      }
    />
  );
};

export default TaskManagemenet;
