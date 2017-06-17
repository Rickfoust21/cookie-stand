'use strict';

var firstAndPike = {
  storeName: 'Pike',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiesPerCust: 6.3,
  avgCookiesPurchase: function() {
    return Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust;
  },
  hourlySales: 0,
  totalSales: 0,
  businessHours: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  results: [],
  total: function(){
    for (var i = 0; i < this.results.length; i++) {
      this.totalSales = this.totalSales + this.results[i];
    }
  }
};

var seaTacAirport = {
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2,
  storeName: 'SeaTac',
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  hourlySales: 0,
  totalSales: 0,
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'),
  results: [],
  total: function(){
    for (var i = 0; i < this.results.length; i++) {
      this.totalSales = this.totalSales + this.results[i];
    }
  }
};



seaTacAirport;
console.log ('Store data: ' + seaTacAirport.avgCookiesPurchase());
console.log(seaTacAirport);


var seattleCenter = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  storeName: 'Seattle Center',
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  hourlySales: 0,
  totalSales: 0,
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'),
  total: function(){
    for (var i = 0; i < this.results.length; i++) {
      this.totalSales = this.totalSales + this.results[i];
    }
  }
};

seattleCenter;
console.log ('Store data: ' + seattleCenter.avgCookiesPurchase());
console.log (seattleCenter);

var capitolHill = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  storeName: 'Capitol Hill',
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  hourlySales: 0,
  totalSales: 0,
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'),
  total: function(){
    for (var i = 0; i < this.results.length; i++) {
      this.totalSales = this.totalSales + this.results[i];
    }
  }
};

capitolHill;
console.log ('Store data: ' + capitolHill.avgCookiesPurchase());
console.log (capitolHill);


var alki = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesPerCust: 4.6,
  storeName: 'Alki',
  avgCookiesPurchase: function(minHourlyCust, maxHourlyCust) {
    return Math.floor(Math.random() * (maxHourlyCust - minHourlyCust)) + minHourlyCust;
  },
  hourlySales: 0,
  totalSales: 0,
  businessHours: ('8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'),
  total: function(){
    for (var i = 0; i < this.results.length; i++) {
      this.totalSales = this.totalSales + this.results[i];
    }
  }
};

alki;
console.log ('Store data: ' + alki.avgCookiesPurchase());
console.log (alki);

function hourlySales(store) {
  for (var i = 0; i < store.businessHours.length; i++) {
    var number = store.avgCookiesPurchase();
    store.results.push(number);
  }
}

hourlySales(firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki);
console.log(firstAndPike.results);
var list = document.getElementById('HourlyCookieSales');



function cookieList(store) {
  var header = document.createElement('h2');
  header.textContent = store.storeName;
  list.appendChild(header);

  var ulist = document.createElement('ul');
  list.appendChild(ulist);

  for (var j = 0; j < store.results.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = store.businessHours[i] + ': ' + store.results[i];
    ulist.appendChild(listItem);
  }
  // var total1 = total();
  // var footer = document.createElement('li');
  // footer.textContent = store.total1;
  // ulist.appendChild(footer);
  // console.log(total1);
}
cookieList(firstAndPike);
console.log (firstAndPike.avgCookiesPurchase());
console.log (firstAndPike);

cookieList(seattleCenter);
console.log (seattleCenter.avgCookiesPurchase());
console.log (seattleCenter);
