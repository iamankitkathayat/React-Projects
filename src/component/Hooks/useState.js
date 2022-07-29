import React from "react";
import "./style.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = React.useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
