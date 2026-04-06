// import react from 'react'
import React,{useState} from 'react' 

export default function About(props){

    const myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : props.myColor,
        border: props.mode === 'light' ? '1px solid #ccc' : '1px solid #ddd'
    }

    return (
        <div className="container" style={myStyle}> 
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                    Analyze Your Text
                    </button>
                    </h2>  
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Welcome to TextUtils, your all-in-one destination for effortless text manipulation and analysis. Designed with speed and simplicity in mind, our platform provides a suite of essential tools to help you format, refine, and understand your content in seconds. Whether you are a developer cleaning up code, a student polishing an essay, or a professional managing documentation, TextUtils streamlines your workflow by handling the tedious aspects of text editing.                    </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                    Free to Use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Our application offers a variety of powerful features, including instant case conversion to uppercase or lowercase, extra space removal for cleaner formatting, and a convenient "Copy to Clipboard" function. Beyond simple editing, TextUtils provides real-time analytics such as word and character counts, as well as an estimated reading time to help you gauge the length and impact of your writing. With an integrated search feature, you can quickly locate specific terms within your text, making it easier than ever to navigate large blocks of data.                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                    Browser Compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Built using React.js, this application is optimized for a fast, responsive, and user-friendly experience. We understand the importance of accessibility and visual comfort, which is why we’ve included a seamless dark mode toggle, allowing you to switch between themes based on your environment. At TextUtils, we are committed to providing a lightweight, browser-based solution that ensures your productivity remains uninterrupted, no matter the task at hand.                </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}