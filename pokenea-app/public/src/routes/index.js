const express = require("express");
const os = require("os");
const router = express.Router();

const S3_BASE_URL = process.env.S3_BASE_URL || "";
const OWNER = process.env.OWNER || "unknown";

const pokeneas = [
  {
    id: 25,
    nombre: "Pikachu",
    tipo: "Eléctrico",
    altura: 0.4,
    habilidad: "Electricidad estática",
    imagen: "PIKACHU.png",
    frase: "La energía está en cada chispa que damos.",
    rareza: "classic",
  },
  {
    id: 6,
    nombre: "Charizard",
    tipo: "Fuego/Volador",
    altura: 1.7,
    habilidad: "Mar llamas",
    imagen: "CHARIZARD.png",
    frase: "El fuego interior nunca se apaga.",
    rareza: "powerful",
  },
  {
    id: 150,
    nombre: "Mewtwo",
    tipo: "Psíquico",
    altura: 2.0,
    habilidad: "Presión",
    imagen: "MEWTO.png",
    frase: "La fuerza sin control no es poder verdadero.",
    rareza: "legendary",
  },
  {
    id: 1,
    nombre: "Bulbasaur",
    tipo: "Planta/Veneno",
    altura: 0.7,
    habilidad: "Espesura",
    imagen: "BULBASAUR.png",
    frase: "Creciendo en calma, florece la sabiduría.",
    rareza: "classic",
  },
  {
    id: 7,
    nombre: "Squirtle",
    tipo: "Agua",
    altura: 0.5,
    habilidad: "Torrente",
    imagen: "SQUIRTTLE.png",
    frase: "La paciencia fluye como el agua.",
    rareza: "classic",
  },
  {
    id: 39,
    nombre: "Jigglypuff",
    tipo: "Normal/Hada",
    altura: 0.5,
    habilidad: "Canto",
    imagen: "HADA.png",
    frase: "En la dulzura del canto habita el poder.",
    rareza: "normal",
  },
  {
    id: 133,
    nombre: "Eevee",
    tipo: "Normal",
    altura: 0.3,
    habilidad: "Fuga",
    imagen: "EVEE.png",
    frase: "Las posibilidades viven en el cambio.",
    rareza: "normal",
  },
  {
    id: 448,
    nombre: "Lucario",
    tipo: "Lucha/Acero",
    altura: 1.2,
    habilidad: "Impasible",
    imagen: "LUCARIO.png",
    frase: "Disciplina y aura: armonía en batalla.",
    rareza: "powerful",
  },
  {
    id: 94,
    nombre: "Gengar",
    tipo: "Fantasma/Veneno",
    altura: 1.5,
    habilidad: "Levitar",
    imagen: "GENGAR.png",
    frase: "Las sombras también sonríen.",
    rareza: "normal",
  },
  {
    id: 143,
    nombre: "Snorlax",
    tipo: "Normal",
    altura: 2.1,
    habilidad: "Inmunidad",
    imagen: "SNORLAX.png",
    frase: "El descanso es parte del camino.",
    rareza: "normal",
  },
  {
    id: 658,
    nombre: "Greninja",
    tipo: "Agua/Siniestro",
    altura: 1.5,
    habilidad: "Mutatipo",
    imagen: "GRENINJA.png",
    frase: "La agilidad es silencio en movimiento.",
    rareza: "powerful",
  },
  {
    id: 493,
    nombre: "Arceus",
    tipo: "Dios Pokémon",
    altura: 3.2,
    habilidad: "Multitipo",
    imagen: "ARCEUS.png",
    frase: "Todo comenzó en el resplandor de Arceus.",
    rareza: "legendary",
  },
];

// /pokenea-json
router.get("/pokenea-json", (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  res.json({
    id: aleatorio.id,
    nombre: aleatorio.nombre,
    altura: aleatorio.altura,
    habilidad: aleatorio.habilidad,
    imagen: `${S3_BASE_URL}/${aleatorio.imagen}`,
    containerId: os.hostname(),
    owner: OWNER,
  });
});

// /pokenea-img
router.get("/pokenea-img", (req, res) => {
  const aleatorio = pokeneas[Math.floor(Math.random() * pokeneas.length)];
  const imagenUrl = `${S3_BASE_URL}/${aleatorio.imagen}`;

  const estilos = {
    normal: { bg: "#d1d5db", text: "#000", etiqueta: "Normal" },
    classic: { bg: "#3b82f6", text: "#fff", etiqueta: "Clásico" },
    powerful: { bg: "#ef4444", text: "#fff", etiqueta: "Poderoso" },
    legendary: { bg: "#facc15", text: "#78350f", etiqueta: "Legendario" },
  };

  const estilo = estilos[aleatorio.rareza] || estilos.normal;

  res.send(`
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <title>Pokenea - ${aleatorio.nombre}</title>
        <style>
          body {
            font-family: 'Press Start 2P', system-ui;
            padding: 2rem;
            background: linear-gradient(to bottom right, #F5F5F5, #ECF6FF);
            text-align: center;
            color: #1A1A1A;
          }
          .card {
            background: white;
            padding: 1.5rem;
            margin: auto;
            width: 320px;
            border-radius: 1rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          .rarity {
            background: ${estilo.bg};
            color: ${estilo.text};
            padding: 4px 10px;
            font-size: 10px;
            border-radius: 6px;
            margin-bottom: 10px;
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
          <img src="${imagenUrl}" alt="${aleatorio.nombre}" width="200"/>
          <p><strong>ID:</strong> ${aleatorio.id}</p>
          <p><strong>Tipo:</strong> ${aleatorio.tipo}</p>
          <p><strong>Altura:</strong> ${aleatorio.altura} m</p>
          <p><strong>Habilidad:</strong> ${aleatorio.habilidad}</p>
          <p><em>"${aleatorio.frase}"</em></p>
          <div class="footer">
            Container ID: ${os.hostname()}<br/>
            Owner: ${OWNER}
          </div>
        </div>
      </body>
    </html>
  `);
});

// / (vista principal)
router.get("/", (req, res) => {
  const containerId = os.hostname();
  res.render("index", {
    pokeneas,
    containerId,
    s3BaseUrl: S3_BASE_URL,
    owner: OWNER,
  });
});

module.exports = router;
