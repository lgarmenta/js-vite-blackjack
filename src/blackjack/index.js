import _ from 'underscore';
import {crearDeck, pedirCarta, crearCarta, turnoComputadora, acumularPuntos} from './usecases';


/**
 * 2C= Two of Clubs (Tréboles)
 * 2D= Two of Diamons (Diamantes)
 * 2H= Two of Hearts (Corazones)
 * 2S= Two of Swords (Espadas)
 * 
 */


// (()=>{})(); //Funcion anonima auto invocada

//Modulo de patron
(()=>{
  'Use strict'

  let deck         = [];
  const tipos      = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores =[];

  //Referencias del HTML
  const btnPedir   = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo   = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('small');
  
  //Esta función inicializa el juego
  const inicializarJuego = ( numJugadores = 2) =>{
      deck = crearDeck(tipos,especiales);
      puntosJugadores= [];
      for( let i = 0; i<numJugadores; i++){
          puntosJugadores.push(0);
      }
      puntosHtml.forEach( elem => elem.innerText = 0 );

      divCartasJugadores.forEach( elem => elem.innerHTML = '');
      btnPedir.disabled   = false;
      btnDetener.disabled = false;
  }
  
  //Eventos
  btnPedir.addEventListener('click', () => {
      //logica para pedir carta y sumar puntos
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta , 0, puntosJugadores, puntosHtml);     
      puntosHtml[0].innerText = puntosJugadores[0];
      const imgCarta = crearCarta( carta );
      divCartasJugadores[0].append(imgCarta);
      

      //logica para saber si el jugador perdió o ganó
      if( puntosJugador > 21 ){
          console.warn( 'Lo siento mucho, perdiste' );
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores ); 
          puntosHtml[puntosJugadores.length-1].innerText = puntosJugadores[puntosJugadores.length-1];
      } else if ( puntosJugador ===21 ){
          console.warn( '21, genial!' );
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora( puntosJugador, deck, puntosJugadores, divCartasJugadores);
          puntosHtml[puntosJugadores.length-1].innerText = puntosJugadores[puntosJugadores.length-1];
      }
  });

  btnDetener.addEventListener('click', () =>{
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugadores[0] , deck, puntosJugadores, divCartasJugadores );
      puntosHtml[puntosJugadores.length-1].innerText = puntosJugadores[puntosJugadores.length-1];
  });

  btnNuevo.addEventListener('click', () =>{
      inicializarJuego();      
  });


  return {
      nuevoJuego: inicializarJuego
  };
})(); 




