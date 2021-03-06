/**
 * angular-sns-share
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
(function() {
  'use strict';

  angular
    .module('ngSnsShare', [])
    .directive('ngSnsShare', ngSnsShare);

  ngSnsShare.$inject = ['$window', '$location'];

  function ngSnsShare($window, $location) {
    var directive = {
      link: link,
      restrict: 'A',
      scope: {
        url: '@',
        platform: '@',
        text: '@'
      }
    };
    return directive;

    function link(scope, element, attrs) {
      element.on('click', function() {
        onClickShare(scope);
      });
    }

    ///
    function onClickShare(scope) {
      var url = scope.url || $location.protocol() + '//' + $location.host(),
          text = angular.isUndefined(scope.text) ? '' : scope.text + ' ',
          target = encodeURIComponent(text + url),
          windowName = 'ngSnsShare',
          option = 'width=600,height=400';
      if(scope.platform === 'twitter'){
        $window.open('https://twitter.com/intent/tweet?text=' + target, windowName, option);
      }else if(scope.platform === 'facebook'){
        $window.open('https://www.facebook.com/sharer/sharer.php?u=' + target, windowName, option);
      }
    }

  }
})();





