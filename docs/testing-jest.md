# Testing con Jest cuando esta configurado

## Objetivo

Asegurar regresion controlada y calidad funcional en proyectos YiQi que ya usan Jest
o que lo adoptan explicitamente.

Si el proyecto usa otro runner, seguir el runner existente. No reemplazarlo por Jest
sin una decision explicita del equipo.

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

## Comandos de referencia

```bash
npm test
npm run test:run
npm run test:coverage
```

Estos comandos son ejemplos. Usar solo los que existan en `package.json` o en la
documentacion del proyecto.
