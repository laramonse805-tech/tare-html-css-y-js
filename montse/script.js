const formulario = document.getElementById("formulario");
const input = document.getElementById("tarea");
const error = document.getElementById("error");
const listaTareas = document.getElementById("listaTareas");

let tareas = [];

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.trim() === "") {
        error.textContent = "Debes escribir una tarea";
        return;
    }

    error.textContent = "";

    let nuevaTarea = {
        texto: input.value
    };

    tareas.push(nuevaTarea);

    renderizarTareas();

    input.value = "";
});

function renderizarTareas() {
    listaTareas.innerHTML = "";

    tareas.forEach(function (tarea) {
        let li = document.createElement("li");
        li.textContent = tarea.texto;

        li.addEventListener("click", function () {
            li.classList.toggle("completada");
        });

        listaTareas.appendChild(li);
    });
}