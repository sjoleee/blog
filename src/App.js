import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["회고1", "회고2", "회고3"]);
  const [date, setDate] = useState([
    "2020. 02. 01",
    "2021. 03. 20",
    "2022. 04. 12",
  ]);
  let arr = [];
  for (let x of title) {
    arr.push(0);
  }
  const [modal, setModal] = useState(false);
  const [good, setGood] = useState(arr);

  return (
    <div className="App">
      <div className="black-nav">blog</div>
      <button
        onClick={() => {
          setModal((prev) => !prev);
        }}
      >
        modal btn
      </button>
      {title.map((param, idx) => {
        return (
          <div className="article">
            <h2>
              {param}{" "}
              <p
                onClick={() => {
                  let goodArr = [...good];
                  goodArr[idx]++;
                  setGood(goodArr);
                }}
              >
                ⭐️{good[idx]}
              </p>
            </h2>
            <p>{date[2]}</p>
          </div>
        );
      })}
      {modal && <Modal />}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>title</h4>
      <p>aaa</p>
      <p>bbb</p>
    </div>
  );
}

export default App;
