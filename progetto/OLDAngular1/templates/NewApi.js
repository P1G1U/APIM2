//categorie
angular
.module('myApp', ['ngMaterial'])
.controller('AppCtrl', function($scope) {
            
            $scope.data = {
            group1 : 'Categories',
            };
            
            });


//input file 1
.directive("fileread", [function () {
                        return {
                        scope: {
                        fileread: "="
                        },
                        link: function (scope, element, attributes) {
                        element.bind("change", function (changeEvent) {
                                     var reader = new FileReader();
                                     reader.onload = function (loadEvent) {
                                     scope.$apply(function () {
                                                  scope.fileread = loadEvent.target.result;
                                                  });
                                     }
                                     reader.readAsDataURL(changeEvent.target.files[0]);
                                     });
                        }
                        }
                        }]);





//input file 2
var myApp = angular.module('myApp', []);

myApp.directive('fileModel', ['$parse', function ($parse) {
                              return {
                              restrict: 'A',
                              link: function(scope, element, attrs) {
                              var model = $parse(attrs.fileModel);
                              var modelSetter = model.assign;
                              
                              element.bind('change', function(){
                                           scope.$apply(function(){
                                                        modelSetter(scope, element[0].files[0]);
                                                        });
                                           });
                              }
                              };
                              }]);

myApp.service('fileUpload', ['$https:', function ($https:) {
                             this.uploadFileToUrl = function(file, uploadUrl){
                             var fd = new FormData();
                             fd.append('file', file);
                             
                             $https:.post(uploadUrl, fd, {
                                          transformRequest: angular.identity,
                                          headers: {'Content-Type': undefined}
                                          })
                             
                             .success(function(){
                                      })
                             
                             .error(function(){
                                    });
                             }
                             }]);

myApp.controller('myCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
                            $scope.uploadFile = function(){
                            var file = $scope.myFile;
                            
                            console.log('file is ' );
                            console.dir(file);
                            
                            var uploadUrl = "/fileUpload";
                            fileUpload.uploadFileToUrl(file, uploadUrl);
                            };
                            }]);
