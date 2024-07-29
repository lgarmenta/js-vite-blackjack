 

 /**
  * Esta función me permite tomar una carta
  * @param {string[]} deck Array de cartas
  * @returns {string} Retorna la carta del deck
  */
 export const pedirCarta = (deck) => {
    if (!deck ) 
        throw new Error('deck es obligatorio como un arreglo de string');
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}
