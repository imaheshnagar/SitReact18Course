import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PersonInfo from "./Components/PersonInfo";
import Counter from "./Components/counter";
import CounterwithObjLitral from "./Components/counterwithObjLitral";
import CounterClass from "./Components/ClassComponent/counterwithClassState";
import Greeting from "./Components/ClassComponent/Greeting";

function App() {
  return (
    <div className="App">
       <PersonInfo name="John" age={25} />
      <PersonInfo name="Jane" age={22} /> 
      {/* <Counter />
      <CounterwithObjLitral />
       */}
      {/* <CounterClass></CounterClass> */}
      <Greeting name="John" />
    </div>
  );
}

export default App;
