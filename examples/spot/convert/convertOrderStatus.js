"use strict";

const Spot = require("../../../src/spot");

const apiKey = "";
const apiSecret = "";
const client = new Spot(apiKey, apiSecret);

client
  .convertOrderStatus("6a5sds65af5sa7d7")
  .then((response) => client.logger.log(response.data))
  .catch((error) => client.logger.error(error));
