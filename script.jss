function agregarTarea() {
    var entradaTarea = document.getElementById("entradaTarea");
    var fechaLimiteTarea = document.getElementById("fechaLimiteTarea");
    var listaTareas = document.getElementById("listaTareas");

    if (entradaTarea.value === "" || fechaLimiteTarea.value === "") {
        alert("Por favor ingresa una tarea y una fecha límite.");
        return;
    }

    var tarea = document.createElement("li");
    tarea.textContent = entradaTarea.value + " - " + fechaLimiteTarea.value;
    tarea.className = "task-item";

    var checkbox = document.createElement("span");
    checkbox.className = "complete-checkbox";
    checkbox.addEventListener("click", function(event) {
        tarea.classList.toggle("completed");
        checkbox.classList.toggle("checked");
        if (tarea.classList.contains("completed")) {
            var tareaCompletada = document.createElement("li");
            tareaCompletada.textContent = tarea.textContent;
            document.getElementById("listaTareasCompletadas").appendChild(tareaCompletada);
            listaTareas.removeChild(tarea);
        }
    });

    tarea.appendChild(checkbox);

    listaTareas.appendChild(tarea);

    entradaTarea.value = "";
    fechaLimiteTarea.value = "";
}
