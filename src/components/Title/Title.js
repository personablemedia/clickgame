import React from "react";
import "./Title.css";

const that = {
  primary: {
    color: "rgb(255, 243, 24)",
    textShadow: "1px 1px 4px white",
    fontSize: "9.0rem",
    fontWeight: "bold",

  }
};
const Title = props => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="title">
        <h1 style={that.primary}>Clicky Game!{props.children}</h1>
        <h2>
          Score: {props.curScore}
          <tr/>
          Highscore: {props.topScore}
        </h2>
      </div>
    </div>
  </div>
);

export default Title;


