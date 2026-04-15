# Template de Override por Repositorio

Usar este archivo como base para `.github/copilot-instructions.md` en cada app.

```markdown
# Instrucciones Especificas del Repositorio

Este repositorio aplica los lineamientos globales definidos en YiQi Agent Standards (version vigente).

## Overrides locales

- Stack principal: <react/vue/node/etc>
- Convencion de carpetas: <src/...>
- Endpoints concretos: <lista>
- Restricciones de despliegue: <detalles>

## Reglas adicionales

- <regla local 1>
- <regla local 2>
- Endpoints `/query`: usar exclusivamente constantes de campos generadas desde Swagger (`FIELDS.*`).
- Prohibido hardcodear `field`/`columnName` como string literal en builders de query.
- Si cambia schema OpenAPI/campos, actualizar en el mismo cambio: generador, mapeos, tests y documentacion.
```
