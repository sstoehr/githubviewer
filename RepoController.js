(function() {

  var app = angular.module("gitHubUserViewer");

  var RepoController = function($scope, github, $routeParams) {

    var onRepoDetailsComplete = function(data) {
      $scope.repo = data;
    };

    var onContributorsComplete = function(data) {
      $scope.contributors = data;
    };

    var onRepoDetailsError = function(reason) {
      $scope.repoDetailsError = "Could not fetch the repo details";
    };

    var onContributorsError = function(reason) {
      $scope.contributorsError = "Could not fetch the contributors";
    };

    $scope.username = $routeParams.username;
    $scope.reponame = $routeParams.reponame;

    github.getRepoDetails($scope.username, $scope.reponame)
      .then(onRepoDetailsComplete, onRepoDetailsError);
    github.getContributors($scope.username, $scope.reponame)
      .then(onContributorsComplete, onContributorsError);
  };

  app.controller("RepoController", RepoController);

}());