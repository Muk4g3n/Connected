import React from "react";
// import "./Card.styles.scss";

const Card = ({ task, empty }) => {
  console.log(task);
  return (
    <div
      // className={
      //   `w-full bg-white mb-[10px] p-{10px}-{20px} rounded-[3px] cursor-pointer ` +
      //   (empty ? "bg-gray-500 text-gray-500" : "")
      // }
      className={
        `w-full h-[8rem] cursor-pointer flex flex-col items-start gap-6 bg-white rounded-md pt-4 border-2 border-[#2623d22a]` +
        (empty ? "bg-gray-500 text-gray-500" : "")
      }
    >
      {!empty && (
        <>
          <h1 className="font-semibold text-lg pl-6">{task.text}</h1>
          <div className=" w-full flex items-center pl-6 gap-16">
            <div className="flex items-center w-[50%] gap-6">
              <img src="./design.png" alt="design" />

              <div className="w-[8rem] h-[2.5rem] flex items-center justify-center rounded-md bg-[#2623D20D] text-[#2623D2]">
                {task.team}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 w-[20%]">
              <h2>{task.assignee.name}</h2>
              <img src="./profile.png" alt="profile" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
