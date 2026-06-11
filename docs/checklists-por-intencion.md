# Checklists por intención de cambio

Antes de implementar, **clasificá la intención** del cambio y seguí solo el checklist
correspondiente. Esto evita revisar todo en cada PR. El `docs/pr-checklist.md` es la base
transversal; estos son los focos por caso.

## 1. Cambio trivial (typo, copy, 1 línea en archivo ya nombrado)
- [ ] El cambio es realmente acotado (no toca lógica ni contratos).
- [ ] Sin necesidad de leer documentación de fondo.
- [ ] Build/lint no se rompen.

## 2. Nueva UI de listado / detalle
- [ ] Navegación a detalle con `item.id` (ver `docs/yiqi-api.md`).
- [ ] Click en fila navega; botones secundarios cortan propagación.
- [ ] `npm run test:detail-navigation` pasa.
- [ ] E2E que hace click en fila y verifica la URL final.
- [ ] Estados vacíos / "Dato de ejemplo" cuando no hay fuente real.

## 3. Consumir un endpoint nuevo de la API YiQi
- [ ] Documentado: qué devuelve, qué ids aporta, qué campos consume, si requiere `schemaId`/`userId`.
- [ ] Mapeo payload remoto -> modelo interno -> DTO de UI.
- [ ] Manejo de `401/403/409/5xx` (ver `docs/politica-errores.md`).
- [ ] Seguridad: sin secretos en código, contexto desde login (ver `docs/seguridad-integraciones-api.md`).
- [ ] Fixture de referencia actualizado si aplica (ver `docs/politica-fixtures.md`).

## 4. Cambios de estilos / tokens / componentes del DS
- [ ] El cambio se hace en la **fuente** `www.yiqi`, **no** acá (ver `LEEME-FUENTE-DS.md`).
- [ ] `styles.css` / `ds-styles.css` se regeneran con `npm run sync` (no editar a mano).
- [ ] `version.json` y `CHANGELOG.md` coherentes con la versión del DS.
- [ ] Tokens YiQi usados; filosofía borderless respetada.

## 5. KPIs / indicadores
- [ ] Cada KPI declara fuente validable (módulo + campo(s) + fórmula + período).
- [ ] KPIs derivados explican fórmula y unidad.
- [ ] Cambio de payload con impacto en KPIs: mapeo + tests + doc.

## 6. Deploy (Azure App Service + Next.js)
- [ ] Artifact incluye `.next/BUILD_ID`.
- [ ] `actions/upload-artifact@v4` con `include-hidden-files: true` y exclusiones de `.git`/`.env`.
- [ ] Next.js 16: `next build --webpack` en build y fallback.

## 7. Solo documentación
- [ ] Encoding UTF-8 / LF (ver `docs/convenciones-documentacion.md`).
- [ ] Español neutro; marca escrita **YiQi**.
- [ ] Índices actualizados si se agregó/quitó un archivo (`docs/INDEX.md`, etc.).
