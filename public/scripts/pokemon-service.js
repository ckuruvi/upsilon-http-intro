app.service('PokeService',['$http',function($http){

  var API='https://pokeapi.co/api/v2';

   this.getAllPokemon=function(){
     // return the promise to the caller
  return $http.get(API+'/pokemon').then(function(response){
    console.log('got response',response);
    return response.data.results;   //return on resolution of promise
  }).catch(function(err){
    console.log('error message::',err);
  });

};

this.getPokemon=function(pokemon){
  return $http.get(pokemon.url).then (function(response){
     console.log('inside then ',response.data);
     var foundPokemon=response.data;
   return foundPokemon.sprites.front_default;
  }).catch(function(err){
    console.log('error logged',err);
  })
}
}]);
