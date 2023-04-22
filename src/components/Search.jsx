import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Search() {
  const [inp,setInp]=useState("")
  const navigate=useNavigate()

  const submitHandler=(e)=>{
    e.preventDefault()
    navigate("/searched/"+inp)
    setInp("")
  }
  return (
    <FormStyle onSubmit={submitHandler}>
      <FaSearch />
      <input onChange={(e)=>setInp(e.target.value)} type="text" value={inp} />
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 0 auto;
  position: relative;
  width: 70%;
  max-width: 90vw;
  input {
    width:100%;
    border: none;
    background: black;
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    margin:auto;
  }
  @media (max-width:400px){
   width:90%   
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%,-50%);
    color: white;
  }
`;
