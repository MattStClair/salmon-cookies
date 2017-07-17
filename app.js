'use strict';

var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((pike.maxCust - pike.minCust) + 1) + pike.minCust);


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },

  ///////////getting avg customers per hour

  avgCustomersHourly: function (){

    var aCH = (pike.custRand() * pike.avgCookies);
    return aCH;
  },
  custPerHour: [pike.avgCustomersHourly, pike.avgCustomersHourly, pike.avgCustomersHourly, pike.avgCustomersHourly, pike.avgCustomersHourly, pike.avgCustomersHourly, pike.avgCustomersHourly],

  custHourly: function(){
    for(var i = 0; i < pike.custPerHour.length; i++)
    {
      for(var t = 0; t < timeOfDay.length; t++)
      {

        return console.log('the time of day is: ' + timeOfDay[t] + ' and the amount of customers is ' + pike.avgCustomersHourly[i]);
      }
    }
  }
}; ///end of function

console.log(pike.custHourly());
console.log(pike.custRand());
console.log(pike.avgCustomersHourly());
