# PR Checklist - YiQi

## Calidad técnica

- [ ] Build exitoso
- [ ] Lint sin errores criticos
- [ ] Tests Jest agregados/actualizados
- [ ] `npm run test:run` exitoso

## API

- [ ] Contratos OpenAPI respetados
- [ ] Errores HTTP manejados
- [ ] Normalizacion de payloads aplicada
- [ ] Navegacion a detalle usa `item.id` documentado en fixture/OpenAPI, sin `ID` ni fallbacks de nombres alternativos

## UI/UX

- [ ] Tokens YiQi usados (sin hardcode innecesario)
- [ ] Tipografia y estilo alineados
- [ ] Responsive <= 980px validado
- [ ] Copy en espanol neutro
- [ ] Listados navegan con click en fila; botones secundarios cortan propagacion del click

## Indicadores y datos

- [ ] Cada KPI visible declara fuente validable (modulo + campo(s) + agregado/formula + periodo)
- [ ] KPIs derivados explican formula y unidad de calculo
- [ ] Indicadores de cuenta explican composicion (incluye/excluye)
- [ ] Estados "No disponible" o "Dato de ejemplo" informados cuando no hay fuente real
- [ ] Cambio de payload con impacto en KPIs incluye mapeo + tests + documentacion actualizada

## Indicadores y datos

- [ ] Cada KPI visible declara fuente validable (modulo + campo(s) + agregado/formula + periodo)
- [ ] KPIs derivados explican formula y unidad de calculo
- [ ] Indicadores de cuenta explican composicion (incluye/excluye)
- [ ] Estados "No disponible" o "Dato de ejemplo" informados cuando no hay fuente real
- [ ] Cambio de payload con impacto en KPIs incluye mapeo + tests + documentacion actualizada

## Mantenibilidad

- [ ] Tipos/interfaces claros
- [ ] Sin duplicacion evitable
- [ ] Documentacion actualizada si aplica
- [ ] `npm run test:detail-navigation` ejecutado si hay UI con listados o detalle

## Deploy Azure + Next.js

- [ ] Si aplica Azure App Service + Next.js: artifact incluye `.next/BUILD_ID`.
- [ ] Si se usa `actions/upload-artifact@v4`: `include-hidden-files: true` y exclusiones explícitas de `.git`, `.git/**`, `.env`, `.env.*`.
- [ ] Si aplica Next.js 16 en Azure: `next build --webpack` en build y fallback, con log `Production build not found. Running next build --webpack before start...`.
