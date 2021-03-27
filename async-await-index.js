const yargs = require("yargs");
const { getLocation } = require("./async-await-services/googleApis")

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