import React from "react";
import ContentPages from "./ContentPages";
import TaksManagerOptions from "../components/TaksManagerOptions";
import AssigneeData from "../components/AssigneeData";
import IndividualData from "../components/IndividualData";
import CompletedChart from "../components/CompletedChart";

const DataVis = () => {
  return <ContentPages title="Insights" content={<Insights />} />;
};

const Insights = (props) => {
  return (
    <div className="w-full h-full  flex flex-col">
      <TaksManagerOptions />

      <div className="grid grid-cols-2 w-full h-full overflow-auto">
        <AssigneeData />
        {/* <AssigneeData /> */}

        <IndividualData />

        <CompletedChart />

        <img src="./performance.png" alt="" />
      </div>
    </div>
  );
};

export default DataVis;
