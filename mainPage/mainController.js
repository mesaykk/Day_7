angular.module("countriesInfoApp").controller("mainController", mainController);

function mainController($http){
    const unitcnt = this;
    // vm.name = "Jack";
    $http.get("https://restcountries.eu/rest/v2/name/united")
        .then(function(response){
            // console.log(response)
            unitcnt.countries = response.data;
        })
}