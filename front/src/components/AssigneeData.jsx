import React from "react";

const AssigneeData = () => {
  const types = [
    {
      title: "New",
      color: "#1D4ED8",
    },
    {
      title: "In progress",
      color: "#33BFFF",
    },
    {
      title: "Done",
      color: "#22C55E",
    },
  ];

  return (
    // <div className="w-[30rem] h-[20rem] border-2 border-[#E3E3E3] flex flex-col items-center rounded-md">
    //   <div className="w-[90%] h-[15%] flex items-center justify-between">
    //     <h1>Task by assignee</h1>

    //     <div className="flex items-center justify-evenly h-full w-[60%]">
    //       {types.map((type, index) => {
    //         return (
    //           <div key={index} className="flex items-center gap-1">
    //             <div
    //               className={`w-[1rem] h-[1rem] rounded-full`}
    //               style={{ backgroundColor: type.color }}
    //             ></div>

    //             <p className="text-sm">{type.title}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <img
      src="./tasksbyasignee.png"
      alt="assignee"
      className="w-[31rem] object-contain ml-6 mb-6"
    />
  );
};

export default AssigneeData;
