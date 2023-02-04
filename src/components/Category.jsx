import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Category = () => {
  return (
    <List>
        <Slink to={'/cusine/chicken'}>
           
            <h4>Chicken</h4>
        </Slink>
        <Slink to={'/cusine/beef'}>
            
            <h4>Beef</h4>
        </Slink>
        <Slink to={'/cusine/Pork'}>
            
            <h4>Pork</h4>
        </Slink>
        <Slink to={'/cusine/Fish'}>
            
            <h4>Fish</h4>
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
    margin-right: 1.8rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: 1.2rem
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
    @media only screen and (max-width: 768px) {
        margin-right: 0.8rem;
        width: 4.5rem;
        height: 4.5rem;
       h4{
        font-size: 0.8rem;
       }



    }
`

export default Category