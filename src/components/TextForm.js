import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const[searchWord,setSearchWord] = useState("");

    const handleSearchChange = (event) =>{
        // console.log("On change");
        setSearchWord(event.target.value);
    } 

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        setText(text.toUpperCase());
    } 

    const handleDownClick = () => {
        // console.log("Lowercase was clicked");
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value); 

    }
    const findWord = () => {
        let words = text.split(" ");
        if(words.includes(searchWord)){
            alert("Word found in the text");
        }
        else{
            alert("Word not found in the text");
        } 
    }

    const handleCopy = () => {
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}> 
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <input 
                    type="text"
                    className={`form-control my-2 ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`}
                    // className="form-control my-2"
                    placeholder="Enter word to search"
                    value={searchWord}
                    onChange={handleSearchChange}
                    style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}
                />
                <button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 " onClick={handleDownClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2 " onClick={findWord}>Search</button>
                <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces</button> 
            </div>
            <div className="container my-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#042743', color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p> {text.trim().split(" ").length} words and {text.length} characters</p>
                <p>Average time to read the content: {(text.split(" ").length)*0.008}</p> 
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write something for preview in the above"}</p>
            </div>
        </>
    );
}