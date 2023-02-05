
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import '../src/App.css'


const myDiv = document.getElementById("root");

function Page(){
  return(
    <>
      <Header/>
      <Content/>
    </>
  )
}






ReactDOM.render(<Page/>, myDiv)