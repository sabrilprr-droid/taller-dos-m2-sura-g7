//  ## Ejercicio 1: Duplicar Números (map)
//  Inicias con una lista de puntos:
//  `let puntos = [10, 20, 30, 40];`
//  
//  Tareas:
//  1.  Crea un nuevo arreglo `puntosDoble` donde cada valor sea el doble del arreglo original.
//  2.  Muestra `puntos` y `puntosDoble` para verificar que el original no cambió.

let puntos = [10, 20, 30, 40];
let puntosDoble = puntos.map(i => i *2); //recuarda que n puede ser cualquier cosa como, m, i, j, o nombre solo va a representar cada elemento del arreglo 
console.log({puntos,puntosDoble}); //se muestra como objeto de esta forma para depurar y poder comparar el arreglo orginal con el nuevo con el metodo

let puntosDobleDos = puntos.map(function(i) {
  return i * 2;
});
console.log({puntos,puntosDobleDos});

//## Ejercicio 2: Lista de Nombres (map con objetos)
//Inicias con una lista de usuarios:
//`let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];`
//
//Tareas:
//1.  Crea un nuevo arreglo `nombres` que contenga solo los nombres de los usuarios (ej: `["Ana", "Luis", "Carlos"]`).

let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];
let nombres = usuarios.map(usuarios => usuarios.nombre);
console.log(nombres); //lo puedes usar como un objeto con un nuevo arreglo 
console.log({usuarios,nombres});