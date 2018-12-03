const fetch = require('node-fetch');

const main = async () => {
  const response = await fetch('https://s3-eu-west-1.amazonaws.com/knowit-julekalender-2018/input-rain.txt');
  const lines = (await response.text()).split('\n');

  const slopes = {};

  for (let line of lines) {
    const match = line.match(/\((?<x1>\d+),(?<y1>\d+)\);\((?<x2>\d+),(?<y2>\d+)\)/);
    
    if (match) {
      const {x1, y1, x2, y2} = match.groups;
      const slope = (y2 - y1) / (x2 - x1);
      
      if (slope in slopes) {
        slopes[slope] += 1; 
      } else {
        slopes[slope] = 1;
      }
    }
  }
  console.log(Object.values(slopes).reduce((previous, current) => Math.max(previous, current), 0)); // => 324
}

main()

