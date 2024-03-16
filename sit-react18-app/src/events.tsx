import React from "react";

const EventsComponent = (): JSX.Element => {
  const handleEvent = (e: React.SyntheticEvent) => {
    console.log(e);
  };

  return (
    <div>
      {/* Your component JSX goes here */}
      <button onClick={handleEvent}>Click me</button>
    </div>
  );
};

export default EventsComponent;
