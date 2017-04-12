(function() {
  'use strict';

    angular.module('gh')
      .filter('popularity', popularityFilter);
      // 'popularity' is used in the HTML after the pipe
      // popularityFilter only exists in THIS file

    function popularityFilter() {

      /** Reorders an array by popularity
       * @param {Array}
       * @return {Array}
       */
      return function executePopularityFilter(collection) {

        let collectionCopy = [].concat(collection); //this is a new array that contains all the information from the original array

        return collectionCopy.sort(function doPopularityFilter(repo1, repo2) {
          let popularityRepo1 = ( (repo1.stargazers_count) + (2*(repo1.forks)) + ((1/2)*(repo1.open_issues_count)) );
          let popularityRepo2 = ( (repo2.stargazers_count) + (2*(repo2.forks)) + ((1/2)*(repo2.open_issues_count)) );
          return popularityRepo2 - popularityRepo1;
        });
      };
    }
}());
