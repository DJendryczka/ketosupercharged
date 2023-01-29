import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dailyketo = () => {

    const [daily, setDaily] = useState([]);

  useEffect(() => {
    getDaily();
  }, []);

  const getDaily = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json();
    setDaily(data.recipes)
   
      
      
  };

  return <div>
    {daily.map((recipe) =>{
        return(
            <Wrapper key={recipe.id}>
                <h3>Radndom recipes</h3>
                {daily.map((recipe) => {
                    return(
                        <Card>
                           <p>{recipe.title}</p>
                           <img src={recipe.image} alt={recipe.title} />
                        </Card>
                    )
                })}
            </Wrapper>
        );
    })}
  </div>;
};
const Wrapper = styled.div`
    margin: 5rem 0rem
`
const Card = styled.div`
    min-height: 25rem;
    border-radius: 2rem;
    overflow: hidden;
    img{
        border-radius: 2rem;
    }
`

export default Dailyketo;
