const path = require("path");
const csv = require('csvtojson');
const fs = require('fs').promises;
const converter = require('json-2-csv');

const {getCacheItem,setCacheItem} = require("../../cache");
const {playersApi} = require("../../api");

const getPlayer = async (req, res) => {
  const playerID = req.params.id; 
  try {
    const players = await loadPlayers();
    const matchedPlayer = await players.find((player) => {
      return playerID === player.id;
    });

    if (!matchedPlayer) {
      return res.status(404).send(`player id cannot be found`);
    };

    let playerInfo = await getCacheItem(matchedPlayer.id);
    if (!playerInfo){
      playerInfo = await playersApi(matchedPlayer.id);
      await setCacheItem(matchedPlayer.id, playerInfo);
    }
    const csv = await converter.json2csvAsync(playerInfo);
    res.header('Content-Type', 'text/csv');
    res.attachment(`player-info${matchedPlayer.id}.csv`);
    return res.send(csv);
  } catch (error) {
    res.status(500).send(error);
  }
}

const loadPlayers = async () => {
  const csvFilePath="players.csv";
  try {
    const jsonArray = await csv().fromFile("db/players.csv");
    return jsonArray;
  } catch (error) {
    return [];
  }
};


module.exports = {getPlayer,loadPlayers};