import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <NavLink to={'/cusine/italian'}>
            <FaPizzaSlice />
            <h4>Snabtt</h4>
        </NavLink>
        <NavLink to={'/cusine/american'}>
            <FaHamburger />
            <h4>Gooood</h4>
        </NavLink>
        <NavLink to={'/cusine/thai'}>
            <GiNoodles />
            <h4>Ala chines</h4>
        </NavLink>
        <NavLink to={'/cusine/japanise'}>
            <GiChopsticks />
            <h4>Sushi</h4>
        </NavLink>
    </List>
  )
}
const List = styled.div`
 display: flex;
 justify-content: center;
 margin: 2rem 0;

`;

export default Category