(function() {
  'use strict';

  angular.module('gh')
    .directive('panel', PanelDirective);

  function PanelDirective() {
    return {
      templateUrl: 'repos/panel.template.html',
      restrict: 'E',
      scope: {
        repo: '=repository'
        // left side: what you can access in the directive's linked above template
        // right side: name of an attribute where it is being used
        //if you give me an attribute called 'repository', then I will know where this is
      }
    };
  }
}());
