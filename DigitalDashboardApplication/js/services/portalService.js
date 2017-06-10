dDash.service('portalService', ['$http', '$q', function ($http, $q) {
    this.getConfigData = function () {
        var deferred = $q.defer();

        $http.get('config.json').
        success(function (data, status, headers, config) {
            deferred.resolve(data, status, headers, config);
        }).
        error(function (data, status, headers, config) {
            deferred.reject(data, status, headers, config)
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        return deferred.promise;
    }
}]);