import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";
import { determinarGanador } from "./detarminar-ganador";
import {acumularPuntos} from "./acumular-puntos";


//Turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que necesita la computadora para ganar
 * @param {String[]} deck 
 * @param {number[]} puntosJugadores 
 * @param {HTMLElement[]} divCartasHTML 
 */
export const turnoComputadora = ( puntosMinimos, deck, puntosJugadores, divCartasHTML ) =>{
    if ( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if ( !deck ) throw new Error('el deck es necesario')

    let puntosComputadora = 0;
    do {
        //logica para pedir carta y sumar puntos
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores );
        const imgCarta = crearCarta( carta );
        divCartasHTML[puntosJugadores.length - 1].append(imgCarta);
        
        if( puntosMinimos > 21){
            break;
        }
    } while( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );

    determinarGanador(puntosJugadores);
}