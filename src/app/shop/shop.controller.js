(function() {
  'use strict';

  angular
    .module('test')
    .controller('ShopController', ShopController);

  /** @ngInject */
  function ShopController($timeout, webDevTec, toastr, $state, $scope, $mdSidenav) {
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
      console.log("selected", obj);
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
        body_parts: ["liver", "brain"],
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
        body_parts: ["lung"],
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
        body_parts: ["liver", "brain", "intestine", "lung"],
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
        body_parts: ["liver", "lung"],
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
        body_parts: ["brain", "intestine", "heart"],
        sexe: "femme"
      },
      {
        title: "Gérard 53 ans",
        picture: "assets/images/6.jpg",
        facebook_mark: 1,
        instagram_mark: 1,
        linkedin_mark: 1,
        tinder_mark: 1,
        sport_mark: 2,
        food_mark: 4,
        body_parts: ["liver", "intestine", "lung", "foot"],
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
        body_parts: ["liver", "brain", "intestine", "lung"],
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
        body_parts: ["liver", "brain", "lung", "heart"],
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
        body_parts: ["liver", "brain", "intestine", "lung", "foot"],
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
        body_parts: ["liver", "lung", "heart", "foot"],
        sexe: "homme"
      }
    ]

    $scope.body_parts = [
      {
        icon: "assets/images/brain.png",
        name: "brain"
      },
      {
        icon: "assets/images/intestine.png",
        name: "intestine"
      },
      {
        icon: "assets/images/lung.png",
        name: "lung"
      },
      {
        icon: "assets/images/liver.png",
        name: "liver"
      },
      {
        icon: "assets/images/heart.png",
        name:"heart"
      },
      {
        icon: "assets/images/foot.png",
        name: "foot"
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
  }
})();
