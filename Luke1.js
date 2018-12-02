const fetch = require('node-fetch');

fetch('https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-vekksort.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text.split('\n').map(value => parseInt(value));

    let total = 0;
    let biggest = 0;

    for (let number of lines) {
      if (number >= biggest){
        biggest = number;
        total += biggest;
      }
    }
    console.log(total); // 12920419
  })