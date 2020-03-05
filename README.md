<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="400"></p>

<p align="center">
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

# Fetch Api

[Link del demo](https://shinobiluis.github.io/Fetch-Api/)

## Funciones realizadas para las peticiones

Estos son los ejemplos realizados en el código.

### Ejemplo de petición a json
```js
const fetchJson = () => {
    fetch('./pokemon.json')
    .then( response => response.json() )
    .then( (data) => {
        const fetch1 = document.querySelector('#fetch1')
        fetch1.setAttribute('src', data.image)
    })
}
```

### Ejemplo de petición a imagen
```js
const fetchImage = () => {
    fetch('./image/bulbasaur.png')
    .then( response => response.blob() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (binayrLargeObject) => {
        const domString = URL.createObjectURL(binayrLargeObject)
        const fetch1 = document.querySelector('#fetch1')
        fetch2.setAttribute('src', domString)
    })
}
```

### Ejemplo de petición a API
```js
const fetchApi = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/4/')
    .then( response => response.json() ) // blob = binary large objet (Recibimos un objeto binario)
    .then( (pokemon) => {
        const fetch3 = document.querySelector('#fetch3')
        fetch3.setAttribute('src', pokemon.sprites.front_default)
    })
}
```

## Ejemplos de Fetch API
Este es un ejemplo de como hacer una petición get muy simple
```js
// Fecht basico de tipo GET
fetch('./pokemon.json',{}) // Hacemos la petición
.then( (response) => {  // La petición retorna response
    return response.json() // convertimos la respuesta en Json
}).then( (data) => { // Recibimos el json
    debugger;
    console.log(data) // Lo mostramos
})
```
Es el mismo ejemplo de arriba pero lo hacemos limpio
```js
// Iniciamos el fetch
fetch('./pokemon.json',{})
.then( response => response.json() ) // Al ser solo un parámetro y un retorno se puede quedar así
.then( (data) => {
    debugger;
    console.log(data)
})
```


Este es un ejemplo de como se realiza una petición tipo post con fetch:
```js
// Ejemplo de petición con parametros y headers
fetch('http://miapi.com/x/y', {
    method: 'POST',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify({
        name: 'Luis',
        age: '30'
    })
})
```

<p align="center"><img src="https://octodex.github.com/images/filmtocats.png" width="600"></p>