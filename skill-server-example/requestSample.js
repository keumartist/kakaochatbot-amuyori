const request = require('request');
// const fetch = require('node-fetch'); // requeset가 올해 epreciated 되는 바람에 fetch라는 대안을 찾음. 하지만 아직 request가 더 좋은거 같아서 그거 씀

const smapleAPIUrl = 'http://211.237.50.150:7080/openapi/sample/json/Grid_20150827000000000226_1/1/1'

request.get(smapleAPIUrl, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Recipe API
  const dishInfo = JSON.parse(body)['Grid_20150827000000000226_1']['row'];
  console.log(dishInfo);
});