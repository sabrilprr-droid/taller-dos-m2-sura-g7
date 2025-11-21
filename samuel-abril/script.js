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

//## Ejercicio 3: Notas Aprobadas (filter)
//Inicias con una lista de calificaciones:
//`let notas = [8, 5, 10, 3, 7];`
//
//Tareas:
//1.  Crea un nuevo arreglo `aprobadas` que contenga solo las notas que sean mayores o iguales a 6.

let notas = [8, 5, 10, 3, 7];
let aprobadas = notas.filter(e => e >= 6); // ingresar paremetros mas la funcion flecha para que funcione filter 
console.log({notas,aprobadas});

//## Ejercicio 4: Productos en Stock (filter con objetos)
//Inicias con un inventario:
//`let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];`
//
//Tareas:
//1.  Crea un nuevo arreglo `enStock` que contenga solo los productos cuyo `stock` sea mayor que 0.

let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];
let enStock = productos.filter(productos => productos.stock > 0);
console.log({productos,enStock});

//## Ejercicio 5: Suma Total de Ventas (reduce)
//Inicias con una lista de ventas del día:
//`let ventas = [150, 300, 100, 50];`
//
//Tareas:
//1.  Calcula el valor `totalVentas` sumando todos los elementos del arreglo usando `reduce`.

let ventas = [150, 300, 100, 50];
let totalVentas = ventas.reduce((totalHastaAhora,valorActual) => totalHastaAhora + valorActual,0); //se debe encapsular para que reduce reciba los dos parametro y se inicializa el acumulador en este caso en 0
console.log({ventas,totalVentas});

//## Ejercicio 6: Aplanar un Arreglo (reduce)
//Inicias con una lista de listas:
//`let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];`
//
//Tareas:
//1.  Crea un nuevo arreglo `listaPlana` que contenga todos los nombres en un solo nivel (ej: `["Ana", "Luis", "Maria", "Juan", "Pedro"]`). (Pista: `reduce` puede usar `concat`).

let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
let listaPlana = grupos.reduce((acumuladorNombres,valorActualNombres) => acumuladorNombres.concat(valorActualNombres),[]);
console.log({grupos,listaPlana})

//## Ejercicio 7: Crear una Copia (slice)
//Inicias con un arreglo:
//`let original = ["A", "B", "C"];`
//
//Tareas:
//1.  Crea un `clon` exacto del arreglo `original` usando `slice()`.
//2.  (Verificación) Modifica el `clon` (ej. `clon.push("D")`) y demuestra que `original` sigue intacto.

let original = ["A", "B", "C"];
let clon = original.slice();
clon.push("D");  // recordar que es no mutable por ende siempre crea un clon del arreglo original y lo puedes usar como un arreglo con nuevo valor o editado 

console.log({original,clon});

//## Ejercicio 8: Obtener el Podio (slice)
//Inicias con una lista de competidores:
//`let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];`
//
//Tareas:
//1.  Crea un nuevo arreglo `podio` que contenga solo los primeros 3 elementos (Oro, Plata, Bronce).

let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
let podio = competidores.slice(0,3); // recuerda que slice recibe solo el dato inicio y dato final 

console.log({competidores,podio});

//## Ejercicio 9: Unir Equipos (concat)
//Inicias con dos listas:
//`let equipoDev = ["Ana", "Juan"];`
//`let equipoQA = ["Carlos", "Maria"];`
//
//Tareas:
//1.  Crea un nuevo arreglo `equipoCompleto` que sea la unión de `equipoDev` y `equipoQA`.

let equipoDev = ["Ana", "Juan"];
let equipoQA = ["Carlos", "Maria"];
let equipoCompleto = equipoQA.concat(equipoDev); // el que este entre el parametro de concat es el que va a quedar en la segunda parte de la union 

console.log({equipoCompleto,equipoDev,equipoQA});

//## Ejercicio 10: Añadir al Carrito (concat - Inmutable)
//Inicias con un carrito de compras:
//`let carrito = ["Manzana"];`
//
//Tareas:
//1.  Crea un `nuevoCarrito` que contenga los elementos del `carrito` original más "Pera".
//2.  Verifica que `carrito` original solo tiene "Manzana".

let carrito = ["Manzana"];
let nuevoCarrito = carrito.concat("Pera"); // ingresar el elemento en comillas 

console.log({carrito,nuevoCarrito});

//## Ejercicio 11: Verificar Permiso (includes)
//Inicias con los roles de un usuario:
//`let roles = ["USER", "EDITOR"];`
//
//Tareas:
//1.  Verifica si el usuario tiene el rol "ADMIN". (El resultado debe ser `false`).
//2.  Verifica si el usuario tiene el rol "EDITOR". (El resultado debe ser `true`).

let roles = ["USER","EDITOR"];
let siTieneAdmin = roles.includes("ADMIN"); //se debe crear una veriable si o si para poder mostrar en el console 
let siTieneEditor = roles.includes("EDITOR");

console.log({roles,siTieneAdmin,siTieneEditor});

//## Ejercicio 12: Encontrar Usuario (find)
//Inicias con la lista de usuarios:
//`let usuarios = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];`
//
//Tareas:
//1.  Encuentra el *objeto* completo del usuario cuyo `id` es 102. Guarda el resultado en `usuarioLuis`.

let usuarioss = [{id: 101, nombre: "Ana"}, {id: 102, nombre: "Luis"}, {id: 103, nombre: "Carlos"}];
let usuarioLuis = usuarioss.find((usuarios) => usuarios.id === 102);
console.log(usuarioss,usuarioLuis);






