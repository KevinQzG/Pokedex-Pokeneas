const express = require('express');
const os = require('os');
const router = express.Router();

const pokeneas = [
  {
    id: 25,
    nombre: 'Pikachu',
    tipo: 'Eléctrico',
    altura: 0.4,
    habilidad: 'Electricidad estática',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    frase: 'La energía está en cada chispa que damos.',
    rareza: 'classic'
  },
  {
    id: 6,
    nombre: 'Charizard',
    tipo: 'Fuego/Volador',
    altura: 1.7,
    habilidad: 'Mar llamas',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    frase: 'El fuego interior nunca se apaga.',
    rareza: 'powerful'
  },
  {
    id: 150,
    nombre: 'Mewtwo',
    tipo: 'Psíquico',
    altura: 2.0,
    habilidad: 'Presión',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    frase: 'La fuerza sin control no es poder verdadero.',
    rareza: 'legendary'
  },
  {
    id: 1,
    nombre: 'Bulbasaur',
    tipo: 'Planta/Veneno',
    altura: 0.7,
    habilidad: 'Espesura',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    frase: 'Creciendo en calma, florece la sabiduría.',
    rareza: 'classic'
  },
  {
    id: 7,
    nombre: 'Squirtle',
    tipo: 'Agua',
    altura: 0.5,
    habilidad: 'Torrente',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    frase: 'La paciencia fluye como el agua.',
    rareza: 'classic'
  },
  {
    id: 39,
    nombre: 'Jigglypuff',
    tipo: 'Normal/Hada',
    altura: 0.5,
    habilidad: 'Canto',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    frase: 'En la dulzura del canto habita el poder.',
    rareza: 'normal'
  },
  {
    id: 133,
    nombre: 'Eevee',
    tipo: 'Normal',
    altura: 0.3,
    habilidad: 'Fuga',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    frase: 'Las posibilidades viven en el cambio.',
    rareza: 'normal'
  },
  {
    id: 448,
    nombre: 'Lucario',
    tipo: 'Lucha/Acero',
    altura: 1.2,
    habilidad: 'Impasible',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    frase: 'Disciplina y aura: armonía en batalla.',
    rareza: 'powerful'
  },
  {
    id: 94,
    nombre: 'Gengar',
    tipo: 'Fantasma/Veneno',
    altura: 1.5,
    habilidad: 'Levitar',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    frase: 'Las sombras también sonríen.',
    rareza: 'normal'
  },
  {
    id: 143,
    nombre: 'Snorlax',
    tipo: 'Normal',
    altura: 2.1,
    habilidad: 'Inmunidad',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    frase: 'El descanso es parte del camino.',
    rareza: 'normal'
  },
  {
    id: 658,
    nombre: 'Greninja',
    tipo: 'Agua/Siniestro',
    altura: 1.5,
    habilidad: 'Mutatipo',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    frase: 'La agilidad es silencio en movimiento.',
    rareza: 'powerful'
  },
  {
    id: 493,
    nombre: 'Arceus',
    tipo: 'Normal (Dios Pokémon)',
    altura: 3.2,
    habilidad: 'Multitipo',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
    frase: 'Todo comenzó en el resplandor de Arceus.',
    rareza: 'legendary'
  }
];

// GET /pokenea-json
router.get('/pokenea-json', (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  res.json({
    id: aleatorio.id,
    nombre: aleatorio.nombre,
    altura: aleatorio.altura,
    habilidad: aleatorio.habilidad,
    containerId: os.hostname(),
  });
});

// GET /pokenea-img
router.get('/pokenea-img', (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];

  const estilos = {
    normal: { bg: '#d1d5db', text: '#000', etiqueta: 'Normal' },
    classic: { bg: '#3b82f6', text: '#fff', etiqueta: 'Clásico' },
    powerful: { bg: '#ef4444', text: '#fff', etiqueta: 'Poderoso' },
    legendary: { bg: '#facc15', text: '#78350f', etiqueta: 'Legendario' }
  };

  const estilo = estilos[aleatorio.rareza] || estilos.normal;

  res.send(`
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>Pokenea - ${aleatorio.nombre}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

          body {
            margin: 0;
            padding: 40px 0;
            font-family: 'Press Start 2P', system-ui;
            background: linear-gradient(to bottom right, #F5F5F5, #ECF6FF);
            color: #1A1A1A;
            text-align: center;
          }

          .card {
            position: relative;
            background: white;
            border-radius: 1rem;
            padding: 1.5rem;
            width: 320px;
            margin: auto;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }

          .rarity {
            position: absolute;
            top: -14px;
            left: 16px;
            padding: 4px 10px;
            font-size: 9px;
            border-radius: 6px;
            border: 2px solid #CC0000;
            background: ${estilo.bg};
            color: ${estilo.text};
          }

          h1 {
            color: #2A75BB;
            font-size: 18px;
            margin-bottom: 10px;
          }

          .image {
            width: 200px;
            height: auto;
            margin-bottom: 10px;
          }

          .info p {
            font-size: 10px;
            margin: 4px 0;
          }

          .frase {
            font-style: italic;
            color: #555;
            margin: 12px 0;
            font-size: 10px;
          }

          .footer {
            margin-top: 12px;
            font-size: 10px;
            background: #2A75BB;
            color: white;
            padding: 6px 12px;
            border-radius: 8px;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="rarity">${estilo.etiqueta}</div>
          <h1>${aleatorio.nombre}</h1>
          <img src="${aleatorio.imagen}" alt="${aleatorio.nombre}" class="image" />
          <div class="info">
            <p><strong>ID:</strong> ${aleatorio.id}</p>
            <p><strong>Tipo:</strong> ${aleatorio.tipo}</p>
            <p><strong>Altura:</strong> ${aleatorio.altura} m</p>
            <p><strong>Habilidad:</strong> ${aleatorio.habilidad}</p>
          </div>
          <p class="frase">"${aleatorio.frase}"</p>
          <div class="footer">Container ID: ${os.hostname()}</div>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;

router.get('/', (req, res) => {
  const containerId = os.hostname();
  res.render('index', { pokeneas, containerId });
});
