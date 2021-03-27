const yargs = require("yargs");
const { getLocation } = require("./promise-services/googleApis")
const { getDarkSky } = require("./promise-services/darkskyApis")

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Enter your address",
      string: true
    }
  })
  .help()
  .alias("help", "h")
  .argv;

const address = argv.address;


getLocation(address)
  .then(res => {
    console.log(res)
    const { lat, lng } = res;

    return getDarkSky(lat, lng)
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })