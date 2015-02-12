angular.module('angularApp')
    .factory("Posts", function($resource){
    return $resource('http://jsonplaceholder.typicode.com/posts');
});