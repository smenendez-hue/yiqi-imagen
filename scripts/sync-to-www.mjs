/* ============================================================
   Sync del DS: este repo (fuente canónica) -> www.yiqi (sitio).
   Copia los artefactos canónicos del Design System hacia el repo
   del sitio para mantenerlo en sincronía. NO regenera nada acá.
   Uso:  node scripts/sync-to-www.mjs
   Destino: carpeta hermana ../www.yiqi (override: WWW_YIQI=/ruta).
   ============================================================ */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = process.env.WWW_YIQI || join(ROOT, '..', 'www.yiqi');
if (!existsSync(WWW)) {
  console.error(`✗ No encuentro el destino en ${WWW}. Definí WWW_YIQI=/ruta/a/www.yiqi`);
  process.exit(1);
}

const fecha = new Date().toLocaleDateString('es-AR');
const marca = (orig) => `/* ============================================================
   YiQi Design System — ${orig}
   Versión: DS v1.2.7
   Fecha: ${fecha}
   Fuente canónica: diguardia/yiqi-imagen · ver LEEME-FUENTE-DS.md
   GENERADO desde yiqi-imagen por scripts/sync-to-www.mjs — NO editar a mano acá
   ============================================================ */
`;

// Quita un header de bloque inicial si existe, para no duplicarlo.
function stripHeader(css) {
  const m = css.match(/^\/\*[\s\S]*?\*\/\n?/);
  return m ? css.slice(m[0].length) : css;
}

// Artefactos a propagar: archivo origen (este repo) -> destino (www.yiqi)
const copias = [
  { src: 'ds-styles.css', dst: 'ds-styles.css', css: true },
  { src: 'yiqi-design.md', dst: 'content/design-system/yiqi-design.md', css: false },
];

let n = 0;
for (const { src, dst, css } of copias) {
  const from = join(ROOT, src);
  if (!existsSync(from)) { console.warn(`· omito ${src} (no existe)`); continue; }
  const to = join(WWW, dst);
  mkdirSync(dirname(to), { recursive: true });
  let body = readFileSync(from, 'utf8');
  if (css) body = marca(src) + '\n' + stripHeader(body);
  writeFileSync(to, body);
  console.log(`✓ ${src} -> www.yiqi/${dst}`);
  n++;
}

console.log(`✓ Sync OK — ${n} artefacto(s) propagado(s) a www.yiqi.`);
console.log('Nota: el catálogo yiqi-design-system.html se reconcilia a mano (puede tener wrappers del sitio).');
