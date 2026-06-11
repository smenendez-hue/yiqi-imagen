# Testing (Jest recomendado, runner adaptable)

## Estatus

Jest es el **runner recomendado por defecto**, no el único permitido. Un proyecto puede
usar **Vitest**, **node:test** u otro runner siempre que cumpla el mismo nivel de testing
descrito acá. Lo **obligatorio es testear**; el runner es una recomendación adaptable
(ver `gobernanza-y-alcance.md`).

## Objetivo

Asegurar regresion controlada y calidad funcional en todas las aplicaciones YiQi,
independientemente del runner elegido.

## Convenciones

- Nombrado: `*.test.ts` / `*.test.tsx`
- Ubicacion sugerida:
  - Unit: junto al módulo o en `src/**`
  - Integration: `src/test/`
- Estructura AAA (Arrange, Act, Assert).

## Cobertura minima sugerida

- Lines >= 70%
- Functions >= 70%
- Branches >= 70%
- Statements >= 70%

## Casos que no pueden faltar

- Happy path
- Error path (API/network/validacion)
- Casos borde de reglas de negocio
- Mapeo correcto de datos de API

## Mocks

- Mockear integraciones externas (API, storage, tiempo) de forma explicita.
- No testear infraestructura de terceros.
- Evitar mocks fragiles atados a implementaciones internas.

## Comandos estandar

El alias `npm test` debe ejecutar la suite, cualquiera sea el runner. Con Jest:

```bash
npm test
npm run test:run
npm run test:coverage
```

Si se usa otro runner, mantener los mismos alias (`test`, `test:coverage`) para que CI y
los checklists no cambien.
