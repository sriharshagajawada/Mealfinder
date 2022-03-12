import React, { useEffect, useState, useRef } from "react";
import "../index";

export default function Meal() {
  const userInput = useRef();
  const [input, setInput] = useState(false);
  const [search, setSearch] = useState(".");
  const [mealContainer, setMealContainer] = useState("");
  const [mealVisible, setMealVisible] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" +search)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPending(false);
        const mealData = data.meals;
        setMealContainer(mealData);
        
      });
  }, [search]);

  function updateSearch() {
  
    if(userInput.current.value===""){
      setSearch(".")
    }
    else{
      setSearch(userInput.current.value);
    }
  }
  

  return (
    <>
   
    <div className="header">
        <div className="head">MealFinder</div>   
      <input
        className="input"
        placeholder="Type food name"
        type="text"
        ref={userInput}
      />

      <button
        className="button"
        onClick={() => {
          
          if(search){
          setInput(true);
          userInput.current.focus();
          updateSearch();
          setMealVisible([]);
          }
        }}
      >
        Search
      </button>
      </div>
  
      {pending ? <div>Loading</div> : ""}
      {input && !mealContainer && !pending ? (
        <div>Not available</div>
      ) : (
        ""
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto auto auto",
          justifyContent: "center"
        }}
      >
        {mealContainer
          ? mealContainer.map((list) => {
              return (
                <>
                  <img
                    className="images"
                    onClick={() => {
                      setMealVisible([list]);
                    }}
                    src={list.strMealThumb}
                    height={150}
                    alt="meal-images"
                  />
                  <span onClick={() => {
                      setMealVisible([list]);
                    }} id="imageName">{list.strMeal}</span>
                </>
              );
            })
          : ""}
      </div>
      {mealVisible.map((list) => {
        return (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "auto",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h1>{list.strMeal}</h1>
              <div>
                <img
                  style={{ marginLeft: "" }}
                  src={list.strMealThumb}
                  height={150}
                  alt=""
                />
              </div>

              <span>
                <h3>{list.strCategory}</h3>
                <h3>{list.strArea}</h3>
              </span>
            </div>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>
              Recipe - {list.strInstructions}
            </div>
            <h2>Ingredients</h2>
           
              <span id="ingredients" >
                {list.strIngredient1}
                {list.strMeasure1}
              </span>
              <span id="ingredients" >
                {list.strIngredient2}
                {list.strMeasure2}
              </span>
              <span id="ingredients" >
                {list.strIngredient3}
                {list.strMeasure3}
              </span>
              <span id="ingredients" >
                {list.strIngredient4}
                {list.strMeasure4}
              </span>
              <br/>
              <span id="ingredients" >
                {list.strIngredient5}
                {list.strMeasure5}
              </span>
              <span id="ingredients" >
                {list.strIngredient6}
                {list.strMeasure6}
              </span>
              <span id="ingredients" >
                {list.strIngredient7}
                {list.strMeasure7}
              </span>
              <span id="ingredients" >
                {list.strIngredient8}
                {list.strMeasure8}
              </span>
              <br/>
              <span id="ingredients" >
                {list.strIngredient9}
                {list.strMeasure9}
              </span>
              <span id="ingredients" >
                {list.strIngredient10}
                {list.strMeasure10}
              </span>
              <span id="ingredients" >
                {list.strIngredient11}
                {list.strMeasure11}
              </span>
              <span id="ingredients" >
                {list.strIngredient12}
                {list.strMeasure12}
              </span>
              <br/>
              <span id="ingredients" >
                {list.strIngredient13}
                {list.strMeasure13}
              </span>
              <span id="ingredients" >
                {list.strIngredient14}
                {list.strMeasure14}
              </span>
              <span id="ingredients" >
                {list.strIngredient15}
                {list.strMeasure15}
              </span>
              <span id="ingredients" >
                {list.strIngredient16}
                {list.strMeasure16}
              </span>
              <br/>
              <span id="ingredients" >
                {list.strIngredient17}
                {list.strMeasure17}
              </span>
              <span id="ingredients" >
                {list.strIngredient18}
                {list.strMeasure18}
              </span>
              <span id="ingredients" >
                {list.strIngredient19}
                {list.strMeasure19}
              </span>
              <span id="ingredients" >
                {list.strIngredient20}
                {list.strMeasure20}
              </span>
           
          </>
        );
      })}
    </>
  );
}
