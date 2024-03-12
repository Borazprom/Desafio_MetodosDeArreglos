// const inputTarea = document.getElementById("tareaInput");
// const agregarBtn = document.getElementById("botonAgregar");
// const statusList = document.getElementById("seccionEstatus");
// const tareasList = document.getElementById("seccionTareas");
// const tareasTotales = document.getElementById("total");
// const tareasRealizadas = document.getElementById("realizadas");
// const idTareas = document.getElementById("id");
// const nombreTareas = document.getElementById("tareas");
// let tareas = [];
// let idTarea = 0;

// function agregarTarea() {
//   const descripcion = document.getElementById("inputTarea").value;
//   if (descripcion.trim() === "") {
//     alert("Por favor, ingresa una tarea.");
//     return;
//   }

//   const tarea = {
//     id: idTarea++,
//     descripcion: descripcion,
//     completada: false,
//   };

//   tareas.push(tarea);
//   mostrarTareas();
//   document.getElementById("inputTarea").value = "";
// }

// function mostrarTareas() {
//   const lista = document.getElementById("tareasList");
//   lista.innerHTML = "";

//   tareas.forEach((tarea) => {
//     lista.innerHTML += `<div>${tarea.descripcion}
//         <button onclick="eliminarTarea(${tarea.id})">Eliminar</button>
//         <input type="checkbox" ${tarea.completada ? "checked" : ""}
//         onchange="marcarCompletada(${tarea.id})"> ${
//       tarea.completada ? "(Completada)" : ""
//     }
//         </div>`;
//   });
//   actualizadorContadortareas();
// }
// function eliminarTarea(id) {
//   tareas = tareas.filter((tarea) => tarea.id !== id);
//   mostrarTareas();
// }
// function marcarCompletada(id) {
//   const tarea = tareas.find((tarea) => tarea.id === id);
//   if (tarea) {
//     tarea.completada = !tarea.completada;
//     mostrarTareas();
//   }
// }

// function actualizarContadorTareas() {
//   const totalTareas = tareas.length;
//   const tareasCompletadas = tareas.filter((tarea) => tarea.completada).length;

//   document.getElementById(
//     "tareasTotales"
//   ).innerText = `Total de Tareas: ${tareasTotale}`;
//   document.getElementById(
//     "tareasRealizadas"
//   ).innerText = `Tareas Completadas: ${tareasRealizadas}`;
// }

// agregarBtn.addEventListener("click", () => {
//   const nuevasTareas = inputTarea.value;
//   tareas.push({ id: Date.now(), nombreTarea: nuevasTareas });
//   inputTarea.value = "";

//   let html = "";
//   for (let tarea of tareas) {
//     html += `<li>${tarea.nombreTarea} <button onclick="borrar(${tarea.id})"> eliminar </button></li>`;
//   }
//   tareasList.innerHTML = html + tareas.length;
// });

// function borrar(id) {
//   const index = tareas.findIndex((ele) => ele.id == id);
//   tareas.splice(index, 1);

//   let html = "";
//   for (let tarea of tareas) {
//     html += `<li>${tarea.nombreTarea} <button onclick="borrar(${tarea.id})"> eliminar </button></li>`;
//   }
//   tareasList.innerHTML = html + tareas.length;
// }

const tareas = [{ id: 1, nombre: "Ordenar la pieza", check: false }];
const lista = document.getElementById("seccionTareas");
const btnagragar = document.getElementById("botonAgregar");

const borrarTareas = (id) => {
  const index = tareas.findIndex((item) => item.id === id);
  tareas.splice(index, 1);
  renderizar();
};

const renderizar = () => {
  let html = "";
  tareas.forEach((item) => {
    html += `<li>id: ${item.id} nombre:${item.nombre}<button onclick="borrarTareas(${item.id})">x</button></li>`;
  });

  document.getElementById("total").innerHTML = tareas.length;
  lista.innerHTML = html;
};

btnagragar.addEventListener("click", () => {
  let nombre_tarea = document.getElementById("tareaInput").value;
  let nueva_tarea = {
    id: tareas[tareas.length - 1].id + 1,
    nombre: nombre_tarea,
  };
  tareas.push(nueva_tarea);
  console.log(tareas);
  renderizar();
});
