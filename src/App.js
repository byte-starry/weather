import './App.css';   
import React from 'react'
import weatherContent from './components/content/weathercontent.component';
import weatherInput from './components/input/weatherInput.component';

const App =()=>{
  return (
    <>
    <div className="search">
    </div>
      <weatherContent />
      <weatherInput />
    </>
  );
  }



export default App;
