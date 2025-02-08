/*Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostarInfoSuper("THOR");
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea

 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/
// CREACION DEL OBJETO ALMACENANDO LOS SUPER
const superheroe = {
    'HULK': {
        nombre: 'Bruce banner',
        poderes: ['super fuerza', 'Indestructibilidad']
    },
    'THOR': {
        nombre: 'Thor Odinson',
        poderes: ['Rayos', 'fuerza', 'longevidad']
    },
    'CAP. AMERICA': {
        nombre: 'Stive Rogers',
        poderes: ['Fuerza', 'velocidad',]
    }


}
// FUNCIÓN QUE EVALUA SI ESTA EL SUPER
function mostrarInfoSuper(seudonimo){
    if(seudonimo in superheroe){
        console.log('El heroe pertenece al equipo Avengers')
        const informacion = superheroe[seudonimo]
        console.log(`Nombre Real: ${informacion.nombre}`);
        console.log(`Poderes: ${informacion.poderes.join(', ')}`);
    }else{
        console.log('El super heroe no pertenece al equipo Avenger actual')
    }


    
};
mostrarInfoSuper("THOR");

// Función para varios superhéroes (nombre corregido)
function mostrarInformacionSuperheroes(seudonimos) {
    seudonimos.forEach(heroe => {
        mostrarInfoSuper(heroe.toUpperCase());
    });
}


mostrarInformacionSuperheroes(["HULK"]);