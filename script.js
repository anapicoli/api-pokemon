// https://pokeapi.co/api/v2/pokemon/Dewgong
// front-default: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png
// front-default-gif: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif

let pokemonImage = document.getElementById("pokemon_image")
let pokemonNumber = document.getElementById("pokemon_number")
let pokemonName = document.getElementById("pokemon_name")

let btnSearch = document.getElementById("btn-search")
let input = document.getElementById("input_search")
let btnPrev = document.getElementById("btn-prev")
let btnNext = document.getElementById ("btn-next")

let searchPokemon = 1

function renderPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.sprites.versions["generation-v"]["black-white"].animated.front_default)
            pokemonImage.style.display = "block"
            input.value = ""
            pokemonName.innerText = data.name
            pokemonNumber.innerText = data.id
            pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
            searchPokemon = data.id
        })
        .catch((err) => {
            pokemonName.innerText = "Não encontrado :C"
            pokemonImage.style.display = "none"
            pokemonNumber.innerText = ""
        })
}

btnSearch.addEventListener("click", function(event){
    event.preventDefault()
    renderPokemon(input.value)
})

btnPrev.addEventListener("click", function(){
    if(searchPokemon > 1){
        searchPokemon -= 1
        renderPokemon(searchPokemon)
    }
})

btnNext.addEventListener("click", function(){
        searchPokemon += 1
        renderPokemon(searchPokemon)
})

renderPokemon("1")



