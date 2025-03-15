// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arregloAmigos = [];

let amigoInput = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');


function agregarAmigo() {
     const nuevoAmigo = amigoInput.value.trim(); // Eliminar espacios en blanco al inicio y final

        if (nuevoAmigo === '') {
            alert('Debes ingresar un nombre');
          // Salir de la función si el nombre está vacío
        }else if(arregloAmigos.includes(nuevoAmigo)){
            resultado.textContent = "Este amigo ya fue agregado";
        }else{
            arregloAmigos.push(nuevoAmigo);
            amigoInput.value = ''; // Limpiar el input
            mostrarAmigos();
}
}

function mostrarAmigos() {
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizarla

    for (const amigo of arregloAmigos) {
        const nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigo;
        listaAmigos.appendChild(nuevoLi);
    }
}

function sortearAmigo() {
    if (arregloAmigos.length === 0) {
        resultado.textContent = "Aún no has agregado amigos";
        return;
    }

    const amigoSorteado = arregloAmigos[Math.floor(Math.random() * arregloAmigos.length)];
    resultado.textContent = amigoSorteado;
}

function resetearLista() {
    arregloAmigos = [];
    listaAmigos.innerHTML = '';
    resultado.textContent = '';
}
