'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {
                 
                 $scope.chartTypes = [
                                      {"id": "line", "title": "Line"},
                                      {"id": "spline", "title": "Smooth line"},
                                      {"id": "area", "title": "Area"},
                                      {"id": "areaspline", "title": "Smooth area"},
                                      {"id": "column", "title": "Column"},
                                      {"id": "bar", "title": "Bar"},
                                      {"id": "pie", "title": "Pie"},
                                      {"id": "scatter", "title": "Scatter"}
                                      ];
                 
                 $scope.dashStyles = [
                                      {"id": "Solid", "title": "Solid"},
                                      {"id": "ShortDash", "title": "ShortDash"},
                                      {"id": "ShortDot", "title": "ShortDot"},
                                      {"id": "ShortDashDot", "title": "ShortDashDot"},
                                      {"id": "ShortDashDotDot", "title": "ShortDashDotDot"},
                                      {"id": "Dot", "title": "Dot"},
                                      {"id": "Dash", "title": "Dash"},
                                      {"id": "LongDash", "title": "LongDash"},
                                      {"id": "DashDot", "title": "DashDot"},
                                      {"id": "LongDashDot", "title": "LongDashDot"},
                                      {"id": "LongDashDotDot", "title": "LongDashDotDot"}
                                      ];
                 
                 // QUI DOBBIAMO CAMBIARE I DATI CARICANDOLI DAL DB
                 $scope.chartSeries = [
                                       {"name": "Number of Vote", "data": [1, 2, 4, 7, 3], id: 's1'},
                                       {"name": "Rating", "data": [3, 1, null, 5, 2], connectNulls: true, id: 's2'},
                                       {"name": "Average Time", "data": [5, 2, 2, 3, 5], type: "column", id: 's3'},
                                       {"name": "Number of Call", "data": [1, 1, 2, 3, 2], type: "column", id: 's4'},
                                       {"name": "Traffic", "data": [1, 1, 2, 3, 2], type: "column", id: 's5'},
                                       {"name": "Responsive Time", "data": [1, 1, 2, 3, 2], type: "column", id: 's6'},
                                       ];
                 
                 $scope.chartStack = [
                                      {"id": '', "title": "No"},
                                      {"id": "normal", "title": "Normal"},
                                      {"id": "percent", "title": "Percent"}
                                      ];
                
                /* Tolta la funzionlità di aggiungere un punto random
                 
                 $scope.addPoints = function () {
                 var seriesArray = $scope.chartConfig.series;
                 var rndIdx = Math.floor(Math.random() * seriesArray.length);
                 seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
                 };
                 
                 */
                 
                 
                 var seriesId = 0;
                 
                 /* Tolta funzionalità di aggiungere un record
                  
                 $scope.addSeries = function () {
                 var rnd = []
                 for (var i = 0; i < 10; i++) {
                 rnd.push(Math.floor(Math.random() * 20) + 1)
                 }
                 var sId = '__series' + seriesId++;
                 $scope.chartConfig.series.push({
                                                data: rnd,
                                                id: sId
                                                });
                 }
                  */
                 
                 /* Tolta funzionalità di rimozione di una serie random
                  
                 $scope.removeRandomSeries = function () {
                 var seriesArray = $scope.chartConfig.series;
                 var rndIdx = Math.floor(Math.random() * seriesArray.length);
                 seriesArray.splice(rndIdx, 1);
                 }
                  
                  */
                 
                 /*Rimossa funzionalità di eliminazione di un dato
                 
                 $scope.removeSeries = function (id) {
                 var seriesArray = $scope.chartConfig.series;
                 seriesArray.splice(id, 1);
                 }
                  
                  */
                 
                 $scope.toggleHighCharts = function () {
                 this.chartConfig.useHighStocks = !this.chartConfig.useHighStocks;
                 }
                 
                 /* Tolta funzionalità di azzerare le statistiche
                  
                 $scope.replaceAllSeries = function () {
                 var data = [
                             { name: "first", data: [10], id: 'a' },
                             { name: "second", data: [3], id: 'b' },
                             { name: "third", data: [13], id: 'c' }
                             ];
                 $scope.chartConfig.series = data;
                 };
                  */
                 
                 $scope.chartConfig = {
                 
                 chart: {
                 height: 500,
                 width: 500,
                 type: 'line'
                 },
                 plotOptions: {
                 series: {
                 stacking: ''
                 }
                 },
                 series: $scope.chartSeries,
                 title: {
                 text: 'Microservice\'s Statistic'
                 }
                 }
                 
                 $scope.reflow = function () {
                 $scope.$broadcast('highchartsng.reflow');
                 };
                 
                 
                 });
