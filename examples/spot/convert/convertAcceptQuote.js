"use strict";

const Spot = require("../../../src/spot");

const apiKey = "";
const apiSecret = "";
const client = new Spot(apiKey, apiSecret);

client
  .convertAcceptQuote("4c67ab9d7e96f456")
  .then((response) => client.logger.log(response.data))
  .catch((error) => client.logger.error(error));
