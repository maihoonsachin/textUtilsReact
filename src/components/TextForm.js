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
        props.updateAlert("Converted to uppercase","success");
    } 

    const handleDownClick = () => {
        // console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.updateAlert("Converted to lowercase","success");
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value); 

    }
    const findWord = () => {
        let words = text.split(" ");
        if(words.includes(searchWord)){
            props.updateAlert("Word found in the text","success");
            // alert("Word found in the text");
        }
        else{
            props.updateAlert("Word not found in the text","danger");
            // alert("Word not found in the text");
        } 
    }

    const handleCopy = () => {
        // console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.updateAlert("Text copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.updateAlert("Extra spaces removed","success");
    }


    return (
        <>
            <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : props.myColor, color: props.mode === 'light' ? 'black' : 'white' }}> 
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : props.myColor, color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <input 
                    type="text"
                    className={`form-control my-2 ${props.mode === 'dark' ? 'placeholder-dark' : 'placeholder-light'}`}
                    // className="form-control my-2"
                    placeholder="Enter word to search"
                    value={searchWord}
                    onChange={handleSearchChange}
                    style={{ backgroundColor: props.mode === 'light' ? 'white' : props.myColor, color: props.mode === 'light' ? 'black' : 'white' }}
                />
                <button className="btn btn mx-2 my-2" disabled={text.length === 0} onClick={handleUpClick} style={{ 
                    backgroundColor: props.mode === 'light' ? 'white' : props.myColor, 
                    color: props.mode === 'light' ? 'black' : 'white', 
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`}}>Convert to Uppercase</button>
                <button className="btn btn mx-2 my-2" disabled={text.length === 0} onClick={handleDownClick} style={{ 
                    backgroundColor: props.mode === 'light' ? 'white' : props.myColor, 
                    color: props.mode === 'light' ? 'black' : 'white',
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`}}>Convert to LowerCase</button>
                <button className="btn btn mx-2 my-2" disabled={text.length === 0} onClick={findWord} style={{ 
                    backgroundColor: props.mode === 'light' ? 'white' : props.myColor, 
                    color: props.mode === 'light' ? 'black' : 'white',
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`}}>Search</button>
                <button className="btn btn mx-2 my-2" disabled={text.length === 0} onClick={handleCopy} style={{ 
                    backgroundColor: props.mode === 'light' ? 'white' : props.myColor, 
                    color: props.mode === 'light' ? 'black' : 'white',
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`,
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`}}>Copy Text</button>
                <button className="btn btn mx-2 my-2" disabled={text.length === 0} onClick={handleExtraSpaces} style={{ 
                    backgroundColor: props.mode === 'light' ? 'white' : props.myColor, 
                    color: props.mode === 'light' ? 'black' : 'white',
                    border: `1px solid ${props.mode === 'light' ? 'black' : 'white'}`}}>Remove Extra Spaces</button> 
            </div>
            <div className="container my-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : props.myColor, color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                <p> {(text.trim() === "") ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
                <p>Average time to read the content: {(text.split(" ").length)*0.008}</p> 
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write something for preview in the above"}</p>
            </div>
        </>
    );
}