import React from 'react';
import './App.css';


const buttonText= 'Click me'


class App extends React.Component{
  render(){
    function myfunc(){
      console.log("refering js variable inside jsx")
      return 'click me '
    }
    return(
      <div className="container">
    <h1>Signup</h1>
    <div className="panel1">
          <input type="email" id="email" placeholder="Email"/><br/>
          <input type="password" id="password" placeholder="Password"/><br/>
          <button id="send">{myfunc()}</button>
          </div>
      </div>
    )
  }
}
export default App;