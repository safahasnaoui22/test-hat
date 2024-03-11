import ThirdPart from "./ThirdPart";
import "./left.css";

function Left() {
  return (
    <div className="">
      <div className="left">
        <div className="content-wrapper">
          <img src="./left-arrow.png" />

          <h1 className="Flow-C">Python Flow Control</h1>
        </div>
        <div className="content-wrapper">
          <h1 className="pyFun">Python Function</h1>
        </div>
        <div className="content-wrapper">
          <h1 className="Flow-C">Python Flow Control</h1>
          <img src="./right-arrow.png" />
        </div>
      </div>

      <div className="PyN">
        <img src="./left-arrow.png" />
        <h6>Python Number</h6>
        <img src="./right-arrow.png" />
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: "30%" }}></div>
      </div>
      <div className="tit">
        <img src="left.png" />
        <div className="firstTitle">
          <img className="icon" src="ply.png" />
          <h4 className="h4Tit">Title</h4>
          <span>3min</span>
        </div>
        <div className="secTitle firstTitle ">
          <img className="icon" src="pdf.png" />
          <h4 className="secH ">Title</h4>
          <span>3min</span>
        </div>
        <div className="secTitle firstTitle">
          <img className="icon" src="question.png" />
          <h4 className="secH ">Title</h4>
          <span>3min</span>
        </div>
        <img src="right.png" />
      </div>

      <div className="last">
        <h4 className="title">Title</h4>
        <hr className="line" />
      </div>
      <ThirdPart />
    </div>
  );
}

export default Left;
