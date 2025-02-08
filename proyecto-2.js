/*Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplificarRuta(ruta) {
    let stack = [];
    let partes = ruta.split('/');

    for (let parte of partes) {
        if (parte === '' || parte === '.') {
            continue; // Ignorar partes vacías o "."
        } else if (parte === '..') {
            if (stack.length > 0) {
                stack.pop(); // Subir un nivel eliminando la última carpeta
            }
        } else {
            stack.push(parte); // Agregar carpeta válida
        }
    }

    return '/' + stack.join('/');
}

// Casos de prueba
console.log(simplificarRuta("/home/"));             // Salida: "/home"
console.log(simplificarRuta("/x/./y/../../z/"));    // Salida: "/z"
console.log(simplificarRuta("/../"));               // Salida: "/"
console.log(simplificarRuta("/home//pruebas/"));    // Salida: "/home/pruebas"
