'use client';
import React, { useEffect, useState } from 'react';

const pokemons = [
  { id: 25, name: 'Pikachu', type: 'Eléctrico' },
  { id: 6, name: 'Charizard', type: 'Fuego/Volador' },
  { id: 1, name: 'Bulbasaur', type: 'Planta/Veneno' },
  { id: 7, name: 'Squirtle', type: 'Agua' },
  { id: 39, name: 'Jigglypuff', type: 'Normal/Hada' },
  { id: 52, name: 'Meowth', type: 'Normal' },
  { id: 150, name: 'Mewtwo', type: 'Psíquico' },
  { id: 94, name: 'Gengar', type: 'Fantasma/Veneno' },
  { id: 133, name: 'Eevee', type: 'Normal' },
  { id: 143, name: 'Snorlax', type: 'Normal' },
  { id: 448, name: 'Lucario', type: 'Lucha/Acero' },
  { id: 658, name: 'Greninja', type: 'Agua/Siniestro' },
];

const App = () => {
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error al conectar con el backend:', err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] text-[#1A1A1A] font-['Press_Start_2P']">
      {/* Navbar */}
      <nav className="bg-[#2A75BB] p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl text-white drop-shadow-md">Pokeneas</h1>
          <div className="hidden md:flex space-x-4">
            <button className="bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105 font-bold flex items-center">
              <span className="w-3 h-3 bg-[#FFCB05] rounded-full mr-2"></span> Inicio
            </button>
            <button className="bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105 font-bold flex items-center">
              <span className="w-3 h-3 bg-[#FFCB05] rounded-full mr-2"></span> Pokédex
            </button>
          </div>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <button className="w-full bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition font-bold flex items-center">
              <span className="w-3 h-3 bg-[#FFCB05] rounded-full mr-2"></span> Inicio
            </button>
            <button className="w-full bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition font-bold flex items-center">
              <span className="w-3 h-3 bg-[#FFCB05] rounded-full mr-2"></span> Pokédex
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 sm:p-6 flex-grow">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-[#2A75BB] drop-shadow-md animate-pulse">
          ¡Bienvenido, Entrenador!
        </h2>
        <p className="text-center mb-4 text-[#2A75BB] text-sm sm:text-base">
          {message || 'Conectando con el servidor...'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {pokemons.map(pokemon => (
            <div 
              key={pokemon.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center min-h-[300px] hover:shadow-[0_0_12px_rgba(204,0,0,0.5)] transition-all duration-300"
              role="article"
              aria-label={`${pokemon.name} card`}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                className="w-24 h-24 sm:w-28 sm:h-28 mb-3 object-contain pixelated"
                loading="lazy"
              />
              <h3 className="text-base sm:text-lg font-bold mb-1">{pokemon.name}</h3>
              <p className="text-sm sm:text-base mb-4">Tipo: {pokemon.type}</p>
              <button 
                className="mt-auto w-full bg-[#CC0000] text-white py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105 text-xs sm:text-sm font-bold"
                aria-label={`Ver detalles de ${pokemon.name}`}
              >
                • Ver Detalles
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A75BB] text-white text-center py-4">
        <p className="text-xs sm:text-sm">© 2025 Pokeneas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
