import React, { useState } from "react";

export default function TextForm(props) {
  
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
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");

  };

  const reversed = () => {
    let splitWord = text.split("");

    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords

    setText(newText);
    props.showAlert("it's been reversed ","success")
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!","success")
}
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#80808047' : 'white',
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myTextBox"
            rows={15}
            defaultValue={""}
          />
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert To Lowecase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={reversed}>
          Reversre 
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy 
        </button>
        <button disabled={text.length===0}  type="submit" onClick={speak} className="btn btn-primary mx-1 my-1">Speak</button>


      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length}{" "} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in textbox above to preview it"}
        </p>
      </div>
    </>
  );
}
