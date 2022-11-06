// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0];

function printForecast(arr) {
  let forecast = "...";
  for (let i = 0; i < arr.length; i++) {
    forecast = forecast.concat(` ${arr[i]}ºC in ${i + 1} days ...`);
  }
  return forecast;
}

console.log(printForecast(data2));
