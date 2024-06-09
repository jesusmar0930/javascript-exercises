const convertToCelsius = function(fahr) {
  let celsiusResult;
  celsiusResult = ((fahr - 32) * 5/9);
  let roundedcelsiusResult = Math.round(celsiusResult * 10) / 10
  return roundedcelsiusResult;
};

const convertToFahrenheit = function(cel) {
  let fahrenheitResult; 
  fahrenheitResult = ((9/5 * cel) + 32)
  let roundedfahrenheitResult = Math.round(fahrenheitResult * 10) / 10
  return roundedfahrenheitResult

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
