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
    showLoader('#loader1', '#fetch1')
    fetch('./pokemon.json')
    .then( response => response.json() )
    .then( (data) => {
        const fetch1 = document.querySelector('#fetch1')
        fetch1.setAttribute('src', data.image)
        console.log(data)
        showLoader('#loader1', '#fetch1')
    })
}
const fetchImage = () => {
    showLoader('#loader2', '#fetch2')
    fetch('./image/bulbasaur.png')
    .then( response => response.blob() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (binayrLargeObject) => {
        const domString = URL.createObjectURL(binayrLargeObject)
        const fetch1 = document.querySelector('#fetch1')
        fetch2.setAttribute('src', domString)
        console.log(domString)
        showLoader('#loader2', '#fetch2')
    })
}
const fetchApi = () => {
    showLoader('#loader3', '#fetch3')
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
    .then( response => response.json() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (pokemon) => {
        const fetch3 = document.querySelector('#fetch3')
        fetch3.setAttribute('src', pokemon.sprites.front_default)
        showLoader('#loader3', '#fetch3')
    })
    
}

const showLoader = (id, image) =>{
    document.querySelector(id).classList.toggle('hidde');
    document.querySelector(image).classList.toggle('hidde');
}

/**
 * Creamos addEventListener para cada boton
 */
btnFetch1.addEventListener("click", fetchJson)
btnFetch2.addEventListener("click", fetchImage)
btnFetch3.addEventListener("click", fetchApi)