/**
 * Creamos variables de botones
 */
const btnFetch1 = document.querySelector('#btnFetch1'),
    btnFetch2 = document.querySelector('#btnFetch2'),
    btnFetch3 = document.querySelector('#btnFetch3')

/**
 * Creamos las funciones para cada evento fetch
 */
const fetchJson = () => {
    fetch('./pokemon.json')
    .then( response => response.json() )
    .then( (data) => {
        const fetch1 = document.querySelector('#fetch1')
        fetch1.setAttribute('src', data.image)
        console.log(data)
    })
}
const fetchImage = () => {
    fetch('bulbasaur.png')
    .then( response => response.blob() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (binayrLargeObject) => {
        const domString = URL.createObjectURL(binayrLargeObject)
        const fetch1 = document.querySelector('#fetch1')
        fetch2.setAttribute('src', domString)
        console.log(domString)
    })
}
const fetchApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/25/')
    .then( response => response.json() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (pokemon) => {
        const fetch3 = document.querySelector('#fetch3')
        fetch3.setAttribute('src', pokemon.sprites.front_default)
        
    })
}

/**
 * Creamos addEventListener para cada boton
 */
btnFetch1.addEventListener("click", fetchJson)
btnFetch2.addEventListener("click", fetchImage)
btnFetch3.addEventListener("click", fetchApi)

        // const $pokemon = document.querySelector('#pokemon')
        // function renderPokemon(image){
        //     $pokemon.setAttribute('src', image)
        // }

        // /*
        // * Este ejemplo hace una peticion get a un json y 
        // * actualiza la imagen al encontrar el valor image
        // */
        // fetch('./pokemon.json')
        // .then( response => response.json() )
        // .then( (data) => {
        //     debugger;
        //     console.log(data)
        //     renderPokemon(data.image)
            
        // })


        // /*
        // * Este ejemplo hace una peticion get a una imagen directa
        // * y actualiza la imagen al encontrar el valor image
        // */
        // fetch('bulbasaur.png')
        // .then( response => response.blob() ) // blob = binary large objet (Recibimos un objeto binario)
        // .then( (binayrLargeObject) => {
        //     debugger;
        //     const domString = URL.createObjectURL(binayrLargeObject)
        //     console.log(domString)
        //     renderPokemon(domString)
            
        // })

        // /*
        // * Este ejemplo hace una peticion get a una imagen directa
        // * y actualiza la imagen al encontrar el valor image
        // */
        // fetch('bulbasaur.png')
        // .then( response => response.blob() ) // blob = binary large objet (Recibimos un objeto binario)
        // .then( (binayrLargeObject) => {
        //     debugger;
        //     const domString = URL.createObjectURL(binayrLargeObject)
        //     console.log(domString)
        //     renderPokemon(domString)
            
        // })
        // /*
        // * Este ejemplo hace una peticion get a una imagen directa
        // * y actualiza la imagen al encontrar el valor image
        // */
        // fetch('https://pokeapi.co/api/v2/pokemon/25/')
        // .then( response => response.json() ) // blob = binary large objet (Recibimos un objeto binario)
        // .then( (pokemon) => {
        //     debugger;
        //     renderPokemon(pokemon.sprites.front_default)
            
        // })