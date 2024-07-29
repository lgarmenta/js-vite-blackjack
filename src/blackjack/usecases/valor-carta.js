
/**
 * Obtiene el valor de la carta
 * @param {string} carta 
 * @returns {Number} Regresa el valor de la carta
 */
export const valorCarta = ( carta ) =>{
    const valor = carta.substring(0,carta.length-1);
    return (isNaN( valor )) ? 
        { primario: (valor === 'A') ? 11 : 10, alternativo: (valor === 'A') ? 1 : 10 }
        : { primario: valor * 1, alternativo: valor * 1 };
}