(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(userName, repoName) {
      var myUrl = "https://api.github.com/repos/" + userName + "/" + repoName;
      return $http.get(myUrl)
        .then(function(response) {
          return response.data;
        });
    };

    var getContributors = function(userName, repoName) {
      var myUrl = "https://api.github.com/repos/" + userName + "/" + repoName + "/contributors"
      return $http.get(myUrl)
        .then(function(response) {
          return response.data;
        });
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
      getContributors: getContributors
    };

  };

  var module = angular.module("gitHubUserViewer");
  module.factory("github", github);

}());