import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab,setActiveTab] =useState("instructions")

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    console.log(detailData)
    setDetails(detailData);
  };
  useEffect(() => {
    fetchDetails();
    // eslint-disable-next-line
  }, [params.name]);
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab==='instructions'?"active":""} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
        <Button className={activeTab==='ingredients'?"active":""} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
        {activeTab==="instructions"&&(
          <div>
            <h2>Summary</h2>
            <h3 dangerouslySetInnerHTML={{__html:details.summary}}></h3>
            <br></br>
            <h2>Instructions</h2>
            <h3 dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
          </div>
        )}
        {activeTab==="ingredients"&&(
          <ul>
            {details.extendedIngredients&&details.extendedIngredients.map((ingredient)=>
              <li key={ingredient.id}>{ingredient.original}</li>
            )}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin-top: 1rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction:column;
  .active {
    background: black;
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img{
    max-width:85vw;
  }
  `;
  const Button = styled.button`
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor:pointer;
`;
const Info = styled.div`
  margin-top: 1rem;
`;
