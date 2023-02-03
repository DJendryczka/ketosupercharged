import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Dailyketo = () => {
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    getDaily();
  }, []);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_RAPID}`,
      "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
    },
  };

  const getDaily = async () => {
    const api = await fetch(
      "https://keto-diet.p.rapidapi.com/?protein_in_grams__lt=15&protein_in_grams__gt=5",
      options
    );
    const data = await api.json();
    console.log(data);
    setDaily(data);
  };

  return (
    <div>
      <Wrapper>
        <h3>Random Keto recipes</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            breakpoints: {
              1224: {
                perPage: 2,
               
              },
              767: {
                perPage: 1,
            
              },
             
            }
          }}
        >
          {daily.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.recipe}>
                    <p>{recipe.recipe}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  margin: 4rem 0rem;
 
`;
const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 5));
`;

export default Dailyketo;
