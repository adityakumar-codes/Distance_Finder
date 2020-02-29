var geoEncoder = require("./utils/geoEncoder");
var distanceFinder = require("./utils/distanceFinder");

const letsTry = function(object, callback) {
  geoEncoder.geocode(object, (error, data) => {
    if (!!error) {
      callback(error, undefined);
    } else {
      //console.log(data);
      var coordinates = [data.longitude, data.latitude];
      distanceFinder.dist(coordinates, (error, distance) => {
        if (error) callback(error, undefined);
        else {
          console.log(distance / 1000 + " km \t" + data.location + " ");
          object.distance = distance / 1000;
        }
      });
    }
  });
  callback(undefined, object);
};

module.exports= {letsTry:letsTry}