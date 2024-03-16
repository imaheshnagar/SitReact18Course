import React, { useState } from "react";

const EventsPreventDefaults: React.FC = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Do something with the form data
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventsPreventDefaults;
