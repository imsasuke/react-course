import React, { useState } from "react";

export default function TexForm(props) {
  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted TO upper Casr","success");
  };
  const handelLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted TO Lower Casr","success");

  };
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount (countChar);
      }
    }
    // console.log("No. of Vowels are: " + countChar);
  };
  const handelOnChnage = (event) => {
    setText(event.target.value);
  };
function countWords(text){
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });

        return wc;
    }
  const [text, setText] = useState("");
  let [count, setCount] = useState(0);
  let countChar=0;
  return (
    <>
      <div className="container" style ={{color:props.mode==='dark'?'white':'black',}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChnage}
            id="myBox"
            rows="8"
            style ={{backgroundColor:props.mode==='dark'?'grey':'white',
            color:props.mode==='dark'?'white':'black'
          }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handelUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handelLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleVoClick}>
          Count no. of Vowels
        </button>
      </div>
      <div className="container my-4" style ={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summber</h2>
        <p>
          Word Count:{countWords(text)},{text.length} characters
        </p>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes To Read </p>
        <p>{ count} vowel</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text"}</p>
      </div>
    </>
  );
}
