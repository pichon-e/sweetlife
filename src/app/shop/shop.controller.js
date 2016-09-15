(function() {
  'use strict';

  angular
    .module('test')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController($timeout, webDevTec, toastr, $state, $scope, $mdSidenav, $mdDialog) {
    $scope.rate = [1,2,3,4,5];

    $scope.facebook = 0;
    $scope.instagram = 0;
    $scope.linkedin = 0;
    $scope.sport = 0;
    $scope.food = 0;
    $scope.tinder = 0;


    $scope.selected = [];

    $scope.toggleLeft = buildToggler('left');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      }
    }

    $scope.addBodyPart = function(item) {
      var index = $scope.selected.indexOf(item);
      if (index == -1)
        $scope.selected.push(item);
      else
        $scope.selected.splice(index, 1);
    }

    $scope.isInside = function(obj) {
      var test = false;
      if ($scope.selected.length == 0)
        return true;
      for (var i = 0; i < $scope.selected.length; i++)
        if (obj.body_parts.indexOf($scope.selected[i]) != -1)
          test = true;
        else
          return false;

      return test;
    }

    $scope.articles = [
      {
        title: "Paul 27 ans",
        picture: "assets/images/1.jpg",
        facebook_mark: 3,
        instagram_mark: 1,
        linkedin_mark: 4,
        tinder_mark: 2,
        sport_mark: 4,
        food_mark: 3,
        body_parts: ["foie", "cerveau"],
        sexe: "homme"
      },
      {
        title: "Anna 24 ans",
        picture: "assets/images/2.jpg",
        facebook_mark: 4,
        instagram_mark: 3,
        linkedin_mark: 2,
        tinder_mark: 5,
        sport_mark: 2,
        food_mark: 4,
        body_parts: ["poumons"],
        sexe: "femme"
      },
      {
        title: "Léa 8 ans",
        picture: "assets/images/3.jpg",
        facebook_mark: 1,
        instagram_mark: 1,
        linkedin_mark: 1,
        tinder_mark: 1,
        sport_mark: 2,
        food_mark: 3,
        body_parts: ["foie", "cerveau", "intestin", "poumons"],
        sexe: "femme"
      },
      {
        title: "Arthur 58 ans",
        picture: "assets/images/4.jpg",
        facebook_mark: 1,
        instagram_mark: 1,
        linkedin_mark: 1,
        tinder_mark: 1,
        sport_mark: 2,
        food_mark: 4,
        body_parts: ["foie", "poumons"],
        sexe: "homme"
      },
      {
        title: "Sophie 38 ans",
        picture: "assets/images/5.jpg",
        facebook_mark: 3,
        instagram_mark: 2,
        linkedin_mark: 4,
        tinder_mark: 3,
        sport_mark: 2,
        food_mark: 3,
        body_parts: ["cerveau", "intestin", "coeur"],
        sexe: "femme"
      },
      {
        title: "Gérard 73 ans",
        picture: "assets/images/6.jpg",
        facebook_mark: 1,
        instagram_mark: 1,
        linkedin_mark: 1,
        tinder_mark: 1,
        sport_mark: 2,
        food_mark: 4,
        body_parts: ["foie", "intestin", "poumons", "pied"],
        sexe: "homme"
      },
      {
        title: "Emilie 28 ans",
        picture: "assets/images/7.jpg",
        facebook_mark: 4,
        instagram_mark: 3,
        linkedin_mark: 3,
        tinder_mark: 3,
        sport_mark: 2,
        food_mark: 3,
        body_parts: ["foie", "cerveau", "intestin", "poumons"],
        sexe: "femme"
      },
      {
        title: "Mathilde 16 ans",
        picture: "assets/images/8.jpg",
        facebook_mark: 5,
        instagram_mark: 5,
        linkedin_mark: 1,
        tinder_mark: 2,
        sport_mark: 4,
        food_mark: 3,
        body_parts: ["foie", "cerveau", "poumons", "coeur"],
        sexe: "femme"
      },
      {
        title: "Nicolas 34 ans",
        picture: "assets/images/10.jpg",
        facebook_mark: 3,
        instagram_mark: 1,
        linkedin_mark: 5,
        tinder_mark: 3,
        sport_mark: 4,
        food_mark: 3,
        body_parts: ["foie", "cerveau", "intestin", "poumons", "pied"],
        sexe: "homme"
      },
      {
        title: "Thibault 18 ans",
        picture: "assets/images/11.jpg",
        facebook_mark: 5,
        instagram_mark: 4,
        linkedin_mark: 1,
        tinder_mark: 4,
        sport_mark: 5,
        food_mark: 2,
        body_parts: ["foie", "poumons", "coeur", "pied"],
        sexe: "homme"
      }
    ]

    $scope.body_parts = [
      {
        icon: "assets/images/cerveau.png",
        name: "cerveau"
      },
      {
        icon: "assets/images/intestin.png",
        name: "intestin"
      },
      {
        icon: "assets/images/poumons.png",
        name: "poumons"
      },
      {
        icon: "assets/images/foie.png",
        name: "foie"
      },
      {
        icon: "assets/images/coeur.png",
        name:"coeur"
      },
      {
        icon: "assets/images/pied.png",
        name: "pied"
      }
    ]

    $scope.sexe = "";

    $scope.selectSexe = function(sexe) {
      $scope.sexe = sexe;
    }

    $scope.isSameSexe = function(sexe) {
      if ($scope.sexe.length == 0)
        return true
      if ($scope.sexe == sexe)
        return true
      else
        return false;
    }

    $scope.openDialog = function(article) {
      var confirm = $mdDialog.confirm({
        templateUrl: 'app/template/dialog.html',
        controller: 'DialogController',
        locals: {
          obj: article
        }
      });

      $mdDialog.show(confirm);
    }
  }
})();
