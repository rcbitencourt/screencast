(function() {
  'use strict';

  describe('Controller UserCtrl', function(){

    var scope, githubContributor, httpBackend, UserMock2, UserMock3, UserMock10;

    beforeEach(module('screencast'));
    beforeEach(module('screencast.mocks'));

    beforeEach(inject(function($rootScope, $injector, $httpBackend, UserMock){
      scope               = $rootScope.$new();
      githubContributor   = $injector.get("githubContributor");
      httpBackend         = $httpBackend;
      UserMock2            = [
        { id: 1, nome: "Rafael Bitencourt" },
        { id: 2, nome: "Usuário Teste" }
      ];

      UserMock3            = [
        { id: 1, nome: "Rafael Bitencourt" },
        { id: 2, nome: "Usuário Teste" },
        { id: 3, nome: "Usuário Teste" }
      ];

      UserMock10            = [
        { id: 1, nome: "Rafael Bitencourt" },
        { id: 2, nome: "Usuário Teste" },
        { id: 3, nome: "Usuário Teste" },
        { id: 4, nome: "Usuário Teste" },
        { id: 5, nome: "Usuário Teste" },
        { id: 6, nome: "Usuário Teste" },
        { id: 7, nome: "Usuário Teste" },
        { id: 8, nome: "Usuário Teste" },
        { id: 9, nome: "Usuário Teste" },
        { id: 10, nome: "Usuário Teste" }
      ];
    }));

    it('Deve buscar 10 colaboradores do repositório Gulp-angular', inject(function($controller){

      $controller('UserController', {
        $scope : scope,
        githubContributor : githubContributor
      });

      httpBackend.expect("GET", "https://api.github.com/repos/Swiip/generator-gulp-angular/contributors?per_page=10").respond(200, UserMock10);
      scope.getContributors();
      httpBackend.flush();
      scope.$digest();
      expect(scope.users.length).toBe(10);

    }));

    it('Deve buscar 2 colaboradores do repositório Gulp-angular', inject(function($controller) {

      $controller('UserController', {
        $scope : scope,
        githubContributor : githubContributor
      });

      httpBackend.expect("GET", "https://api.github.com/repos/Swiip/generator-gulp-angular/contributors?per_page=3").respond(500, {error: "Nenhum resultado encontrado"});
      scope.getContributors(3);
      scope.$digest();
      httpBackend.flush();
      
    }));

  });

})();
