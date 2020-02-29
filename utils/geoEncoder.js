const request = require("request");

const geocode = (address, callback) => {
  const place_search_url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYWRpdHlha3VtYXItY29kZXMiLCJhIjoiY2s1emhqc3VuMnJ1NDNkbjVyejJrcDZvdSJ9.NVoqWRTtSMxOn3FZNbhAlw&limit=1";

  // console.log(place_search_url);

  request({ url: place_search_url, json: true }, (error, { body }) => {
    if (error) callback("unable to connect", undefined);
    else if (body.features.length == 0) callback("invaid place", undefined);
    else {
      data = {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      };
      callback(undefined, data);
    }
  });
};

module.exports = { geocode: geocode };
