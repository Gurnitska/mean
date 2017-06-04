'use strict';

angular.module('mean.app.common').service('Auth', function(localStorageService) {
    console.log("Auth service");

    this.logOut = function(){
        localStorageService.remove("token");
    }

    this.getToken = function(){
        return localStorageService.get("token", "localStorage");
    }
});