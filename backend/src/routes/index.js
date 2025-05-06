const express = require('express');
const os = require('os');
const router = express.Router();

const pokeneas = [
  {
    id: 1,
    nombre: 'Pikachu',
    altura: 0.4,
    habilidad: 'Electricidad estática',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    frase: 'La energía está en cada chispa que damos.'
  },
  {
    id: 2,
    nombre: 'Charizard',
    altura: 1.7,
    habilidad: 'Mar llamas',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
    frase: 'El fuego interior nunca se apaga.'
  },
  {
    id: 3,
    nombre: 'Mewtwo',
    altura: 2.0,
    habilidad: 'Presión',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png',
    frase: 'La fuerza sin control no es poder verdadero.'
  },
  {
    id: 4,
    nombre: 'Bulbasaur',
    altura: 0.7,
    habilidad: 'Espesura',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    frase: 'Creciendo en calma, florece la sabiduría.'
  },
  {
    id: 5,
    nombre: 'Squirtle',
    altura: 0.5,
    habilidad: 'Torrente',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    frase: 'La paciencia fluye como el agua.'
  },
  {
    id: 6,
    nombre: 'Jigglypuff',
    altura: 0.5,
    habilidad: 'Canto',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png',
    frase: 'En la dulzura del canto habita el poder.'
  },
  {
    id: 7,
    nombre: 'Eevee',
    altura: 0.3,
    habilidad: 'Fuga',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
    frase: 'Las posibilidades viven en el cambio.'
  },
  {
    id: 8,
    nombre: 'Lucario',
    altura: 1.2,
    habilidad: 'Impasible',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png',
    frase: 'Disciplina y aura: armonía en batalla.'
  },
  {
    id: 9,
    nombre: 'Gengar',
    altura: 1.5,
    habilidad: 'Levitar',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png',
    frase: 'Las sombras también sonríen.'
  },
  {
    id: 10,
    nombre: 'Snorlax',
    altura: 2.1,
    habilidad: 'Inmunidad',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png',
    frase: 'El descanso es parte del camino.'
  },
  {
    id: 11,
    nombre: 'Greninja',
    altura: 1.5,
    habilidad: 'Mutatipo',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png',
    frase: 'La agilidad es silencio en movimiento.'
  },
  {
    id: 12,
    nombre: 'Arceus',
    altura: 3.2,
    habilidad: 'Multitipo',
    imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/493.png',
    frase: 'Todo comenzó en el resplandor de Arceus.'
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
  res.send(`
    <html>
      <head>
        <title>Pokenea - ${aleatorio.nombre}</title>
        <style>
          body { font-family: sans-serif; text-align: center; margin-top: 50px; background: #F5F5F5; color: #1A1A1A; }
          img { max-width: 250px; }
          .frase { font-style: italic; margin: 20px 0; }
          .container { background: white; padding: 20px; border-radius: 12px; display: inline-block; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${aleatorio.nombre}</h1>
          <img src="${aleatorio.imagen}" alt="${aleatorio.nombre}" />
          <p class="frase">"${aleatorio.frase}"</p>
          <p><strong>Container ID:</strong> ${os.hostname()}</p>
        </div>
      </body>
    </html>
  `);
});

module.exports = router;
