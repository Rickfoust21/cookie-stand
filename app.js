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
  storeName: 'SeaTac',
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesPerCust: 1.2,
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


var seattleCenter = {
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesPerCust: 3.7,
  storeName: 'Seattle Center',
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


var capitolHill = {
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesPerCust: 2.3,
  storeName: 'Capitol Hill',
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


var alki = {
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesPerCust: 4.6,
  storeName: 'Alki',
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


function hourlySales(store) {
  for (var i = 0; i < store.businessHours.length; i++) {
    var number = store.avgCookiesPurchase();
    store.results.push(number);
  }
}

var list = document.getElementById('HourlyCookieSales');
function cookieList(store) {
  var header = document.createElement('h2');
  header.textContent = store.storeName;
  list.appendChild(header);

  var ulist = document.createElement('ul');
  list.appendChild(ulist);

  for (var j = 0; j < store.results.length; j++) {
    var listItem = document.createElement('li');
    listItem.textContent = store.businessHours[j] + ': ' + store.results[j];
    ulist.appendChild(listItem);
  }
  var footer = document.createElement('li');
  store.total();
  footer.textContent = store.totalSales;
  ulist.appendChild(footer);
}



hourlySales(firstAndPike);
console.log(firstAndPike.results);
cookieList(firstAndPike);
console.log (firstAndPike.avgCookiesPurchase());
console.log (firstAndPike);

hourlySales(seaTacAirport);
console.log(seaTacAirport.results);
cookieList(seaTacAirport);
console.log (seaTacAirport.avgCookiesPurchase());
console.log (seaTacAirport);

hourlySales(seattleCenter);
console.log(seattleCenter);
cookieList(seattleCenter);
console.log (seattleCenter.avgCookiesPurchase());
console.log (seattleCenter);

hourlySales(capitolHill);
console.log(capitolHill.results);
cookieList(capitolHill);
console.log (capitolHill.avgCookiesPurchase());
console.log (capitolHill);

hourlySales(alki);
console.log(alki.results);
cookieList(alki);
console.log (alki.avgCookiesPurchase());
console.log (alki);

