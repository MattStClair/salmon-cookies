'use strict';
var salesform = document.getElementById('sales-form');
var allLocations = []; //holds location names, pushed from Places Constructor
// var salesform = document.getElementById('sales-form'); //name of form which values come from
var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; //array looping across top of table
var salesTable = document.getElementById('sales');

function Places(name, min, max, avgCookies){
  // constructor which recieves input from new objects
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.cookieHourlyTotals = [];
  this.totalDailyCookies = 0;
  this.customersPerHour = [];
  allLocations.push(this);

  this.randomNum = function (min, max) {
    return Math.floor((Math.random() * ((max - min) + 1) + min));
  };

  this.calcCookiesPerhour = function (){
    for( var i = 0; i < times.length; i++)
    {
      var randCust = this.randomNum(this.min, this.max);
      var hourlyCookies = Math.ceil(randCust * this.avgCookies);
      this.cookieHourlyTotals.push(hourlyCookies);
      this.totalDailyCookies += this.cookieHourlyTotals[i];

    }
  };
  this.render = function() {   //this creates a row and adds data
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for(var j = 0; j < this.cookieHourlyTotals.length; j++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.cookieHourlyTotals[j];
      trEl.appendChild(tdEl);
      salesTable.appendChild(trEl);
    }
  };

  this.calcCookiesPerhour();
};

function createTotalsColumn(){
  for(var k = 0; k < allLocations.length; k++){
    var cookiesLastColumnTotals = document.createElement('tr');
    cookiesLastColumnTotals.textContent = 'word';
    //totalsThEl.appendChild(cookiesLastColumnTotals);
    salesTable.appendChild(cookiesLastColumnTotals);
  }
}

new Places('1st and Pike', 23, 65, 2.3);
new Places('Seatac AirPort', 23, 65, 2.3);
new Places('Seattle Center', 23, 65, 2.3);
new Places('Capitol Hill', 20, 38, 2.3);
new Places('Alki', 2, 15, 4.6);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var emptyThEl = document.createElement('th');
  emptyThEl.textContent = '';
  trEl.appendChild(emptyThEl);

  for (var i = 0; i < times.length; i++)
  {
    //creates tablerow
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
  }

  var totalsThEl = document.createElement('th');
  totalsThEl.textContent = 'Totals';
  trEl.appendChild(totalsThEl);


  //forloop that adds all to the salesTable

  salesTable.appendChild(trEl);
  //maybe where I would calculate totals, new tr?'s'
}


function locationsRowsCreator() {
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
}

function handlePlaceSubmit (event){
  event.preventDefault();
  var name = event.target.addedPlace.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;////; add other html elements

  var store = new Places(name, min, max, avg);
  store.randomNum();
  store.render();

}

salesform.addEventListener('submit', handlePlaceSubmit);
makeHeaderRow();

locationsRowsCreator();
