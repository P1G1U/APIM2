var http = require('http');
http.createServer(function (req, res) {
                  res.writeHead(200, {'Content-Type': 'text/plain'});
                  res.end('<html><head><meta charset="utf-8"><title>HTML Starter</title></head><body><div ng-app=""><p>Name: <input type="text" ng-model="name"></p><p>You wrote: {{ name }}</p></div></body></html>');
                  }).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');




angular.module('myApp').controller('AppCtrl', ['$scope', function($scope) {
                                               $scope.$back = function() {
                                               window.history.back();
                                               };
                                               }]);

//ricordo che profile è la pagina generale con l'immagine e i soldi .
//user è la "dashboard" della pagina profilo con tutte le sottopagine ApiPaga, ApiStat, UserPage, NewApi, BuyCredits
angular.module("APIM", ["ngRoute"])
.config(function($routeProvider) {
        $routeProvider.when("/profile", {...})
        .when("/profile/:ApiPage", {                        //L’oggetto di configurazione di ciascun URL prevede la possibilità di specificare i dettagli della vista da caricare.
                                                            //La proprietà templateUrl definisce il file HTML da caricare mentre la proprietà controller definisce il nome del controller da associare alla vista. Il file HTML conterrà esclusivamente il markup necessario da iniettare all’interno della vista e può contenere direttive ed espressioni Angular.
              templateUrl: "templates/ApiPage.html",
              controller: "ApiPageCntrl"
              })
        .when("/profile/:ApiStat", {
              templateUrl: "templates/ApiStat.html",        //creare tutte le pagine e i controller http://www.html.it/pag/54118/configurazione-del-routing/
              controller: "ApiStatCtrl"
              })
        .when("/profile/:UserPage", {
              templateUrl: "templates/UserPage.html",
              controller: "UserPageCtrl"
              })
        .when("/profile/:NewApi", {
              templateUrl: "templates/NewApi.html",
              controller: "NewApiCtrl"
              })
        .when("/profile/:BuyCredits", {
              templateUrl: "templates/BuyCredits.html",
              controller: "BuyCreditsCtrl"
              })
        .otherwise({redirectTo: "/profile/ApiPage"});
        });


