angular
  .module('app')
  .filter('ellipsis', function() {
  return function(input, total) {
    if (input.length > total) {
      return (input.slice(0, total) + '...');
    }
    return (input);
  }
});
