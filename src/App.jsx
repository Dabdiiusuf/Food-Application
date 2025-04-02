import { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Detail from "./Comps/Detail";
import Search from "./Comps/Search";
import Background from "./Comps/Background";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [meal, setMeal] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    if (!shouldFetch) return;
    Axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`
    ).then((res) => {
      console.log(res.data);
      setMeal(res.data);
      setShouldFetch(false);
    });
  }, [shouldFetch]);

  const handleClick = () => {
    setShouldFetch(true);
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Search
            input={inputValue}
            setInputValue={setInputValue}
            fetchData={handleClick}
          />
          <Background />
          <Detail meal={meal} />
        </div>
      </div>
    </>
  );
};

export default App;
