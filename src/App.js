import React from 'react';
import './App.css';
 
const Number =({numbers}) =>(
      <li>
        <div className="text" contentEditable="true" spellCheck="false">
                {numbers}
        </div>
      </li>
  
);

  

const App= () => {
  return (
    <div className="App">
      <div className="arrow"></div>
      <ul className="circle">
         <Number numbers="1"/>
         <Number numbers="2"/>
         <Number numbers="3"/>
         <Number numbers="4"/>
         <Number numbers="5"/>
         <Number numbers="6"/>
         <Number numbers="7"/>
         <Number numbers="8"/>
         <Number numbers="9"/>
         <Number numbers="10"/>
         <Number numbers="11"/>
         <Number numbers="12"/>
      </ul>
      <button className="spin-button" >SPIN</button>
    </div>
  );
}

export default App;
