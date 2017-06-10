angular.module('dDash')


    .controller('dDashController', function ($scope,portalService) {
       var defer =  portalService.getConfigData();
        defer.then(function(data, status, headers, config){
            $scope.configData = data.result.metricType;
        },function(data, status, headers, config){
            alert("Error")
        })

    });


