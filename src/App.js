import React from "react";

// function Food({ fav }) {
//   console.log({ fav });
//   return <h1>I Like {fav}</h1>;
// }

function Food({ name }) {
  return <h1>I Like {name}</h1>;
}

const foodILike = [
  { id: 1, name: "ramen" },
  { id: 2, name: "kimchi" },
  { id: 3, name: "Orange" }
];

function renderDish(dish) {
  console.log(dish);
  return <Food name={dish.name} />;
}

function App() {
  return (
    <div>{foodILike.map(renderDish)}</div>
    // <div className="App">
    //   {foodILike.map(dish => (
    //     <Food key={dish.id} name={dish.name} />
    //   ))}

    //   {/* <Food fav="Nangmyun" />
    //   <Food fav="Ramen" />
    //   <Food fav="Kimchi" />
    //   <Food fav="Sogogi" />
    //   <Food fav="Bibimbab" /> */}
    // </div>
  );
}

export default App;
