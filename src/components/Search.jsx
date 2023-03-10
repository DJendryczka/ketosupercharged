import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
    
  );
};

const FormStyle = styled.form`
  margin: 0rem auto;
  div {
    width: 100%;
    position: relative;
  }
  input {
    position: relative;
    background: linear-gradient(to right, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    width: 80%;
    left: 10%;
  }
  svg {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 10%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
