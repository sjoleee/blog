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
  const [clickTitle, setClickTitle] = useState(0);
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <div className="black-nav">blog</div>
      {title.map((param, idx) => {
        return (
          <div className="article">
            <h2
              onClick={() => {
                setModal((prev) => !prev);
                setClickTitle(idx);
              }}
            >
              {param}
            </h2>

            <p
              onClick={() => {
                let goodArr = [...good];
                goodArr[idx]++;
                setGood(goodArr);
              }}
            >
              ⭐️{good[idx]}
            </p>
            <p>{date[idx]}</p>
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            let titleArr = [...title];
            titleArr.push(inputText);
            arr.push(0);
            setTitle(titleArr);
          }}
        >
          글쓰기
        </button>
      </div>

      {modal && <Modal title={title} clickTitle={clickTitle} date={date} />}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.clickTitle]}</h4>
      <p>{props.date[props.clickTitle]}</p>
      <p>bbb</p>
    </div>
  );
}

export default App;
