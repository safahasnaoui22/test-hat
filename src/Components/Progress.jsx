import "./progress.css";
function Progress() {
  return (
    <div>
      <section>
        <ul>
          <li className="step-wizard-item ">
            <span className="progress-count"></span>
            <span className=" first-item  ">
              Python Numbers <img className="imgpro" src="./ply.png"></img>
              <img className="imgpro" src="./pdf.png"></img>
              <img className="imgpro" src="./question.png"></img>
            </span>
          </li>
          <li className="step-wizard-item current-item">
            <span className="progress-count">2</span>
            <span className="progress-label">
              Python List <img className="imgpro" src="./ply.png"></img>
              <img className="imgpro" src="./pdf.png"></img>
              <img className="imgpro" src="./question.png"></img>
            </span>
          </li>
          <li className="step-wizard-item">
            <span className="progress-count">3</span>
            <span className="progress-label">
              Python Tuple <img className="imgpro" src="./ply.png"></img>
              <img className="imgpro" src="./pdf.png"></img>
              <img className="imgpro" src="./question.png"></img>
            </span>
          </li>
          <li className="step-wizard-item">
            <span className="progress-count">4</span>
            <span className="progress-label">
              Python String <img className="imgpro" src="./ply.png"></img>
              <img className="imgpro" src="./pdf.png"></img>
              <img className="imgpro" src="./question.png"></img>
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Progress;
