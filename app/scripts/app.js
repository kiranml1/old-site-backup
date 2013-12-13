var jkefex = angular.module('jkefex',[])
.config(function ($provide, $httpProvider) {
  
  // Intercept http calls.
  $provide.factory('MyHttpInterceptor', function ($q) {
    return {
      // On request success
      request: function (config) {
         // console.log(config); // Contains the data about the request before it is sent.
 
        // Return the config or wrap it in a promise if blank.
        return config || $q.when(config);
      },
 
      // On request failure
      requestError: function (rejection) {
         // console.log(rejection); // Contains the data about the error on the request.
        
        // Return the promise rejection.
        return $q.reject(rejection);
      },
 
      // On response success
      response: function (response) {
         // console.log(response); // Contains the data from the response.
        
        // Return the response or promise.
        return response || $q.when(response);
      },
 
      // On response failture
      responseError: function (rejection) {
         // console.log(rejection); // Contains the data about the error.
        
        // Return the promise rejection.
        return $q.reject(rejection);
      }
    };
  });
 
  // Add the interceptor to the $httpProvider.
  // $httpProvider.interceptors.push('MyHttpInterceptor');
  // console.log($httpProvider);
});