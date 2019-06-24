var App = angular.module('App', ['ngAnimate','ui.bootstrap','ui.bootstrap.tpls','angularBootstrapNavTree']);

App.controller('mainController', ['$scope','$http',function($scope,$http) {

    $scope.toggle=true;

    $scope.toggleSidebar = function() {$scope.toggle = !$scope.toggle;};

    var treedata_avm;

    treedata_avm = [
        {label: 'Spell',children:
                [{label: 'Burial from a Different Dimension'},
                    {label: 'Charge of the Light Brigade'},
                    {label: 'Monster Gate'},
                    {label: 'One for One'},
                    {label: 'Reasoning'},
                    {label: 'Upstart Goblin'},
                    {label: 'Void Seer'}]},
        {label: 'Monster',children:
                [{label: 'Infernoid Antra'},
                    {label: 'Infernoid Attondel'},
                    {label: 'Infernoid Decatron'},
                    {label: 'Infernoid Devyaty'},
                    {label: 'Infernoid Harmadik'},
                    {label: 'Infernoid Onuncu'},
                    {label: 'Infernoid Patrulea'},
                    {label: 'Infernoid Pirmais'},
                    {label: 'Infernoid Seitsemas'},
                    {label: 'Lyla, Lightsworn Sorceress'},
                    {label: 'Raiden, Hand of the Lightsworn'}]},
        {label: 'Trap',children:
                [{label: 'Time-Space Trap Hole'},
                    {label: 'Torrential Tribute'}]}
    ];
    $scope.my_data = treedata_avm;


    $scope.card_data = {};
    $scope.card_image_source = null;

    $scope.my_tree_handler = function(card_name) {
        if(card_name===null) return;
        $scope.getCardDataAPI(card_name);
    }

    $scope.getCardDataAPI = function(card_name) {
		$http.get('http://yugiohprices.com/api/card_data/'+card_name).then(function(response) {
            $scope.card_data = response.data;
        });
    }

}]);


