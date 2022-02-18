const request = require('request');

let input = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${input[0]}`, (error, response, body) => {
  if (error) {
    console.log("error:", error);
    return;
  }  
  const data = JSON.parse(body);
  
  if (data.length == 0) {
    console.log("Cat breed not found");
    return;
  }
  if (!error){
    console.log(data[0].description);
    return;
  }
 
  
  // console.log(typeof body)
  // console.log(data);
  // console.log(typeof data);
  
  });


