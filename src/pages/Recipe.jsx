import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");

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
  }, [params.name]);

  return (
    <DetailWrapper>
      {details.map((item) => {
        return (
          <div>
            <h2>{item.recipe}</h2>
            <img src={item.image} alt="details.recipe" />
            <h3>{item.category.category}</h3>
            <h3>Difficulty: {item.difficulty}</h3>

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
            <div>
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
            </div>
          );
        })}
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  img {
    width: 50%;
  }
  h2 {
    margin-bottom: 2rem;
  }
  .active {
    background: linear-gradient(to right, #494949, #313131);
    color: white;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
