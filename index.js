/* const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

let ipAdress = 'a';
// let coordinates = { longitude: "-79.3716", latitude: "43.6319" };

fetchMyIP((error, ip) => {
  fetchCoordsByIP(ip, (error, coords) => {
    fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
      console.log(flyOverTimes);
    });
  });
});

 */

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

