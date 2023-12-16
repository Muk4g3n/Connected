import React from "react";
import ContentPages from "./ContentPages";
import '../pages/yacine/Cal.css';

const MeetingsReports = () => {
  return (
    <ContentPages title={"Meetings Room"} content={
      <div className="cont">
        <div className="left">
          <nav id="art">
            <div>
              <h6>Recap</h6>
              <h6>Deep Dive</h6>
            </div>
            <div className="text">
              <div className="first"><img src="/law-24.svg" /><h2>Meeting Goal</h2></div>
              <p>- Encourage team members to think outside the box and generate innovative ideas for a current project or challenge.</p>
              <p>- Improve communication and collaboration among team members to boost efficiency and strengthen team dynamics.</p>
              <p>- Facilitate a meeting where team members can share their expertise and learn from each other.</p>
            </div>
            <div className="text">
              <div className="first" id="sec"><img src="/Icon.svg" /><h2>Meeting Goal</h2></div>
              <p>This meeting discussed the features of Read, a tool designed to make meetings more efficient and effective. It can be used to measure sentiment and engagement in real-time, provide summaries and transcripts of meetings, and provide coaching metrics to help people improve their meeting performance. It also has a Smart Scheduler Chrome extension to help people choose the best time and length for meetings. The takeaway is to try out Read in a few meetings and enable all the permissions to get the full experience.</p>
            </div>
          </nav>
        </div>
        <div className="right">
          <video id="vd" width="580" height="360" controls>
            <source src="/manini.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    } />
  );
};

export default MeetingsReports;
