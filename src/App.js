import React, { Component } from 'react'
import './App.css';
import Numbers from './Numbers';

export class App extends Component {
  state ={
    name:"circle"
  }
  startRotation = () =>{
    this.setState({
        name:"circle start-rotate"
    });

setTimeout(() => {
  this.setState({
    name:"circle start-rotate stop-rotate"
  })
     
}, Math.floor(Math.random() * 10000 + 1));
}

  render() {
    return (
      <div>
         <div className="arrow"></div>
         <ul className={this.state.name}>
           {
             Numbers.numbers.map( number =>
           <li>
           <div className="text"  spellCheck="false">{number.no}</div>
           </li>
          ) }
         </ul>
         <button className="spin-button" onClick={this.startRotation}>Spin The Wheel</button>
      </div>
    )
  }
}

export default App
