import React, { useState } from "react";
import Modal from "./Modal";

const Detail = ({ meal }) => {
  const [showDetails, setShowDetails] = useState(null);

  return (
    <div className="food-details">
      {meal?.meals?.map((food, index) => {
        return (
          <div key={index}>
            <h2>{food.strMeal || "No meals found."}</h2>
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              style={{ width: "300px", borderRadius: "10px" }}
            ></img>
            <button onClick={() => setShowDetails(food)}>More Details</button>
          </div>
        );
      })}
      {showDetails && (
        <Modal closeModal={() => setShowDetails(null)}>
          {Object.keys(showDetails)
            .filter(
              (key) =>
                key.startsWith("strIngredient") &&
                showDetails[key] &&
                showDetails[key].trim() !== ""
            )
            .map((key, index) => (
              <li key={index}>{showDetails[key]}</li>
            ))}
          <p>{showDetails.strInstructions}</p>
        </Modal>
      )}
    </div>
  );
};

export default Detail;
