(function() {
  'use strict';

    angular.module('gh')
      .filter('size', sizeFilter);

    function sizeFilter() {
      return function doSizeFilter(size) {
        return (size/1000) +'MB';
      };
    }


}());
