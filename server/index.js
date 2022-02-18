import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import SummonerInfo from "./models/summonerInfo.js";
import axios from "axios";


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const API_KEY = "RGAPI-ef99d0ff-822b-43c5-8ba3-50410bbbc47f";

const CONNECTION_URL =
  "mongodb+srv://eokereke:Chibueze1@opggcluster.himf6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((ERROR) => console.log(error.message));

function getPlayerPUUID(playerName) {
  return axios
    .get(
      "https://" +
        "na1" +
        ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" +
        "sningederman" +
        "?api_key=" +
        API_KEY
    )
    .then((response) => {
      console.log(response.data);
      return response.data.puuid;
    })
    .catch((err) => err);
}

app.get("/pastGames", async (req, res) => {
  const playerName = "sningederman"; //should be SearchBar.searchText
  const PUUID = await getPlayerPUUID(playerName);
  const API_CALL = "https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid" + PUUID + "/ids"+
  "?api_key=" +
  API_KEY;

  const gameIDs = await axios.get(API_CALL)
  .then(response => response.data)
  .catch(err => err)

  var matchDataArray = [];
  for(var i = 0; i < gameIDs.length - 15; i++) {

      const matchID = gameIDs[i]
      const matchData = await axios.get("https://americas.api.riotgames.com/lol/match/v5/matches/" + matchID + "/ids"+
      "?api_key=" +
      API_KEY)
        .then(response => response.data)
        .catch (err => err)

        matchDataArray.push(matchData);

  }
  res.json(matchDataArray);



});
























/*
//json file creation
app.get("/summonerinfos", async (req, res) => {
  const allSummonerInfo = await SummonerInfo.find();

  res.json(allSummonerInfo);
});

//send player data to database
app.post("/summonerInfo/new", (req, res) => {
  const summonerInfo = new SummonerInfo({
    summonerName: req.body.summonerName,
    rank: req.body.rank,
  });

  summonerInfo.save();

  res.json(summonerInfo);
});

//deletes player info from database
app.delete("/summonerInfo/delete/:id", async (req, res) => {
  const result = await SummonerInfo.findByIdAndDelete(req.params.id);

  res.json({ result });
}); */
