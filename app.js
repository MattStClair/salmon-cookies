'use strict';

var allLocation = [];
var salesform = document.getElementById('sales-form');
var times = ['Location', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Totals'];
var salesTable = document.getElementById('sales');
var cookieHourlyTotals = ['Totals'];



function Places(name, min, max, avgCookies){ //maybe I will gather inputs to here from form?
// constructor
  this.name = name;
  this.min = min;
  this.max = max;

  allLocation.push(this);

  this.render = function() {
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Location';
    trEl.appendChild(tdEl);
    tdEl.textContent = name;
    trEl.appendChild(tdEl);
    salesTable.innHTML = '';
    for(var i = 0; i < 14; i++)
    {
      tdEl = document.createElement('td');
      var randCustAmt = Math.ceil(Math.random() * ((max - min) + 1)  + min) * avgCookies;
      tdEl.textContent = Math.trunc(randCustAmt);
      trEl.appendChild(tdEl);

      cookieHourlyTotals.push(Math.trunc(randCustAmt));
      //add totals and push to totals array
    }
    tdEl = document.createElement('td');
    tdEl.textContent = Math.trunc(randCustAmt);
    trEl.appendChild(tdEl);
    salesTable.appendChild(trEl);
  };
}

new Places('1st and Pike', 23, 65, 2.3);
new Places('Seatac AirPort', 23, 65, 2.3);
new Places('Seattle Center', 23, 65, 2.3);
new Places('Capitol Hill', 20, 38, 2.3);
new Places('Alki', 2, 15, 4.6);

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  for (var i = 0; i < times.length; i++)
  {
    //creates tablerow
    var thEl = document.createElement('th');
    thEl.textContent = times[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  }
}

// function makeEndColumn(){
//
//   var trHl = document.createElement('th');
//   //loop
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'totals';
//   trHl.appendChild(tdEl);
//   salesTable.appendChild(trHl);
//
//
// }

// function makeFooterRow(){
//   var trEl = document.createElement('tr');
//   for (var i = 0; i < times.length; i++)
//   {
//     //creates tablerow
//     var thEl = document.createElement('th');
//     thEl.textContent = cookieHourlyTotals[i];//totals of cookies for that hour
//
//     trEl.appendChild(thEl);
//     salesTable.appendChild(trEl);
//   }
// }


function locationsRowsCreator() {
  for(var i = 0; i < allLocation.length; i++){
    allLocation[i].render();
  }
}



function handlePlaceSubmit (event){
  event.preventDefault();
  var name = event.target.addedPlace.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;////; add other html elements

  var store = new Places(name, min, max, avg);
  //
  // for(var i = 0; i < allLocation.length; i++)
  // {
  //   if(event.target.addedPlace.value === allLocation[i].name)
  //   {
  //       //re-calculate numbers
  //   }
  //   else
  //   {
  //       //make a new instance and render
  //   }
  // }

  store.render();

}

//CREATE NEW FUNCTION WHICH WILL MAKE THE FOOTER ROW WITH THE TOTALS BRAH!
//IT WILL BE AN ARRAY LIKE THE HEADER BUT WILL CONTAIN


salesform.addEventListener('submit', handlePlaceSubmit);

makeHeaderRow();
// makeEndColumn();
locationsRowsCreator();
// makeFooterRow();///this is where my footer row function will go
