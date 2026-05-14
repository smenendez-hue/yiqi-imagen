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

## UI/UX

- [ ] Tokens YiQi usados (sin hardcode innecesario)
- [ ] Tipografia y estilo alineados
- [ ] Responsive <= 980px validado
- [ ] Copy en espanol neutro

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
