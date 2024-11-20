import { useEffect, useState } from "react";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [meals, setMeals] = useState([]);
 
  // console.log(meals[0]);

  return (
    <>
      <Header />
      <Meals meals={meals} />
    </>
  );
}

export default App;
