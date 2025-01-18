import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState([]);
  

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_RAPID}`,
      "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
    },
  };

  const fetchDetails = async () => {
    const data = await fetch(
      `https://keto-diet.p.rapidapi.com/?search=${params.name}`,
      options
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);

  return (
    <DetailWrapper>
      {details.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.recipe}</h2>
            <img src={item.image} alt="details.recipe" />
            <h3>{item.category.category}</h3>

            <p>{item.directions_step_1}</p>
            <p>{item.directions_step_2}</p>
            <p>{item.directions_step_3}</p>
            <p>{item.directions_step_4}</p>
            <p>{item.directions_step_5}</p>
            <p>{item.directions_step_6}</p>
            <p>{item.directions_step_7}</p>
            <p>{item.directions_step_8}</p>
            <p>{item.directions_step_9}</p>
            <p>{item.directions_step_10}</p>
          </div>
        );
      })}

      <Info>
        {details.map((item) => {
          return (
            <div key={item.id}>
              <h2>Ingredients</h2>

              <p>{item.measurement_1} {item.ingredient_1}</p>
              <p>{item.measurement_2} {item.ingredient_2}</p>
              <p>{item.measurement_3} {item.ingredient_3}</p>
              <p>{item.measurement_4} {item.ingredient_4}</p>
              <p>{item.measurement_5} {item.ingredient_5}</p>
              <p>{item.measurement_6} {item.ingredient_6}</p>
              <p>{item.measurement_7} {item.ingredient_7}</p>
              <p>{item.measurement_8} {item.ingredient_8}</p>
              <p>{item.measurement_9} {item.ingredient_9}</p>
              <p>{item.measurement_10} {item.ingredient_10}</p>
              <h2>Macro</h2>
              <p>Calories {item.calories}</p>
              <p>Carbs in gr. {item.carbohydrates_in_grams}</p>
              <p>Fat in gr. {item.fat_in_grams}</p>
              <p>Protein in gr. {item.protein_in_grams}</p>
            </div>
            
          );
        })}
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin: 5rem;
  
  display: flex;
  img {
    width: 80%;
    border-radius: 1.2rem;
    min-height: 228px;
  }
  h2 {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px){
    flex-direction: column;
    margin: 2rem
  }
 
`;

const Info = styled.div`
  margin: 0 2rem;
  h2{
    margin: 1rem;
  }
  @media only screen and (max-width: 768px){
    margin: 3rem;
  }
`;

export default Recipe;
