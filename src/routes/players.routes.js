const express = require("express");
const router = express.Router();

const {getPlayer} = require("../controllers/players.controllers");

router.get("/:id", getPlayer);

module.exports = router;