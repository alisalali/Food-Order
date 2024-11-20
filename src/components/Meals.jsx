import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } // Check if the response is ok or not. If not, throw an error.

        const data = await response.json();
        // console.log(data);
        setLoadedMeals(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
