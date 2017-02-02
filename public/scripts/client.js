var app=angular.module('pokeApp',[]);

app.controller('pokemonController',pokemonController);

function pokemonController(PokeService){
  console.log("pokemonController controller loading");

// var API='https://pokeapi.co/api/v2';
var ctrl=this;
var currentlySelectedPokemon={};
ctrl.pokemonList=[{name:'xyx'},{name:'pikachu'}];

ctrl.currentPokemon={};


PokeService.getAllPokemon().then(function(pokeList){
  ctrl.pokemonList=pokeList;
})

// $http.get(API+'/pokemon').then(function(response){
//   console.log('got response',response);
//   ctrl.pokemonList=response.data.results;
// }).catch(function(err){
//   console.log('error message::',err);
// });

ctrl.iChooseYou=function(pokemon){

  console.log('inside iChooseYou function',pokemon);
  PokeService.getPokemon(pokemon).then (function(imageUrl){
    console.log("imageUrl ::",imageUrl);
    togglePokemon(pokemon);
    ctrl.currentPokemon.imageUrl=imageUrl;

  })

}

function togglePokemon(pokemon){
  currentlySelectedPokemon.chosen=false;
  currentlySelectedPokemon=pokemon;
  pokemon.chosen=true;
}

}
