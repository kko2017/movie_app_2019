import React from "react";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    console.log("I am constructor.");
  }

  // You don't have to change the state directly.
  // State is data that is able to change itself in the indirect way.
  state = {
    number: 0
  };

  // You must use the setState method should you want to change the state.
  // If you change data using <this.state>, render function is not going to be refreshed.
  add = () => {
    console.log("Add");
    this.setState(current => ({ number: current.number + 1 }));
  };

  minus = () => {
    console.log("Minus");
    this.setState(current => ({ number: current.number - 1 }));
  };

  componentDidMount() {
    console.log("Component rendered.");
  }

  componentDidUpdate() {
    console.log("I just updated.");
  }

  render() {
    // return <h1>I am a class component.</h1>;
    console.log("Component is redering now.");
    return (
      <div>
        <h1>This number is {this.state.number}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
