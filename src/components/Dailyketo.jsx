import React, { useEffect } from "react";

const Dailyketo = () => {
  useEffect(() => {
    getDaily();
  }, []);

  const getDaily = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `$process.env.REACT_APP_API_KEY`,
        "X-RapidAPI-Host": "keto-diet.p.rapidapi.com",
      },
    };

    fetch(`https://keto-diet.p.rapidapi.com/`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return <div>Dailyketo</div>;
};

export default Dailyketo;
