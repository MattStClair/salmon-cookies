'use strict';

var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

var pike = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((pike.maxCust - pike.minCust) + 1) + pike.minCust) * pike.avgCookies;


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },
  //
  // ///////////getting avg cookies per hour
  //
  cookiesPerHour: function (){
    for(var i = 0; i < timeOfDay.length; i++)
    {
      console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  },
  render:function(){
    var pikUL = document.getElementById('pik');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liPi  = document.createElement('li');
      liPi.textContent = timeOfDay[i] + ': ' + pike.custRand();
      pikUL.appendChild(liPi);
      //console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

pike.render();

console.log(pike.cookiesPerHour());

////seaTacA

var seaTacA = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((seaTacA.maxCust - seaTacA.minCust) + 1) + seaTacA.minCust) * seaTacA.avgCookies;


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },
  //
  // ///////////getting avg cookies per hour
  //
  cookiesPerHour: function (){
    for(var i = 0; i < timeOfDay.length; i++)
    {
      console.log(timeOfDay[i] + ':' + seaTacA.custRand());
    }
  },
  render:function(){
    var seaUL = document.getElementById('seaTac');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liSea = document.createElement('li');
      liSea.textContent = timeOfDay[i] + ': ' + seaTacA.custRand();
      seaUL.appendChild(liSea);
      //console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

seaTacA.render();

var seaCent = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((seaCent.maxCust - seaCent.minCust) + 1) + seaCent.minCust) * seaCent.avgCookies;


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },
  //
  // ///////////getting avg cookies per hour
  //
  cookiesPerHour: function (){
    for(var i = 0; i < timeOfDay.length; i++)
    {
      console.log(timeOfDay[i] + ':' + seaCent.custRand());
    }
  },
  render:function(){
    var seaCUl = document.getElementById('seaCent');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liSeaC = document.createElement('li');
      liSeaC.textContent = timeOfDay[i] + ': ' + seaCent.custRand();
      seaCUl.appendChild(liSeaC);
      //console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

seaCent.render();

var caphill = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((caphill.maxCust - caphill.minCust) + 1) + caphill.minCust) * caphill.avgCookies;


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },
  //
  // ///////////getting avg cookies per hour
  //
  cookiesPerHour: function (){
    for(var i = 0; i < timeOfDay.length; i++)
    {
      console.log(timeOfDay[i] + ':' + caphill.custRand());
    }
  },
  render:function(){
    var capUl = document.getElementById('cap');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liCap = document.createElement('li');
      liCap.textContent = timeOfDay[i] + ': ' + caphill.custRand();
      capUl.appendChild(liCap);
      //console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

caphill.render();

var alki = {
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  custRand: function(){

    var randCustAmt = Math.floor(Math.random() * ((alki.maxCust - alki.minCust) + 1) + alki.minCust) * alki.avgCookies;


    return randCustAmt;//   //returns random customer amt to be multiplied by avg cookie for 6 am
  },
  //
  // ///////////getting avg cookies per hour
  //
  cookiesPerHour: function (){
    for(var i = 0; i < timeOfDay.length; i++)
    {
      console.log(timeOfDay[i] + ':' + alki.custRand());
    }
  },
  render:function(){
    var alkUl = document.getElementById('alk');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liAlk = document.createElement('li');
      liAlk.textContent = timeOfDay[i] + ': ' + alki.custRand();
      alkUl.appendChild(liAlk);
      //console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

alki.render();
