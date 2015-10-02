(function() {
  'use strict';

  describe('controller MainCtrl', function(){

    var scope;

    beforeEach(module('screencast'));

    beforeEach(inject(function($rootScope, $injector, $httpBackend){
      scope = $rootScope.$new();
    }));

    it('should define more than 1 awesome things', inject(function($controller) {

      $controller('MainController', {
        $scope : scope
      });

      scope.$digest();

      expect(angular.isArray(scope.vm.awesomeThings)).toBeTruthy();

      scope.addThings({id: 1, nome: "Rafael"});

      expect(scope.vm.awesomeThings.length >= 1).toBeTruthy();

      scope.addThings({id: 2, nome: "Usuário Teste"});

      expect(scope.vm.awesomeThings.length >= 2).toBeTruthy();

      scope.addThings();

      expect(scope.vm.awesomeThings.length >= 2).toBeTruthy();
    }));
  });
})();
