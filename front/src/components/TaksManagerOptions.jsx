import React from "react";

const TaksManagerOptions = ({ taskManager }) => {
  const teammates = [1, 1, 1, 1, 1];

  return (
    <div className="w-full h-[12%] flex items-start justify-between">
      <div className="h-full w-[26rem] flex items-center gap-6">
        <div className="relative h-full w-[10rem] ml-6">
          {teammates.map((teammate, index) => {
            return (
              <img
                className={`absolute top-1/2 -translate-y-1/2 left-0 w-[2.4rem] `}
                style={{ translate: `${index * 30}px` }}
                key={index}
                src="./profile.png"
                alt="profile"
              />
            );
          })}
        </div>

        <div className="w-[0.5px] h-[80%] bg-black"></div>

        <div>
          <button className="border-none outline-none bg-white text-black font-medium text-lg flex items-center gap-2">
            <span>Team</span> <img src="./dropdown.png" alt="dropdown" />
          </button>
        </div>

        <div className="w-[0.5px] h-[80%] bg-black"></div>

        <div>
          <button className="border-none outline-none w-[6rem] bg-white text-black font-medium text-lg flex items-center gap-2">
            <span>Filter by</span> <img src="./dropdown.png" alt="dropdown" />
          </button>
        </div>
      </div>

      {taskManager && (
        <button className="w-[8rem] h-[3rem] rounded-lg bg-[#2623D20D] flex items-center justify-evenly text-[#2623D2] mr-6">
          <img src="./plus.png" alt="plsu" />
          <span>Add a task</span>
        </button>
      )}
    </div>
  );
};

export default TaksManagerOptions;
