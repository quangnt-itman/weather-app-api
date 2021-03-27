const { config } = require("../config");
// const exportConfig = require("../config");
// const config = exportConfig.config
const request = require("request");

const getDarkSky = (lat, lng, callback) => {
  request.get({
    url: `${config.darksky.url}/${config.darksky.key}/${lat},${lng}`,
    json: true
  }, (err, res, body) => {
    // Hoc Vien tu handle error phan nay
    console.log(err)

    // result
    callback(null, {
      temperature: body.currently.temperature,
      summary: body.currently.summary,
      icon: body.currently.icon,
    })
  })
}

module.exports = {
  getDarkSky
}