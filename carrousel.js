let imagenes = [
    {
        "url": "/assets/img/foto-en-fuente.jpg",
        "nombre": "Escuchar",
        "descripcion": "Almendra"

    },
    {
        "url": "/assets/img/foto-en-estacionamiento.jpg",
        "nombre": "Escuchar",
        "descripcion": "Clics Modernos"

    },
    {
        "url": "/assets/img/foto-en-estacionamiento-2.jpg",
        "nombre": "Escuchar",
        "descripcion": "Cisne"
        
    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -= 1;

    if (actual == -1){
        actual = imagenes.length - 1;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="imagen de la banda" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
});

adelante.addEventListener('click', function(){
    actual += 1;

    if (actual == imagenes.length){
        actual = 0;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="imagen de la banda" loading="lazy"></img>`;
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
});

function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}
