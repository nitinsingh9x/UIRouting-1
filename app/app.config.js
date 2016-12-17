(function(){

    angular
        .module('app')
        .config(appConfig);

        function appConfig($stateProvider,$urlRouterProvider){
                $urlRouterProvider.otherwise('/home');

                $stateProvider

                .state('home',{
                    url:'/home',
                    templateUrl:'../app/home.tpl.html'
                }).state('about',{
                    url:'/about',
                    templateUrl:'../app/about.tpl.html'
                })
        }


})();