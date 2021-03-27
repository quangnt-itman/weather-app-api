const axios = require("axios");
const { config } = require("../config");

// callback(err, res)
const getLocation = async (address) => {
  try {
    const res = await axios.get(`${config.google.url}?key=${config.google.key}&address=${address}`)

    if (res.data.status === "ZERO_RESULTS") throw {
      message: "Address Not Found",
      statusCode: 404
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getLocation: getLocation
}