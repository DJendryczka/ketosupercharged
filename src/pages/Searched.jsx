import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Searched = () => {

    const [ searchedRecipes, setSearchedRecipes ] = useState([])
    let params = useParams()

    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": `${process.env.REACT_APP_API_RAPID}`,
          "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
        },
      };

    const getSearched = async (name) => {
        const data = await fetch(`https://keto-diet.p.rapidapi.com/?search=${name}`, options)
        const recipes = await data.json()
        setSearchedRecipes(recipes)
        console.log(recipes)
    }
    useEffect(() => {
        getSearched(params.search)
        // eslint-disable-next-line
    }, [params.search])

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Link to={'/recipe/' + item.recipe} key={item.id}>
                <Card key={item.id} >
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

export default Searched