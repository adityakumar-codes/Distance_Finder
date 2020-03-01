const fs = require("fs");

const appSheetReader = require("./appSheetReader");
const geoEncoder = require("./utils/geoEncoder");
const distanceFinder = require("./utils/distanceFinder");
const newMethod = require("./newMethod");
const csvWriter = require("./csvWriter");

var what = [];
var exceldata = appSheetReader.readSheet("EmployeeDetails.xlsx");
var len = exceldata.length;

var counter = 0;

exceldata.forEach(d =>
  geoEncoder.geocode(d["Address(society,area,sub-urb,city)"], (error, data) => {
    if (!!error) {
      console.log("error");
    } else {
      var coordinates = [data.longitude, data.latitude];
      distanceFinder.dist(coordinates, (error, distance) => {
        if (error) console.log("error 2");
        else {
          console.log(distance / 1000 + " km \t" + data.location + " ");
          d.distance = distance / 1000;

          console.log(d);

          console.log(d["times"]);

          if (d["times"] == 1) d.amount = d.distance * 10;
          else d.amount = d.distance * 10 * 2;

          what.push(d);

          counter++;
          console.log(counter);
          if (counter == len) {
            fs.writeFile("output.json", JSON.stringify(what), error => {
              if (error) console.log(error);
              else console.log("sss ");
            });
            csvWriter.toCSV(what);
          }
        }
      });
    }
  })
);

//"https://api.mapbox.com/directions/v5/mapbox/driving/73.7625,18.5993;73.94167,18.49667?access_token=pk.eyJ1IjoiYWRpdHlha3VtYXItY29kZXMiLCJhIjoiY2s1emhqc3VuMnJ1NDNkbjVyejJrcDZvdSJ9.NVoqWRTtSMxOn3FZNbhAlw"
