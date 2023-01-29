import React, { useEffect, useState } from "react";

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
            <div>
                <p>{recipe.title}</p>
            </div>
        );
    })}
  </div>;
};

export default Dailyketo;
