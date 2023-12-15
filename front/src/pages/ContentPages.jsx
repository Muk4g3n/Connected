import React from "react";

const ContentPages = ({ title, content }) => {
  return (
    <div className="w-[98%] h-[95%] flex flex-col mt-5 ">
      <div className="w-full h-[10%] ">
        <h1 className="text-3xl pl-6 font-bold">{title}</h1>
        <div className="w-full h-[2px] bg-[#E3E3E3] rounded-lg mt-3"></div>
      </div>

      <div className="w-full h-[90%]">{content}</div>
    </div>
  );
};

export default ContentPages;
