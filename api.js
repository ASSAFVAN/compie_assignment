const axios = require("axios");

const playersApi = async (id) =>{
  const response = await axios({
    url:`https://www.balldontlie.io/api/v1/players/${id}`,
    method: "get"
  });
  return response.data;
}


module.exports = {playersApi};