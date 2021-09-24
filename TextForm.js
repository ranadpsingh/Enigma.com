
import React , { useState } from 'react';

export default function TextForm(props) {
    const handleUpCase=()=>{
        console.log("UpperCase Was Clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        console.log("Onchange was clicked");
        setText(event.target.value)
    }
    const [text,setText] = useState('Enter text here..');
    return (
        <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
         <button className="btn btn-primary" onClick={handleUpCase}>Convert to Uppercase</button>
  
        </div>
    )
}

