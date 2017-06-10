
'use strict';

var firstAndPike = {
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
};
var businessHours = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


businessHours.forEach(function(avgCookiesPurchase){
  console.log(avgCookiesPurchase);
});


console.log ('Store data: ' + firstAndPike.avgCookiesPurchase());
console.log (firstAndPike);



var seaTacAirport = {
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2, avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm')
};

seaTacAirport;
console.log ('Store data: ' + seaTacAirport.avgCookiesPurchase());
console.log(seaTacAirport);



var seattleCenter = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm')
};

seattleCenter;
console.log ('Store data: ' + seattleCenter.avgCookiesPurchase());
console.log (seattleCenter);




var capitolHill = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm')
};





var alki = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesPerCust: 4.6,
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm')
};

alki;
console.log ('Store data: ' + alki.avgCookiesPurchase());
console.log 


