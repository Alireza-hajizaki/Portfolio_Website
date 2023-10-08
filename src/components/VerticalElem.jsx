import React from "react";
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const VerticalElem = ({icon , title}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#b936ee",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #b936ee" }}
      date="2023 - present"
      iconStyle={{ background:"#9c4197" , color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title font-semibold text-xl">
        {title}
      </h3>
    </VerticalTimelineElement>
  );
};

export default VerticalElem;
