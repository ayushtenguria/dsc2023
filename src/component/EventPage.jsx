import React from "react";
import Timeline from "./EventTimeline";

const EventPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="headingText text-5xl font-bold">Timeline</p>
      </div>
      <Timeline />
    </div>
  );
};

export default EventPage;
