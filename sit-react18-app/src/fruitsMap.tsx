import React from "react";
import { JsxElement } from "typescript";
import ListItem from "./ListItem";

const FruitList = (): JSX.Element => {
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grape" },
    // Add more fruits as needed
  ];

  const fruitsJsx = fruits.map((fruit) => (
    <ListItem key={fruit.id.toString()} name={fruit.name} />
  ));

  return <div>{fruitsJsx}</div>;
};

export default FruitList;
