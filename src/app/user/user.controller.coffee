angular.module "screencast"
	.controller "UserController", ($scope, githubContributor)->

		$scope.users = []

		$scope.getContributors = (limit)->

			successFn = (result)->
				$scope.users = result.data

			errorFn = (error)->
				console.log error.error

			if !limit
				limit = 10 

			githubContributor.getContributors(limit).then successFn, errorFn


