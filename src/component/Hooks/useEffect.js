import React, { useState, useEffect } from "react";
import "./style.css";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
