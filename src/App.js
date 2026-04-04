
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { useEffect } from 'react'; 
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() 
{
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const[myColor, setMyColor] = useState('#042743');

  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = myColor;
      document.title = "TextUtils - Dark Mode";
    } else {
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode";
    }
  }, [mode, myColor]);


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      updateAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      updateAlert("Light mode has been enabled", "success");
    }
  };

  const updateAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const chooseColor = (c) => {
    setMyColor(c);
    if(mode === 'dark'){
      document.body.style.backgroundColor = myColor;
    }
  }

  // const toggleMode = () => {
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = myColor;
  //     updateAlert("Dark mode has been enabled ","success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     updateAlert("Light mode has been enabled ","successs")
  //   }
  // }
  return (
    <> 
      {/* <Navbar title="TextUtils" aboutText="About textUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} aboutText="About" toggleMode={toggleMode} chooseColor={chooseColor}/>
        <Alert alert={alert} />
        <div className="container"> 
          <Routes>
              <Route exact path="/about" element = {<About/>}/>

              <Route exact path="/" 
              element = {<TextForm updateAlert={updateAlert} myColor={myColor} 
              chooseColor={chooseColor}heading="Enter the Text to analyze" mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
