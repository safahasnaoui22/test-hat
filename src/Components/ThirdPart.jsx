import React from "react";
import "./Third.css";

function ThirdPart() {
  return (
    <div>
      <div className="top">
        <img src="feed.png"></img>
        <img src="love.png"></img>

        <img src="tag.png" style={{ transform: "scaleX(-1)" }}></img>
        <img src="note.png"></img>
        <img src="down.png"></img>
      </div>
      <div className="third">
        <img
          className="mainPic"
          src="https://th.bing.com/th/id/R.5e465f93dcc937cd4d579b90e0cbd044?rik=xjrrZ8AGnukHcA&riu=http%3a%2f%2fwww.todaytricks.com%2fwp-content%2fuploads%2f2015%2f11%2fvideo.jpg&ehk=Mydvj8fFHuY3kygWlWDrRcrV3uEVAK9kyZbAgNoi2Gw%3d&risl=&pid=ImgRaw&r=0"
          alt="Video"
        />
        <div className="Tag">
          <span className="firstTag">
            <img src="./tag.png" style={{ transform: "scaleX(-1)" }}></img>
            <span style={{ fontSize: "18px" }}>Your Tags</span>
          </span>

          <hr className="lineThird" />
          <div className="tag-items">
            <span className="spanThird">1:33 intro</span>
            <span className="spanThird">1:33 Numbers</span>
            <span className="spanThird">1:33 To reviews</span>
          </div>

          <div className="progress-Th">
            <div className="progress-Third"></div>
          </div>
        </div>
      </div>
      <div className="notes">
        <div className="YourNot">
          <img src="./note.png" /> <h2> Your Notes</h2>{" "}
        </div>

        <div className="noteO">
          <span className="NoteTitle">Title :</span>{" "}
          <p>
            Description Description Description Description Description
            Description
          </p>
        </div>
        <div className="noteO">
          <br />
          <span className="NoteTitle">Title :</span>{" "}
          <p>
            Description Description Description Description Description
            Description
          </p>
        </div>
        <div className="noteO">
          <br />
          <span className="NoteTitle">Title :</span>{" "}
          <p>
            Description Description Description Description Description
            Description
          </p>
        </div>

        <button>Next</button>
      </div>
    </div>
  );
}

export default ThirdPart;
