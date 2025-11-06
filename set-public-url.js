// set-public-url.js
const fs = require("fs");

const isVercel = process.env.VERCEL === "1";
const homepage = isVercel
  ? "" // En Vercel, el sitio vive en el dominio raíz
  : "https://JuanRojasB.github.io/Proyecto"; // En GitHub Pages, usamos la subcarpeta

const envContent = `PUBLIC_URL=${homepage}\n`;
fs.writeFileSync("./.env.production", envContent);

console.log(`PUBLIC_URL configurada para: ${homepage || "Vercel (root)"}`);
