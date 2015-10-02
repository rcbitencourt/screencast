angular.module "screencast"
  .factory 'githubContributor', ($log, $http) ->
    apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular'

    getContributors = (limit) ->
      $http.get(apiHost + '/contributors?per_page=' + limit)

    service =
      apiHost: apiHost
      getContributors: getContributors
