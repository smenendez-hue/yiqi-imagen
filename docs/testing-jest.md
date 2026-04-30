# Estandar de Testing con Jest

## Objetivo

Asegurar regresion controlada y calidad funcional en todas las aplicaciones YiQi.

## Convenciones

- Nombrado: `*.test.ts` / `*.test.tsx`
- Ubicacion sugerida:
  - Unit: junto al modulo o en `src/**`
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

```bash
npm test
npm run test:run
npm run test:coverage
```
