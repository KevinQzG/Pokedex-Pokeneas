'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const pokemons = [
  { id: 25, name: 'Pikachu', type: 'Eléctrico', height: 0.4, skill: 'Electricidad estática', phrase: 'La energía está en cada chispa que damos.', rarity: 'classic' },
  { id: 6, name: 'Charizard', type: 'Fuego/Volador', height: 1.7, skill: 'Mar llamas', phrase: 'El fuego interior nunca se apaga.', rarity: 'powerful' },
  { id: 150, name: 'Mewtwo', type: 'Psíquico', height: 2.0, skill: 'Presión', phrase: 'La fuerza sin control no es poder verdadero.', rarity: 'legendary' },
  { id: 1, name: 'Bulbasaur', type: 'Planta/Veneno', height: 0.7, skill: 'Espesura', phrase: 'El crecimiento toma tiempo, como toda buena semilla.', rarity: 'classic' },
  { id: 7, name: 'Squirtle', type: 'Agua', height: 0.5, skill: 'Torrente', phrase: 'La paciencia es la fuerza del agua.', rarity: 'classic' },
  { id: 39, name: 'Jigglypuff', type: 'Normal/Hada', height: 0.5, skill: 'Canto', phrase: 'La música puede calmar hasta al alma más inquieta.', rarity: 'normal' },
  { id: 133, name: 'Eevee', type: 'Normal', height: 0.3, skill: 'Fuga', phrase: 'El cambio es la mayor forma de libertad.', rarity: 'normal' },
  { id: 448, name: 'Lucario', type: 'Lucha/Acero', height: 1.2, skill: 'Impasible', phrase: 'La voluntad define al verdadero guerrero.', rarity: 'powerful' },
  { id: 94, name: 'Gengar', type: 'Fantasma/Veneno', height: 1.5, skill: 'Levitar', phrase: 'Las sombras también pueden sonreír.', rarity: 'normal' },
  { id: 143, name: 'Snorlax', type: 'Normal', height: 2.1, skill: 'Inmunidad', phrase: 'El descanso es una forma de sabiduría.', rarity: 'normal' },
  { id: 658, name: 'Greninja', type: 'Agua/Siniestro', height: 1.5, skill: 'Mutatipo', phrase: 'La agilidad mental es tan letal como un shuriken.', rarity: 'powerful' },
  { id: 493, name: 'Arceus', type: 'Normal (Dios Pokémon)', height: 3.2, skill: 'Multitipo', phrase: 'La creación es el inicio de toda existencia.', rarity: 'legendary' },
];

const rarityStyles = {
  legendary: {
    border: '', // sin borde
    label: 'Legendario',
    labelColor: 'bg-yellow-400 text-yellow-900',
  },
  powerful: {
    border: '',
    label: 'Poderoso',
    labelColor: 'bg-red-500 text-white',
  },
  classic: {
    border: '',
    label: 'Clásico',
    labelColor: 'bg-blue-500 text-white',
  },
  normal: {
    border: '',
    label: 'Normal',
    labelColor: 'bg-gray-300 text-black',
  },
};

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

  const style = rarityStyles[pokemon.rarity];

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className={`relative overflow-hidden bg-white rounded-xl shadow-2xl 
        text-center flex flex-col items-center p-4 min-h-[480px] transition-all 
        hover:scale-[1.02]`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-[#FFCB05]/20 to-[#2A75BB]/10 animate-[pulse_4s_infinite] rounded-xl z-0 blur-[1px]" />

      {/* Etiqueta de rareza */}
      <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold z-20 shadow ${style.labelColor}`}>
        {style.label}
      </div>

      <div className="z-10 w-full flex flex-col items-center justify-between h-full">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
          className="w-25 h-25 object-contain mx-auto"
          loading="lazy"
        />
        <div className="mt-2">
          <h3 className="text-base font-extrabold text-[#2A75BB] mb-1">{pokemon.name}</h3>
          <p className="text-xs text-[#2A75BB] font-semibold">ID: {pokemon.id}</p>
          <p className="text-xs text-[#2A75BB] font-semibold">Tipo: {pokemon.type}</p>
          <p className="text-xs text-[#CC0000] font-bold">Altura: {pokemon.height} m</p>
          <p className="text-xs text-[#1A1A1A] font-semibold">Habilidad: {pokemon.skill}</p>
        </div>
        <div className="mt-2 px-3">
          <p className="text-[10px] italic text-[#555] leading-tight">"{pokemon.phrase}"</p>
        </div>
      </div>
    </motion.div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#F5F5F5] via-white to-[#ECF6FF] text-[#1A1A1A] font-['Press_Start_2P']">
      <nav className="bg-gradient-to-r from-[#2A75BB] to-[#003A70] p-4 shadow-md sticky top-0 z-50 border-b-4 border-[#FFCB05]">
        <div className="container mx-auto flex justify-center items-center space-x-3">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt="Pokeball"
            className="w-20  h-20 drop-shadow"
          />
          <h1 className="text-2xl sm:text-3xl text-white drop-shadow-md tracking-wide">
            Pokeneas
          </h1>
        </div>
      </nav>


      <main className="container mx-auto p-6 flex-grow">
        <h2 className="text-2xl sm:text-3xl text-center mb-6 text-[#2A75BB] drop-shadow-md animate-pulse">
          ¡Bienvenido, Maestro Pokenea!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pokemons.map((pokemon) => (
            <TiltCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>

      <footer className="bg-[#2A75BB] text-white text-center py-4 mt-auto">
        <p className="text-xs sm:text-sm">© 2025 Pokeneas. ¡Hazte con todas las pokeneas de la zona!</p>
      </footer>
    </div>
  );
};

export default App;
