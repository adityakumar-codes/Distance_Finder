var appSheetReader = require("./appSheetReader");
var geoEncoder = require("./utils/geoEncoder");
var distanceFinder = require("./utils/distanceFinder");
var what = [];
var data = appSheetReader.readSheet("EmployeeDetails.xlsx");

setTimeout(
  () =>
    data.forEach(d =>
      geoEncoder.geocode(
        d["Address(society,area,sub-urb,city)"],
        (error, data) => {
          if (!!error) {
            console.log("error");
          } else {
            //console.log(data);
            var coordinates = [data.longitude, data.latitude];
            distanceFinder.dist(coordinates, (error, distance) => {
              if (error) console.log("error 2");
              else {
                console.log(distance / 1000 + " km \t" + data.location + " ");
                d.timepass = distance;
              }
            });
          }
        }
      )
    ),
  0
);

// data.forEach(d =>
//   geoEncoder.geocode(d["Address(society,area,sub-urb,city)"], (error, data) => {
//     if (!!error) {
//       console.log("error");
//     } else {
//       //console.log(data);
//       var coordinates = [data.longitude, data.latitude];
//       distanceFinder.dist(coordinates, (error, distance) => {
//         if (error) console.log("error 2");
//         else {
//           console.log(distance / 1000 + " km \t" + data.location + " ");
//           d.timepass = distance;
//         }
//       });
//     }
//   })
// );

// setTimeout(() => {
//   console.log("sync hua na");
// }, 0);

//console.log(data);

//"https://api.mapbox.com/directions/v5/mapbox/driving/73.7625,18.5993;73.94167,18.49667?access_token=pk.eyJ1IjoiYWRpdHlha3VtYXItY29kZXMiLCJhIjoiY2s1emhqc3VuMnJ1NDNkbjVyejJrcDZvdSJ9.NVoqWRTtSMxOn3FZNbhAlw"
