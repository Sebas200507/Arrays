const estudiantes = [
            "Ana Cardona", 
            "Carlos Moreno", 
            "Laura Gomez", 
            "Juanes Lopez", 
            "Marta Diaz", 
            "Pedro Sanchez", 
            "Sofía Peña", 
            "Andres Felipe"
        ];

        let tabla = document.getElementById('tabla');
        let formulario = document.getElementById('formulario');
        let inputNombre = document.getElementById('nombre');
        let mensajeResultado = document.getElementById('mensaje-resultado');

        function cargarEstudiantes() {
            for (let i = 0; i < estudiantes.length; i++) {
                let fila = document.createElement('tr');
                let celda = document.createElement('td');
                celda.textContent = estudiantes[i];
                fila.appendChild(celda);
                tabla.appendChild(fila);
            }
        }

        cargarEstudiantes();

        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault(); 

            let terminoBusqueda = inputNombre.value.trim();

            if (terminoBusqueda === "") {
                mensajeResultado.textContent = "Por favor, escribe un nombre para buscar.";
                mensajeResultado.className = "mensaje error";
                return; 
            }

            let estudianteEncontrado = estudiantes.find(estudiante => 
                estudiante.toLowerCase() === terminoBusqueda.toLowerCase()
            );

            if (estudianteEncontrado) {
                mensajeResultado.textContent = `El estudiante "${estudianteEncontrado}" se encuentra registrado.`;
            } else {
                mensajeResultado.textContent = `El estudiante "${terminoBusqueda}" no se encuentra registrado.`;
            }
        });