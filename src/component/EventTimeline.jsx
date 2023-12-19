import { useState } from "react";
import {
  useWindowWidth,
  useWindowSize,
  useWindowHeight,
} from "@react-hook/window-size";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import eventData from "../Itenary.json";

function Timeline() {
  const onlyWidth = useWindowWidth();
  const [selectedDay, setSelectedDay] = useState("day1"); // Default to Day 1

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 my-4 mt-8">
        <button
          className={`${
            selectedDay === "day1" ? "bg-blue-800 text-white" : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => handleDayChange("day1")}
        >
          Day 1
        </button>
        <button
          className={`${
            selectedDay === "day2" ? "bg-blue-800 text-white" : "bg-gray-300"
          } px-4 py-2 rounded`}
          onClick={() => handleDayChange("day2")}
        >
          Day 2
        </button>
      </div>

      <div
        className="theme__header"
        id="timeline"
        style={{ marginTop: "100px" }}
      ></div>

      <VerticalTimeline lineColor="black">
        {eventData[selectedDay].events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className=" text-black vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid  rgb(28, 63, 170)" }}
            contentStyle={{ background: "rgb(28, 63, 170)", color: "#fff" }}
            iconStyle={{ background: "rgb(28, 63, 170)", color: "#1c3faa" }}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p>{event.time}</p>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
