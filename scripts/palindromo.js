

function palindromo (palabra) { 

    const arregloPalabra=palabra.replace(/\s+/g, '').toLowerCase() .replace(/[^A-Za-z]/g, '');

    const plabraSplit= arregloPalabra.split("");

    const palabraJoin= plabraSplit.reverse().join("");

    alert (`Su palabra al revez es ${palabraJoin}`);
    

    if (arregloPalabra===palabraJoin) {
        alert("Por lo tanto su palabra es un palindromo")
    } else {

        alert("Por lo tanto su palabra NO es un palindromo")
    }
}

let palabra= prompt("Escribe una palabra");
palindromo(palabra);


/*replace (/\s+/g, '') 
// indican inicio y final 
\s cualquier tipo de espacio en blanco
+ indica que pueden haber mas de un espacio en blanco
g significa global por lo qe buscara en toda la secuencia
" elimina las secuencias encontradas */
