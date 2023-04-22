import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

export default function Popular() {
    const [popular,setPopular]=useState([])

    useEffect(()=>{
        getPopular()
        // eslint-disable-next-line
    },[])
    
    const getPopular=async()=>{
        const check=localStorage.getItem("popular")

        if(check){
            setPopular(JSON.parse(check))
        }
        else{
            const api=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
            const data=await api.json()
            // console.log(data)
            setPopular(data.recipes)
            console.log(popular)
            localStorage.setItem("popular",JSON.stringify(data.recipes))
        }
    }
    
  return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide 
                    options={{
                        perPage:3,
                        arrows:true,
                        pagination:false,
                        drag:'free',
                        gap:'5rem',
                        breakpoints: {
                            640: {
                              perPage: 1,
                            },
                          },
                    }}
                >
                    {popular.map((recipe)=>{
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card>
                                    <Link to={"/recipe/"+recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt={recipe.title} />
                                        <Gradient/>
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })}
                </Splide>
            </Wrapper>
        </div>
    )
}
const Wrapper =styled.div`margin:4rem 0rem;`
const Card=styled.div`
    min-height:25rem;
    border-radius:2rem;
    position:relative;
    overflow:hidden;

    img{
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    p{
        position:absolute;
        z-index:10;
        bottom:0%;
        text-align:center;
        font-size:1rem;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        height:40%;
        color:white;
    }
`
const Gradient=styled.div`
    z-index:3;
    width:100%;
    height:100%;
    position:absolute;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`