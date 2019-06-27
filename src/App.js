import React from "react";
import "./App.css";

const name = "Priya";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  render() {
    return (
      <div className="container">
        <p className="App-clock">
          Hi {name} !!! <br />
          The time is {this.state.time}
        </p>
      </div>
    );
  }
}
export default App;
