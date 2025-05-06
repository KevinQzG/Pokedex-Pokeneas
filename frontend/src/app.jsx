'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const pokemons = [
  { id: 25, name: 'Pikachu', type: 'Eléctrico' },
  { id: 6, name: 'Charizard', type: 'Fuego/Volador' },
  { id: 150, name: 'Mewtwo', type: 'Psíquico' },
  { id: 1, name: 'Bulbasaur', type: 'Planta/Veneno' },
  { id: 7, name: 'Squirtle', type: 'Agua' },
  { id: 39, name: 'Jigglypuff', type: 'Normal/Hada' },
  { id: 133, name: 'Eevee', type: 'Normal' },
  { id: 448, name: 'Lucario', type: 'Lucha/Acero' },
  { id: 94, name: 'Gengar', type: 'Fantasma/Veneno' },
  { id: 143, name: 'Snorlax', type: 'Normal' },
  { id: 658, name: 'Greninja', type: 'Agua/Siniestro' },
  { id: 493, name: 'Arceus', type: 'Normal (Dios Pokémon)' },
];

const TiltCard = ({ pokemon }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="bg-white border-[6px] border-yellow-400 rounded-xl shadow-2xl text-center flex flex-col items-center p-4 transition-all hover:scale-[1.02] hover:ring-4 ring-[#FFCB05]/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Holo effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#FFCB05]/20 to-[#2A75BB]/10 animate-[pulse_4s_infinite] rounded-xl z-0 blur-[1px]" />

      {/* Content */}
      <div className="z-10 w-full">
        <div className="bg-[#FFCB05] text-[#1A1A1A] font-bold text-lg py-1 px-3 rounded-t-md mb-3 border-b-2 border-[#CC0000]">
          {pokemon.name}
        </div>

        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          className="w-28 h-28 object-contain mx-auto mb-4"
          loading="lazy"
        />

        <div className="text-sm font-semibold bg-[#2A75BB] text-white py-1 px-3 rounded-full mb-4 shadow-sm w-fit mx-auto">
          Tipo: {pokemon.type}
        </div>

        <button
          className="mt-auto w-full py-2 px-4 bg-gradient-to-r from-[#FFCB05] via-[#CC0000] to-[#2A75BB] text-white font-bold rounded-full text-sm shadow-lg hover:scale-105 transition-transform"
          aria-label={`Ver detalles de ${pokemon.name}`}
        >
          ⚡ Ver Detalles
        </button>
      </div>
    </motion.div>
  );
};

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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-[#ECF6FF] text-[#1A1A1A] font-['Press_Start_2P']">
      {/* Navbar */}
      <nav className="bg-[#2A75BB] p-4 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl text-white drop-shadow-md">Pokeneas</h1>
          <div className="hidden md:flex space-x-4">
            <button className="bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105 font-bold">
              Inicio
            </button>
            <button className="bg-[#CC0000] text-white px-4 py-2 rounded-full hover:bg-red-700 transition transform hover:scale-105 font-bold">
              Pokédex
            </button>
          </div>
          <button
            className="md:hidden text-white"
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
            <button className="w-full bg-[#CC0000] text-white px-4 py-2 rounded-full font-bold">
              Inicio
            </button>
            <button className="w-full bg-[#CC0000] text-white px-4 py-2 rounded-full font-bold">
              Pokédex
            </button>
          </div>
        )}
      </nav>

      {/* Main */}
      <main className="container mx-auto p-6 flex-grow">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-[#2A75BB] drop-shadow-md animate-pulse">
          ¡Bienvenido, Maestro Pokémon!
        </h2>
        <p className="text-center mb-6 text-[#1A1A1A] text-sm sm:text-base italic">
          {message || 'Conectando con el servidor...'}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pokemons.map((pokemon) => (
            <TiltCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#2A75BB] text-white text-center py-4 mt-auto">
        <p className="text-xs sm:text-sm">© 2025 Pokeneas. ¡Hazte con todos!</p>
      </footer>
    </div>
  );
};

export default App;
