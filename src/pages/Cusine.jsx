import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Cusine = () => {
    const [cusine, SetCusine] = useState([]);
    let params = useParams()

    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_API_RAPID}`,
          "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
        },
      };

    const getCuisine = async (name) => {
        const data = await fetch(`https://keto-diet.p.rapidapi.com/?search=${name}`, options)
        const recipes = await data.json()
        SetCusine(recipes)
    }

    useEffect(() =>{
        getCuisine(params.type)
        console.log(params.type)
        // eslint-disable-next-line
    }, [params.type])
  return (
    <Grid>
        {cusine.map((item) => {
            return(
                <Link to={'/recipe/' + item.recipe} key={item.id} style={{ textDecoration: 'none' }} >
                <Card key={item.id}>
                    <img src={item.image} alt='ALT' />
                    <h4>{item.recipe}</h4>
                </Card>
                </Link>
            )
        })}
    </Grid>
  )
}
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;

    }
    a{
        text-decoration: none;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Cusine