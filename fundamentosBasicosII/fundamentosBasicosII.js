// tarea: Fundamentos Básicos II
// Felipe Veloso 

// 1. Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function grande(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        }
    }

    return arr;
}


// 2. Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function impMenDevMay(arr) {
    var mayor = arr[0];
    var menor = arr[0]

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    console.log(menor)
    return mayor;
}


// 3. Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function imprimeUnoDevuelveOtro(arr) {
    var penultimo = arr[arr.length - 2];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            firstOdd = arr[i];
            break;
        }
    }

    console.log(penultimo);
    return firstOdd;
}


// 4. Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function doble(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}


// 5. Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function contarPositivos(arr) {
    var cont = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            cont += 1;
        }
    }
    arr[arr.length - 1] = cont;
    return arr;
}


// 6. Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function paresEImpares(arr) {
    var impares = 0;
    var pares = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue;
        } else if (arr[i] % 2 != 0) {
            impares += 1;
            if (impares === 3) {
                console.log("¡que imparcial!");
                impares = 0;
                pares = 0;
            }
        } else {
            pares += 1;
            if (pares === 3) {
                console.log("¡es para bien!");
                pares = 0;
                impares = 0;
            }
        }
    }
}


// 7. Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, console.log cada valor del array y devuelve arr. 
for (var i = 0; i < arr.length; i++) {
    if (i % 2 != 0) {
        arr[i] = arr[i] + 1;
    }
    console.log(arr[i]);
}
return arr;
}


// 8. Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function previousLengths(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = arr[i].length;
    }
    for (var n = 1, x = 0; n < arr.length; n++, x++) {
        arr[n] = newarr[x];
    }

    return arr;
}


// 9. Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function agregarSiete(arr) {
    var newarr = [];
    newarr[0] = arr[0];
    for (var i = 1; i < arr.length; i++) {
        newarr[i] = arr[i] + 7;
    }
    return newarr;
}


// 10. Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function arrayInverso(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < arr.length; i++, x--) {
        temp = arr[i];
        arr[i] = arr[x];
        arr[x] = temp;
    }
    return arr;
}


// 11. Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function perspectivaNegativa(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr[i] = -Math.abs(arr[i]);
    }
    return newarr;
}

// 12. Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function siempreHambiento(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'comida') {
            console.log('yummy');
            counter += 1;
        }
    }
    if (counter === 0) {
        console.log("tengo hambre");
    }
    return;
}

// 13. Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function cambiaHaciaElCentro(arr) {
    var temp = arr[0];
    for (var i = 0, x = (arr.length - 1); i < x; i++, x--) {
        if (i === 0 || i % 2 === 0) {
            temp = arr[i];
            console.log(temp);
            arr[i] = arr[x];
            arr[x] = temp;
            console.log(arr);
        }
    }
    return arr;
}


// 14. Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function escalarArray(arr, y) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * y;
    }
    return arr;
}