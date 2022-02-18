const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      // console.log("error:", error);
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      // console.log("Cat breed not found");
      callback(error, null);
      return;
    }
    if (!error) {
      // console.log(data[0].description);
      callback(null, data[0].description);
      return;
    }
  });
};

module.exports = { fetchBreedDescription };





