angular.module('primeiraApp').constant('consts', {
  appName: 'MEAN - Primeira Aplicação',
  version: '1.0',
  owner: 'Paulo',
  year: '2018',
  site: 'https://www.linkedin.com/in/paulo-louren%C3%A7o-6b6333111/',
  apiUrl: 'https://mymoney-b.herokuapp.com/api',
  oapiUrl: 'https://mymoney-b.herokuapp.com/oapi',
  userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
  $rootScope.consts = consts
}])
