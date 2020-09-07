"use strict";
/*
    Ejercicio #1
    La siguiente es una función que toma un messageparámetro y durationen milisegundos para ser ejecutada
    Cuando se ejecute imprimirá: "Mundo" y "Hola".

    Sin eliminar setTimeout y el orden de ejecución y los parámetros ; modificar myFunctionpara imprimir
    "Hola" y "Mundo" en lugar de "Mundo" y "Hola".

    Sugerencia, busque Async / Await, Callbacks y Promises e implemente la mejor solución para usted.
*/
const myFunction = (message, duration) => {
    return new Promise((res) => {
        setTimeout(() => {
            console.log(message);
            res({ successExecution: true });
            ;
        }, duration);
    });
};
myFunction("Hello", 3000)
    .then((success) => {
    if (success.successExecution == true) {
        myFunction("World", 2000)
            .then((success) => {
            if (success.successExecution) {
                console.log('Las funciones fueron ejecutadas con exito');
            }
        })
            .catch((error) => {
            console.log(error);
        });
    }
})
    .catch((error) => {
    console.log(error);
});
