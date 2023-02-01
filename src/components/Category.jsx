import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <Slink to={'/cusine/italian'}>
            <FaPizzaSlice />
            <h4>Snabtt</h4>
        </Slink>
        <Slink to={'/cusine/american'}>
            <FaHamburger />
            <h4>Gooood</h4>
        </Slink>
        <Slink to={'/cusine/thai'}>
            <GiNoodles />
            <h4>Ala chines</h4>
        </Slink>
        <Slink to={'/cusine/japanise'}>
            <GiChopsticks />
            <h4>Sushi</h4>
        </Slink>
    </List>
  )
}
const List = styled.div`
 display: flex;
 justify-content: center;
 margin: 2rem 0;

`;
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 0.8rem
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active {
        background: linear-gradient(to right, #f27121, #e94057);
        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`

export default Category