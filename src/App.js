import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TexForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
//import{
  //BrowserRouter as Router,
  //Route,
  //Routes,
  //} from "react-router-dom";

function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert] =useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("DarK Mode Is Enabled","success");
      document.title='Hello Dark Mode is Enabled';
     setInterval(() => {
      document.title='By Now';
     }, 2000);
     setInterval(() => {
      document.title='order NOw';
     }, 1500);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Is Enabled","success");
      document.title='Hello Light Mode is Enabled';
    }
  }
  return (
    <>
    {/*<Router>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
 {/*<Routes>*/}
            {/*<Route path="/about" element={<About />}>
            </Route>*?}
            <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
  </Routes>*/}
  <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
</div>
{/*</Router>*/}

    </>
  );
}

export default App;
