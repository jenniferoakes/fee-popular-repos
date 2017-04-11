(function() {
  'use strict';

  angular.module('gh')
    .directive('panel', PanelDirective);

  function PanelDirective() {
    let $ = angular.element;

    return {
      templateUrl: 'repos/panel.template.html',
      restrict: 'E',
      link: setupCollapse,
      scope: {
        repo: '=repository'
        // left side: what you can access in the directive's linked above template, that is what is on the scope
        // right side: name of an attribute where it is being used
        //if you give me an attribute called 'repository', then I will know where this is
        //scope of this directive
      }
    };

    function setupCollapse(scope, element) {
      $(element)
      .find('header')
      .on('click', function togglePanelBody() {
        $(element).find('article').toggleClass('hidden');
      });
    }
  }
}());
