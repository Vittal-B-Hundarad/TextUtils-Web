import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea'
import Alert from './components/Alert';
import About from './components/About';
import { Routes } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


function App() {

  const [mode,setMode]=useState('light')
  const [alert, setAlert]=useState(null)
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }

  const togglemode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor =  'rgb(11 52 93)'
      showAlert("Dark Mode Enabled ","success");
      document.title = 'TextUtils-DarkMode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled ","success");
      document.title = 'TextUtils-lightMode'
    }
  }
  return (

   
    <>
   
   <BrowserRouter>
    <Navbar mode={mode} togglemode={togglemode}/>
    <Alert alert={alert} />

    <Routes>

    <Route
          path="/"
          element={<Textarea heading="Enter the text to analyse below" showAlert={showAlert} mode={mode}/>}
    ></Route>
    <Route
          path="/about"
          element={<About/>}
    ></Route>

    </Routes>
    </BrowserRouter>
    
</>
  )
}

export default App
