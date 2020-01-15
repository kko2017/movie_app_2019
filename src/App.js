import React from "react";
import PropTypes from "prop-types";

// function Food({ fav }) {
//   console.log({ fav });
//   return <h1>I Like {fav}</h1>;
// }

function Food({ name, rating }) {
  return (
    <div>
      <h1>I Like {name}</h1>
      <h3>Rating: {rating}</h3>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  { id: 1, name: "ramen", rating: 4.5 },
  { id: 2, name: "kimchi", rating: 3.5 },
  { id: 3, name: "Orange", rating: 5.0 }
];

// function renderDish(dish) {
//   console.log(dish);
//   return <Food name={dish.name} />;
// }

function App() {
  return (
    // <div>{foodILike.map(renderDish)}</div>
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}

      {/* <Food fav="Nangmyun" />
      <Food fav="Ramen" />
      <Food fav="Kimchi" />
      <Food fav="Sogogi" />
      <Food fav="Bibimbab" /> */}
    </div>
  );
}

export default App;
