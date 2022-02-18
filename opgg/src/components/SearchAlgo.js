import axios from "axios";
import React, { useState } from "react";

function SearchAlgo(props) {
  const API_KEY = "RGAPI-8e660cfe-ed80-4c4a-abbe-a46b9ead8cb8";
  const [playerData, setPlayerData] = useState({});
  const [gameList, setGameList] = useState([]);

  function getPlayerGames(event){

    axios.get("http://localhost:3000/pastGames")
    .then(function (response){

      setGameList(response.data)
    }).catch(function(error){

      console.log(error);
    })

  }


  const regionCode = [
    { id: 1, value: "na1" },
    { id: 2, value: "br1" },
    { id: 3, value: "eun1" },
    { id: 4, value: "euw1" },
    { id: 5, value: "kr" },
    { id: 6, value: "tr1" },
    { id: 7, value: "oc1" },
    { id: 8, value: "la1" },
  ];

 /* 

  let APICallString =
    "https://" +
     props.regionId +
    ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
    "sningederman" +
    "?api_key=" +
    API_KEY;
  
  

  axios
    .get(APICallString)
    .then(function (response) {
      //success

      setPlayerData(response.data);
      
    })
    .catch(function (error) {
      //error
      console.log(error);
    });
    
    console.log(playerData);
*/
  return(
    <div>

      <button onClick={getPlayerGames} type = "button" className="button">

        <span>Search</span>

      </button>
    </div>
  )
}

export default SearchAlgo;
