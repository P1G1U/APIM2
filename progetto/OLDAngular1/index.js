var http = require('http');
http.createServer(function (req, res) {
                  res.writeHead(200, {'Content-Type': 'text/plain'});
                  res.end('<html><head><meta charset="utf-8"><title>HTML Starter</title></head><body><div ng-app=""><p>Name: <input type="text" ng-model="name"></p><p>You wrote: {{ name }}</p></div></body></html>');
                  }).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');




angular.module('myApp', ["highcharts-ng", 'ngMaterial']).controller('AppCtrl', ['$scope', function($scope) {
                                               $scope.$back = function() {
                                               window.history.back();
                                               };
                                               $scope.currentNavItem = 'home.html';
                                               }]);

//manca la forward


//barra navigazione


//queste sono due funzioni diverse prese dalla stessa guida di angular Material (funzione 1 associata alla teoria)
(function() {
 'use strict';
 
 $rootScope.$on('$routeChangeSuccess', function(event, current) {
                $scope.currentLink = getCurrentLinkFromRoute(current);
                });
 });
//funzione 2 associata direttamente all'esempio
(function() {
 'use strict';
 
 angular.module('navBarDemoBasicUsage', ['ngMaterial'])
 .controller('AppCtrl', AppCtrl);
 
 function AppCtrl($scope) {
 $scope.currentNavItem = 'page1';
 }
 })();





// JS slider home page
angular.module('website', ['ngAnimate', 'ngTouch'])
.controller('MainCtrl', function ($scope) {
            $scope.slides = [
                             {image: 'images/img00.jpg', description: 'Image 00'}, //IMMAGINI DA CAMBIARE
                             {image: 'images/img01.jpg', description: 'Image 01'},
                             {image: 'images/img02.jpg', description: 'Image 02'},
                             {image: 'images/img03.jpg', description: 'Image 03'},
                             {image: 'images/img04.jpg', description: 'Image 04'}
                             ];
            
            $scope.direction = 'left';
            $scope.currentIndex = 0;
            
            $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
            };
            
            $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
            };
            
            $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            };
            
            $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            };
            })
.animation('.slide-animation', function () {
           return {
           beforeAddClass: function (element, className, done) {
           var scope = element.scope();
           
           if (className == 'ng-hide') {
           var finishPoint = element.parent().width();
           if(scope.direction !== 'right') {
           finishPoint = -finishPoint;
           }
           TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
           }
           else {
           done();
           }
           },
           removeClass: function (element, className, done) {
           var scope = element.scope();
           
           if (className == 'ng-hide') {
           element.removeClass('ng-hide');
           
           var startPoint = element.parent().width();
           if(scope.direction === 'right') {
           startPoint = -startPoint;
           }
           
           TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
           }
           else {
           done();
           }
           }
           };
           });
