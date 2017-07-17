'use strict';
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
  }



}; ///end of function


console.log(pike.custRand());
console.log(pike.avgCustomersHourly());
