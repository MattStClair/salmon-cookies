'use strict';

var allLocation =  [];
var locationsTable = document.getElementById('locationsTable');

function Place(name, minCust, maxCust, avgCookies){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.custRand = function(){
    var randCustAmt = Math.ceil(Math.random() * ((maxCust - minCust) + 1)  + minCust) * avgCookies;
    return Math.trunc(randCustAmt);//   //returns random customer amt to be multiplied by avg cookie for 6 am
  };
  this.avgCookies = avgCookies;

  allLocation.push(this);
  this.render = function() {
    var trEl = document.createElement('tr');// creates table row
    var tdEl = document.createElement('td'); //creates table data
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    tdEl = document.createElement('td'); //creates table row2
    tdEl.textContent = this.custRand();
    trEl.appendChild(tdEl);

    //tdEl = document.createElement('td'); //create table data2
    //tdEl.textContent = this.maxCust;
    //trEl.appendChild(tdEl);
    locationsTable.appendChild(trEl);

  };
}


new Place('Pike and 1st', 23, 65, 2.3);
new Place('SeaTac AirPort', 3, 24, 1.2);
new Place('Seattle Center', 11, 38, 3.7);
new Place('Capitol Hill', 20, 38, 2.3);
new Place('Alki', 2, 15, 4.6);

function makeHeaderRow(){
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  thEl = document.createElement('th');
  thEl.textContent = 'Amount of cookies Sold';
  trEl.appendChild(thEl);


  locationsTable.appendChild(trEl);
}


function innerTable() {
  for(var i = 0; i < allLocation.length; i++){
    allLocation[i].render();
  }
}
makeHeaderRow();
innerTable();
