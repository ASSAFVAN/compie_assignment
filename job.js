const isEqual = require('lodash.isequal');

const {playersApi} = require("./api");
const {getCacheItem,setCacheItem} = require("./cache");
const { loadPlayers } = require('./src/controllers/players.controllers');

const updatePlayersChange = async () => {
  const players = await loadPlayers();
  players.map((player)=>{
    pullPlayerDetails(player.id);
  })
}

const pullPlayerDetails = async (id) =>{
  const playerInfo = await playersApi(id);
  const playerCache = await getCacheItem(id);  
  let updatedCache = {};
  if (!isEqual(playerInfo, playerCache)){
    updatedCache = playerInfo;
    setCacheItem(id,playerInfo);
  }
}

module.exports = {updatePlayersChange};
