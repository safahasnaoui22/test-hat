import React from "react";
import "./right.css";
import Progress from "./Progress";

function Right() {
  return (
    <div className="right-container">
      <section className="section-right">
        💡
        <div className="menu">
          {" "}
          <h4>Introduction</h4> <span>❯</span>
        </div>
        <div className="menu">
          <h4>Learn Python Interactively</h4> <span>❯</span>
        </div>
        <div className="menu">
          <h4>Python Introduction</h4> <span>❯</span>
        </div>
        <div className="menu">
          {" "}
          <h4>Python Flow Control</h4> <span>❯</span>{" "}
        </div>
        <div className="PyFun">
          {" "}
          <h4 className="pythonF">Python Functions</h4>{" "}
          <img src="./medal.png"></img>
        </div>
      </section>
      <Progress />
      <div className="third-part">
        <div className="lastMenu">
          <h4>Python Datatypes</h4>{" "}
          <img className="imgMenu" src="./medal.png"></img>{" "}
          <img className="imgMenu" src="./lock.png"></img>{" "}
          <span className="spnLst">❯</span>
        </div>
        <div className="lastMenu">
          <h4>Python Files</h4>
          <img className="imgMenu" src="./lock.png"></img>
          <span className="spnLst">❯</span>
        </div>
        <div className="lastMenu">
          {" "}
          <h4>Python Conclusion</h4>
          <img className="imgMenu" src="./lock.png"></img>
          <span className="spnLst">❯</span>
        </div>
      </div>
    </div>
  );
}

export default Right;
