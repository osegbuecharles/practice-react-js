//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var text = "";
var style = {
  color: ""
};
var currentTime = new Date().getHours();
if (currentTime < 12) {
  (text = "Good Morning"), (style.color = "red");
} else if (currentTime < 18) {
  (text = "Good Afternoon"), (style.color = "green");
} else {
  (text = "Good Night"), (style.color = "blue");
}

ReactDOM.render(<App />, document.getElementById("root"));
