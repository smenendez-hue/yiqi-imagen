# YiQi Agent Standards

Repositorio/paquete base de lineamientos para agentes codificadores y equipos de desarrollo YiQi.

## Objetivo

Centralizar en un solo lugar:

- Reglas globales para agentes
- Buenas practicas de arquitectura y calidad
- Estandar de testing con Jest
- Guia de integracion con API YiQi
- Lineamientos de diseno YiQi
- Plantillas reutilizables para prompts y PR

## Uso recomendado

1. Definir este contenido como fuente de verdad.
2. En cada aplicacion, copiar una version resumida en `.github/copilot-instructions.md`.
3. En prompts funcionales, agregar:

```text
Consulta y aplica los lineamientos generales de YiQi Agent Standards (version actual) antes de proponer/editar codigo.
```

## Estructura

- `version.json`: version activa del estandar
- `CHANGELOG.md`: historial de cambios del estandar
- `docs/copilot-global-guidelines.md`: reglas principales para agentes
- `docs/prompt-template.md`: plantilla para prompts funcionales
- `docs/pr-checklist.md`: checklist de calidad para PR
- `docs/testing-jest.md`: convenciones de testing
- `docs/yiqi-api.md`: patrones de integracion API
- `docs/yiqi-design.md`: lineamientos de UI/UX
- `docs/repo-override-template.md`: template de override por repo

## Gobernanza sugerida

- CODEOWNERS para archivos de estandar
- Cambios via PR con aprobacion de arquitectura/plataforma
- Versionado semantico del estandar
