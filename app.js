'use strict';
// var timeOfDay = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// var allLocation =  [];
// var cookiesPerDay = [];
// var locationsTable = document.getElementById('locationsTable');
//
// function Place(name, minCust, maxCust, avgCookies){
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.hourlyCookies = function(){
//     for(var i = 0; i < timeOfDay.length; i++){
//       var randCustAmt = Math.ceil(Math.random() * ((maxCust - minCust) + 1)  + minCust) * avgCookies;
//       return Math.trunc(randCustAmt);//
//       cookiesPerDay.push(this.hourlyCookies()); //returns random customer amt to be multiplied by avg cookie for 6 am
//     }
//   };
//   cookiesPerDay.push(this.hourlyCookies());
//   this.avgCookies = avgCookies;
//
//   allLocation.push(this);
//   this.render = function() {
//     var trEl = document.createElement('tr');// creates table row
//     var tdEl = document.createElement('td'); //creates table data
//     tdEl.textContent = this.name;
//     trEl.appendChild(tdEl);
//
//     tdEl = document.createElement('td'); //creates table row2
//     tdEl.textContent = this.hourlyCookies();
//     trEl.appendChild(tdEl);
//
//     locationsTable.appendChild(trEl);
//
//
//   };
// }
//
// new Place('Pike and 1st', 23, 65, 2.3);
// new Place('SeaTac AirPort', 3, 24, 1.2);
// new Place('Seattle Center', 11, 38, 3.7);
// new Place('Capitol Hill', 20, 38, 2.3);
// new Place('Alki', 2, 15, 4.6);
//
// function addNumbersToInnerTable(){
//   for(var i = 0; i < timeOfDay.length; i++)
//   {
//     var trEl = document.createElement('th');
//     var thEl = document.createElement('th');
//     thEl.textContent = cookiesPerDay[i];//I want my times here...
//     trEl.appendChild(thEl);
//     locationsTable.appendChild(trEl);
//   // for (var i = 0; i < 4; i++){
//   // for(var u = 1; u < timeOfDay.length; u++)
//   // {
//   //   var thEl = document.createElement('tr'); //creates dresser
//   //   var tdEl = document.createElement('td'); //gets clothes to fill it
//   //   tdEl.textContent = cookiesPerDay[u];//assigns clothes to specific thing
//   //   thEl.appendChild(tdEl); //connect clothes in dresser
//   //   locationsTable.appendChild(thEl);//puts dresser in room
//   //   ///create table rows with random numbers
//   //   //  var trEl = document.createElement('tr');
//   //   //  var tdEl = document.createElement('td'); //creates table data
//   //   // trEl.textContent = cookiesPerDay[u];
//   //   // trEl.appendChild(tdEl);
//   // }
//   // var thEl = document.createElement('th'); //creates dresser
//   // var tdEl = document.createElement('td'); //gets clothes to fill it
//   // tdEl.textContent = cookiesPerDay[u];//assigns clothes to specific thing
//   // thEl.appendChild(tdEl); //connect clothes in dresser
//   // locationsTable.appendChild(thEl);//puts dresser in room
//   // //  //create table rows with random numbers
//   // //  var trEl = document.createElement('tr');
//   // //  var tdEl = document.createElement('td'); //creates table data
//   // // trEl.textContent = cookiesPerDay[u];
//   // // trEl.appendChild(tdEl);
//
//   }
// }
// function makeHeaderRow(){
//   for(var i = 0; i < timeOfDay.length; i++)
//   {
//     var trEl = document.createElement('th');
//     var thEl = document.createElement('th');
//     thEl.textContent = timeOfDay[i];//I want my times here...
//     trEl.appendChild(thEl);
//     locationsTable.appendChild(trEl);
//   }
// }
// function makeNextRow(){
//   for(var i = 0; i < timeOfDay.length; i++)
//   {
//     var thEl = document.createElement('tr');
//     var tdEl = document.createElement('td');
//     thEl.textContent = timeOfDay[i];//I want my times here...
//     tdEl.appendChild(thEl);
//     locationsTable.appendChild(tdEl);
//   }
// }
//
// // // //function innerTable() {
// // //   for(var i = 0; i < allLocation.length; i++){
// // //     allLocation[i].render();
// // //     addNumbersToInnerTable();
// // //
// // //     // //
// // //   }
// // }
// makeHeaderRow();
// makeNextRow();
// innerTable();
//
// addNumbersToInnerTable();

var allCats = [];

var times = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// We need to access the table that is in the DOM
var catTable = document.getElementById('cats');

// We need a constructor to make our cat objects
function Cat(name, min, max, avgCookies){
  this.name = name;
  this.min = min;
  this.max = max;

  allCats.push(this);

  this.render = function() {


    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Location';
    trEl.appendChild(tdEl);


    tdEl.textContent = name;
    trEl.appendChild(tdEl);

    for(var i = 0; i < 14; i++)
    {
      tdEl = document.createElement('td');
      var randCustAmt = Math.ceil(Math.random() * ((max - min) + 1)  + min) * avgCookies;
      tdEl.textContent = Math.trunc(randCustAmt);
      trEl.appendChild(tdEl);
    }
    catTable.appendChild(trEl);
  }
}

new Cat('1st and Pike', 23, 65, 2.3);
new Cat('Seatac AirPort', 23, 65, 2.3);
new Cat('Seattle Center', 23, 65, 2.3);
new Cat('Capitol Hill', 20, 38, 2.3);
new Cat('Alki', 2, 15, 4.6);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  for (var i = 0; i < times.length; i++)
  {
    //creates tablerow
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
    catTable.appendChild(trEl);
  }
}

// It would be nice to have a single function that renders all of the individual cat rows

function catRowsFTW() {
  for(var i = 0; i < allCats.length; i++){
    allCats[i].render();
  }
}

makeHeaderRow();
catRowsFTW();
