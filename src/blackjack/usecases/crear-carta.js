
/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement}
 */
export const crearCarta = (carta ) =>{
    if( !carta ) throw new Error('la carta es un argumento obligatorio')
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    return imgCarta
}