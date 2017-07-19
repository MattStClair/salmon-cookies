'use strict';
var timeOfDay = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocation =  [];
var cookiesPerDay = [];
var locationsTable = document.getElementById('locationsTable');

function Place(name, minCust, maxCust, avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlyCookies = function(){
    for(var i = 0; i < timeOfDay.length; i++){
      var randCustAmt = Math.ceil(Math.random() * ((maxCust - minCust) + 1)  + minCust) * avgCookies;
      return Math.trunc(randCustAmt);//
      this.cookiesPerDay.push(hourlyCookies()); //returns random customer amt to be multiplied by avg cookie for 6 am
    }
  };
  this.avgCookies = avgCookies;

  allLocation.push(this);
  this.render = function() {
    var trEl = document.createElement('tr');// creates table row
    var tdEl = document.createElement('td'); //creates table data
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td'); //creates table row2
    tdEl.textContent = this.hourlyCookies();
    trEl.appendChild(tdEl);

    locationsTable.appendChild(trEl);


  };
}

new Place('Pike and 1st', 23, 65, 2.3);
new Place('SeaTac AirPort', 3, 24, 1.2);
new Place('Seattle Center', 11, 38, 3.7);
new Place('Capitol Hill', 20, 38, 2.3);
new Place('Alki', 2, 15, 4.6);

console.log(allLocation[0].name, 'all location');


function makeHeaderRow(){
  for(var i = 0; i < timeOfDay.length; i++)
  {
    var trEl = document.createElement('th');
    var thEl = document.createElement('th');
    thEl.textContent = timeOfDay[i];//I want my times here...
    trEl.appendChild(thEl);
    locationsTable.appendChild(trEl);
  }
}


function addNumbersToInnerTable(){
  for(var u = 0; u < timeOfDay.length; u++)
  {
    var thEl = document.createElement('th'); //creates dresser
    var tdEl = document.createElement('td'); //gets clothes to fill it
    tdEl.textContent = timeOfDay[u];//assigns clothes to specific thing
    thEl.appendChild(tdEl); //connect clothes in dresser
    locationsTable.appendChild(thEl);//puts dresser in room
    //  //create table rows with random numbers
    //  var trEl = document.createElement('tr');
    //  var tdEl = document.createElement('td'); //creates table data
    // trEl.textContent = cookiesPerDay[u];
    // trEl.appendChild(tdEl);

  }
}
addNumbersToInnerTable();

//

function innerTable() {
  for(var i = 0; i < allLocation.length; i++){
    allLocation[i].render();
    // addNumbersToInnerTable();
    // //
  }
}
makeHeaderRow();
innerTable();
