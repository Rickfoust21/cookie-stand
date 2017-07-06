'use strict';

function Location(name, minCustomers, maxCustomers,cookieAverage){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.cookieAverage = cookieAverage;
  this.openHours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
  this.hourlyCookies = randomizedCookieHours(this);
  this.hourlyEmployees = salmonTosser(this);
}

Location.prototype.tableRow = function(){
  var tableDataRow = document.createElement('tr');
  var tableDataCell = document.createElement('td');

  tableDataCell.textContent = this.name;
  tableDataCell.setAttribute('class', 'location');
  tableDataRow.appendChild(tableDataCell);

  for(var i = 0; i < this.hourlyCookies.length; i++){
    var hourlyCookiesCell = document.createElement('td');

    hourlyCookiesCell.textContent = this.hourlyCookies[i];
    tableDataRow.appendChild(hourlyCookiesCell);
  }
  var dailyTotalCell = document.createElement('td');

  dailyTotalCell.textContent = dailyTotal(this);
  tableDataRow.appendChild(dailyTotalCell);
  tableBody.appendChild(tableDataRow);
};

Location.prototype.employeeRow = function(){

  var employeeTableRowEl = document.createElement('tr');
  var employeeTableCellEl = document.createElement('td');

  employeeTableCellEl.textContent = this.name;
  employeeTableCellEl.setAttribute('class', 'location');
  employeeTableRowEl.appendChild(employeeTableCellEl);
  for(var i = 0; i < this.hourlyEmployees.length; i++){
    var hourlyEmployeesCell = document.createElement('td');
    hourlyEmployeesCell.textContent = this.hourlyEmployees[i];
    employeeTableRowEl.appendChild(hourlyEmployeesCell);
  }
  employeeTableBody.appendChild(employeeTableRowEl);
};

function salmonTosser(location){
  var salmonTosserHours = [];
  var tosserPerHour = 0;

  for(var i = 0; i < location.hourlyCookies.length; i++){
    tosserPerHour = Math.ceil((location.hourlyCookies[i]) / 20);
    if(tosserPerHour === 1){
      tosserPerHour += 1;
    }
    salmonTosserHours.push(tosserPerHour);
  }
  return salmonTosserHours;
}

function randomizedCookie(min, max, cookies) {
  var customers = Math.floor(Math.random() * (max - min + 1) + min);
  var cookiesPerHour = Math.ceil(customers * cookies);
  return cookiesPerHour;
}

function randomizedCookieHours(location){
  var hourlyCookies = [];
  for(var i = 0; i < location.openHours.length; i++){
    hourlyCookies.push(randomizedCookie(location.minCustomers, location.maxCustomers, location.cookieAverage));
  }
  return hourlyCookies;
}


function dailyTotal(location){
  var total = 0;
  for(var i = 0; i < location.hourlyCookies.length; i++){
    total += location.hourlyCookies[i];
  }
  finalTotal += total; ///Total for all cookies at all locations
  return total;
}

function printTable(){
  tableHead(locationArray[0].openHours);
  tableBody = document.createElement('tbody');
  tableBody.setAttribute('id', 'table-body');
  tableEl.appendChild(tableBody);

  for(var i = 0; i < locationArray.length; i++){
    locationArray[i].tableRow(locationArray[i]);
  }
  tableFooter();
  for(var c = 0; c < locationArray.length; c++){
    locationArray[c].employeeRow(locationArray[c]);
  }
}

function tableHead(hours){
  var tableHeader = document.createElement('thead');
  var tableHeaderRow = document.createElement('tr');
  var tableHeaderLocationCell = document.createElement('th');
  tableHeaderRow.appendChild(tableHeaderLocationCell);

  var employeeHeader = document.createElement('thead');
  var employeeHeaderRow = document.createElement('tr');
  var employeeHeaderLocationCell = document.createElement('th');
  employeeHeaderRow.appendChild(employeeHeaderLocationCell);

  for(var i = 0; i < hours.length; i++){

    var tableHeaderCell = document.createElement('th');
    tableHeaderCell.textContent = hours[i];
    tableHeaderRow.appendChild(tableHeaderCell);

    var employeeHeaderCell = document.createElement('th');
    employeeHeaderCell.textContent = hours[i];
    employeeHeaderRow.appendChild(employeeHeaderCell);
  }
  var tableHeaderTotal = document.createElement('th');
  tableHeaderTotal.textContent = 'Daily Total';
  tableHeaderRow.appendChild(tableHeaderTotal);
  tableHeader.appendChild(tableHeaderCell);

  employeeHeader.appendChild(employeeHeaderRow);
  employeeTable.appendChild(employeeHeader);
  tableHeader.appendChild(tableHeaderRow);
}

function tableFooter(){
  var tfootEl = document.createElement('tfoot');
  var tfootCell = document.createElement('th');
  var tfootTotal = document.createElement('th');

  tfootTotal.textContent = finalTotal;
  tfootCell.textContent = 'Total Cookies';
  tfootEl.appendChild(tfootCell);

  for(var i = 0; i < locationArray[0].openHours.length; i++){
    var tableFooterTotalEl = document.createElement('th');
    tableFooterTotalEl.textContent = columnTotal(i);
    tfootEl.appendChild(tableFooterTotalEl);
  }
  tfootEl.appendChild(tfootTotal);
  tableEl.appendChild(tfootEl);
}

function columnTotal(hour){
  var total = 0;
  for(var i = 0; i < locationArray.length; i++){
    total += locationArray[i].hourlyCookies[hour];
  }
  return total;
}

function updateStoreOption(){
  for(var i = 0; i < locationArray.length; i++){
    storeNameOption.innerHTML += '<option value="option' + i + '">' + locationArray[i].name + '</option>';
  }
}

console.log(tableFooter);
var finalTotal = 0;

var pike = new Location('1st and Pike',23, 65, 6.3);
var seaTac = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Center', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20,	38,	2.3);
var alki = new Location('Alki', 2, 16, 4.6);


var locationArray = [pike, seaTac, seattleCenter, capitolHill, alki];
console.log(locationArray);

var storeNameOption = document.getElementById('storeName');
var tableEl = document.getElementById('location-table');
var employeeTable = document.getElementById('employee-table');
var employeeTableBody = document.getElementById('employee-table-body');
var tableBody;

printTable();
updateStoreOption();

var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.store.value);
  var store = event.target.store.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var cookieAverage = event.target.cookieAverage.value;
  var index = -1;

  for(var i = 0; i < locationArray.length; i++){
    if(locationArray[i].name === store){
      console.log('Updating an already existing item');
      index = i;
    }
  }
  locationArray[index].name = store;
  locationArray[index].minCustomers = min;
  locationArray[index].maxCustomers = max;
  locationArray[index].cookieAverage = cookieAverage; }
