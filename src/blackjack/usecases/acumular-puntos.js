import { valorCarta } from "./valor-carta"; 

/**
 * 
 * @param {String} carta 
 * @param {Number} turno 
 * @param {Number[]} puntosJugadores 
 * @param {HTMLElement[]} puntosHtml 
 * @returns 
 */
 export const acumularPuntos = ( carta, turno, puntosJugadores ) =>{
    const primario= valorCarta(carta).primario;
    const alternativo= valorCarta(carta).alternativo;

    puntosJugadores[turno] += primario;
    
    // Ajustar el valor del As según convenga
    if (puntosJugadores[turno] > 21) {
        puntosJugadores[turno] -= primario;
        puntosJugadores[turno] += alternativo;
    }

    // puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}