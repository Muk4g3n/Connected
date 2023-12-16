import React from "react";
import DataCard from "./DataCard";

const IndividualData = () => {
  const data = [
    "./completedtasks.png",
    "./incompletetasks.png",
    "./overduetasks.png",
    "./totaltasks.png",
  ];
  return (
    <div className="w-[36rem] h-[20rem] grid grid-cols-2 gap-10">
      {data.map((d, index) => {
        return <DataCard key={index} src={d} />;
      })}
    </div>
  );
};

export default IndividualData;
