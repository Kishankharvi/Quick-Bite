import React, { useState, useContext, useEffect } from "react";
import "./Fooddisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodIteams from "../FoodIteams/FoodIteams";

const FoodDisplay = () => {
  const { rest_info } = useContext(StoreContext);
  const [filteredRestaurants, setFilteredRestaurants] = useState(rest_info);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setFilteredRestaurants(rest_info);
  }, [rest_info]);

  const filterByRating = () => {
    let filteredList = rest_info
      .filter((restaurant) => restaurant.avgRating >= 4.0)
      .sort((a, b) => b.avgRating - a.avgRating);
    setFilteredRestaurants(filteredList);
  };

  const filterByPriceRange = () => {
    let filteredList = rest_info.filter((restaurant) => {
      return restaurant.prices >= 100 && restaurant.prices <= 200;
    });
    setFilteredRestaurants(filteredList);
  };

  const filterByMaxPrice = () => {
    let filteredList = rest_info.filter((restaurant) => {
      console.log(restaurant.prices);
      return restaurant.prices < 100;
    });
    setFilteredRestaurants(filteredList);
  };

  const resetFilters = () => {
    setFilteredRestaurants(rest_info);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    const filteredList = rest_info.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="filter" id="filter">
        <button className="top-rating" onClick={filterByRating}>
          Ratings 4.0+
        </button>
        <button className="between" onClick={filterByPriceRange}>
          Rs. 100-Rs. 200
        </button>
        <button className="lessthan-300" onClick={filterByMaxPrice}>
          Less than Rs. 100
        </button>
        <button onClick={() => resetFilters()}>Reset Filters</button>
        <input
          id="search"
          className="input-search"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="food-display-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((item, index) => (
            <FoodIteams
              key={index}
              id={item.id}
              name={item.name}
              prices={item.prices}
              avgRatingString={item.avgRatingString}
              image={item.image}
              description={item.description}
            />
          ))
        ) : (
          <p className="search-sesult">No items found</p>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
