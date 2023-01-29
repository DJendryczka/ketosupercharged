import React, { useEffect } from "react";

const Dailyketo = () => {
  useEffect(() => {
    getDaily();
  }, []);

  const getDaily = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "cbcf546d17msh20d13a329f25b2dp116eadjsn57abdd74937c",
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
