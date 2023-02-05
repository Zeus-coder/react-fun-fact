import React from "react";
import logo from "../image/1611079.png"


export default function Header(){
    return(
        <div>
            <nav className="nav">
                <img src={logo} alt="myimage" className="logo"></img>
                <h3>ReactFacts</h3>
                <h4>React Courses-Project 1</h4>
            </nav>
        </div>
    )
};