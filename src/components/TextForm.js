import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the txt here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleSpace = () => {
    let a = text.split(" ");
    setText(a.join(""));
  };
  const handleTitleTag = () => {
    let a = text.split(" ");
    let i=0;
    for( i=0;i<a.length;i++){
      let word=a[i][0].toUpperCase()+a[i].slice(1)
      a[i]=word
    }
    setText(a.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          {/* <label for="mybox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0b0534" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="mybox"
            rows="7"
          ></textarea>
        </div>
        <button
          className="btn btn-outline-warning mx-3 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-warning mx-3 my-1"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-outline-warning mx-3 my-1"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button
          className="btn btn-outline-warning mx-3 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Spces
        </button>
        <button
          className="btn btn-outline-warning mx-3 my-1"
          onClick={handleTitleTag}
        >
          Title Tag
        </button>
        <CopyToClipboard
          text={text}
          onCopy={() => props.showAlert("Copied to Clipboard","success")}
        >
          <button className="btn btn-outline-warning mx-3">
            Copy to Clipboard
          </button>
        </CopyToClipboard>
        <button className="btn btn-outline-warning mx-3" onClick={handleSpace}>
          Delete Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters.
        </p>
      </div>
    </>
  );
}
