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
        <h3>Difficulty: {item.difficulty}</h3>
        <h3></h3>
        <ul>
            <li>{item.directions_step_1}</li>
            <li>{item.directions_step_2}</li>
            <li>{item.directions_step_3}</li>
            <li>{item.directions_step_4}</li>
            <li>{item.directions_step_5}</li>
            <li>{item.directions_step_6}</li>
            <li>{item.directions_step_7}</li>
            <li>{item.directions_step_8}</li>
            <li>{item.directions_step_9}</li>
            <li>{item.directions_step_10}</li>

        </ul>
      </div>
            )
        })}
      
      <Info>
       
        <div>
          
          <h3></h3>
        </div>
       
      </Info>
    </DetailWrapper>
  );
};
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  img{
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
