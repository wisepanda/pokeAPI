
let pokeImage = document.querySelector("#pokemonPic")
let pokeName = document.querySelector("#pokemon-name")
let pokeType = document.querySelector("#pokemon-type")

        
    async function getPokemon() {
        let id = Math.floor(Math.random() * 1118) + 1;
        console.log(id);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemon = await response.json();
        console.log(pokemon.name, pokemon.id, pokemon.types[0].type.name, pokemon.sprites.other.dream_world.front_default);
        pokeImage.src = pokemon.sprites.other.dream_world.front_default;
        pokeName.innerHTML = pokemon.name;
        pokeType.innerHTML =  pokemon.types[0].type.name;
    }
    getPokemon();
    
document.querySelector("#button").addEventListener("submit", getPokemon);



        
        