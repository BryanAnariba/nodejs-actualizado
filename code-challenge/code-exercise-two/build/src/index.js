"use strict";
/*
    Ejercicio 2
    Modifique el siguiente código para permitir my3SecondsFunctiony my4SecondsFunctionresolver al mismo tiempo usando Promesas.
*/
const my3SecondsFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Este proceso tomará 3 segundos");
            resolve({ executionmy3: true });
        }, 3000);
    });
};
const my4SecondsFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Este proceso tomará 4 segundos");
            resolve({ executionmy4: true });
        }, 4000);
    });
};
Promise.all([my3SecondsFunction(), my4SecondsFunction()])
    .then((success) => {
    if (success) {
        console.log('Funciones ejecutadas con exito');
    }
})
    .catch((error) => {
    console.log(error);
});
