let listaNombre = []

let inputNombre = document.getElementById('nombre');
let boton = document.getElementById('btnAgregar');
let lista = document.getElementById('lista');
let cantidad = document.getElementById('cantidad');

boton.addEventListener('click', agregarNombre);
function agregarNombre(){
    event.preventDefault();
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === ''){
        alert ('ingrese el nombre');
        inputNombre.style.backgroundColor='red'

    }
    else if (listaNombre.includes(nombre)){
        alert(`El nombre ${nombre} ya esta registrado`);
        inputNombre.value = '';
    }
    else{
        inputNombre.style.backgroundColor = 'white'
        listaNombre.push(nombre);
        inputNombre.value = '';
        inputNombre.focus();
    }

    mostrarNombre();
};

function mostrarNombre(){
    lista.innerText = '';

    for (let i = 0; i < listaNombre.length; i++){
        lista.innerHTML+= `<li>${listaNombre[i]}</li>`;
    }

    cantidad.innerText = `Total nombre: ${listaNombre.length}`;
}