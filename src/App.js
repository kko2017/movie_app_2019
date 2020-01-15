import React from "react";

function Food({ fav }) {
  console.log({ fav });
  return <h1>I Like {fav}</h1>;
}

function App() {
  return (
    <div className="App">
      <h3>Hello!</h3>
      <Food fav="Nangmyun" />
      <Food fav="Ramen" />
      <Food fav="Kimchi" />
      <Food fav="Sogogi" />
      <Food fav="Bibimbab" />
    </div>
  );
}

export default App;
