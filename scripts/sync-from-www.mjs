/* ============================================================
   Sync del DS desde la fuente canónica (www.yiqi) → este repo.
   Regenera ds-styles.css y styles.css. NO editar esos a mano.
   Uso:  node scripts/sync-from-www.mjs
   La fuente se asume carpeta hermana ../www.yiqi (override: WWW_YIQI=/ruta).
   ============================================================ */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = process.env.WWW_YIQI || join(ROOT, '..', 'www.yiqi');
if (!existsSync(join(WWW, 'ds-styles.css'))) {
  console.error(`✗ No encuentro la fuente en ${WWW}. Definí WWW_YIQI=/ruta/a/www.yiqi`);
  process.exit(1);
}

const fecha = new Date().toLocaleDateString('es-AR');
const header = (name) => `/* ============================================================
   YiQi Design System — ${name}
   Versión: DS v1.2.7
   Fecha: ${fecha}
   Fuente canónica: www.yiqi (diguardia/www.yiqi) · ver LEEME-FUENTE-DS.md
   GENERADO por scripts/sync-from-www.mjs — NO editar a mano
   ============================================================ */
`;

function block(css, sel) {
  const i = css.indexOf(sel);
  if (i < 0) throw new Error(`No encontré "${sel}"`);
  let depth = 0, j = css.indexOf('{', i);
  for (; j < css.length; j++) { if (css[j] === '{') depth++; else if (css[j] === '}' && --depth === 0) { j++; break; } }
  return css.slice(i, j);
}

const wwwDs = readFileSync(join(WWW, 'ds-styles.css'), 'utf8');
const dsBody = wwwDs.slice(wwwDs.indexOf('/* ── 1. TOKENS BASE — DARK MODE'));

// ds-styles.css = header + cuerpo canónico
writeFileSync(join(ROOT, 'ds-styles.css'), header('ds-styles.css') + '\n' + dsBody);

// styles.css = header + tokens base (site.css) + cuerpo canónico (self-contained para CDN)
const site = readFileSync(join(WWW, 'site.css'), 'utf8');
const tokens = `/* ── 0. TOKENS BASE — sync desde www.yiqi/site.css ── */\n${block(site, ':root {')}\n\n${block(site, 'html[data-theme="light"] {')}\n\n`;
writeFileSync(join(ROOT, 'styles.css'), header('styles.css') + '\n' + tokens + dsBody);

console.log('✓ Sync OK — ds-styles.css y styles.css regenerados desde www.yiqi');
