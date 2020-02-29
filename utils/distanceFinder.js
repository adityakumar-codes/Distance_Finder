const request = require("request");

const dist = (coordinates, callback) => {
  const offcLoc = [73.94167, 18.49667];
  var location = encodeURIComponent(coordinates + ";" + offcLoc);

  var call_url =
    "https://api.mapbox.com/directions/v5/mapbox/driving/" +
    location +
    "?access_token=pk.eyJ1IjoiYWRpdHlha3VtYXItY29kZXMiLCJhIjoiY2s1emhqc3VuMnJ1NDNkbjVyejJrcDZvdSJ9.NVoqWRTtSMxOn3FZNbhAlw";

  request({ url: call_url, json: true }, (error, { body }) => {
    if (error) callback(error, undefined);
    else callback(undefined, body.routes[0].distance);
  });
};

module.exports = { dist: dist };
