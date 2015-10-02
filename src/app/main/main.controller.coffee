angular.module "screencast"
  .controller "MainController", ($scope) ->

  	$scope.vm =
	    awesomeThings : []
	    classAnimation : ''
	    creationDate : 1443720558302

	   $scope.addThings = (obj)->
	   	if angular.isObject(obj)
	   		$scope.vm.awesomeThings.push obj	   		