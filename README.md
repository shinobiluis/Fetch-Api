# Fetch-Api

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
Lo hacemos mas pequeño
```js
// Iniciamos el fetch
fetch('./pokemon.json',{})
.then( response => response.json() ) // Al ser solo un paramentro y un retrono se puede quedar así
.then( (data) => {
    debugger;
    console.log(data)
})
```
