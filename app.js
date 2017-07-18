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
    var alkiUL = document.getElementById('alki');
    for(var i = 0; i < timeOfDay.length; i++)
    {
      var liEl = document.createElement('li');
      liEl.textContent = timeOfDay[i] + ': ' + pike.custRand();
      alkiUL.appendChild(liEl);
      console.log(timeOfDay[i] + ':' + pike.custRand());
    }
  }
}; ///end of function

pike.render();

console.log(pike.cookiesPerHour());

// //var alki = {
//    name: 'Alki',
//    seagullCount: [34, 56, 78, 14, 3000, 9000, 1200],
//    render: function(){
//      var alkiUL = document.getElementById('alki');
//      // This will render the seagull data array to the DOM
//      // We'll need a 'for' loop to iterate over the array

//      for(var i = 0; i < this.seagullCount.length; i++){
//        // There are three parts to this process:
//        // 1. Create an element
//        var liEl = document.createElement('li');
//        // 2. Give it content
//        liEl.textContent = days[i] + ': ' + this.seagullCount[i];
//        // 3. Append it to a certain place in the DOM
//        // parentElement.appendChild(childElement)
//        alkiUL.appendChild(liEl);
//      }
//    }
//  };
//
//  alki.render();
