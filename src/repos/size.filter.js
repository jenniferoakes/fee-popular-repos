(function() {
  'use strict';

    angular.module('gh')
      .filter('sizeFilter', sizeFilter);

    function sizeFilter() {
      return function doSizeFilter(size) {
        return (size/1000) +'MB';
      };
    }


}());
