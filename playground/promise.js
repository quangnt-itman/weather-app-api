const newPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      resolve("Success") // callback(null, "Success")
      // reject("Fail") // callback("Fail", null)

    }, 1000);
  })
}

newPromise()
  .then(res => {
    console.log("res: ", res)
  })
  .catch(err => {
    console.log("err: ", err)
  })