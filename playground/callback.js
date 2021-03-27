let x;

function queryData(cb) {
  setTimeout(() => {
    x = 10;
    console.log("Query DB successfully");
    cb();
  }, 2000);
}

function printData() {
  console.log(x);
}

queryData(function () {
  printData();

});

queryData(printData);
