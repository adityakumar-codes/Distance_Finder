# Distance_Finder

clone the repo.
install NodeJS
open the command line and type in "npm install" to install the necessary packages.

you can either use your own EmployeeDetails.xlsx or replace the contents of this file.
DO not change the headings/The 0th row of the excel sheet.

if you are using another file, change the path in app.js in this line

var exceldata = appSheetReader.readSheet("EmployeeDetails.xlsx");

The 0th row of your file must also be exactly the same as this one.

If you want to change the location of the office, change this line in ./utils/distanceFinder.js

Line 4

const offcLoc = [73.94167, 18.49667];
