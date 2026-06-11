# Política de dependencias, gestor de paquetes y auditoría

## Gestor de paquetes

- El gestor oficial es **npm** (existe `package-lock.json` versionado).
- **No** mezclar con `yarn` ni `pnpm`: generan lockfiles distintos y diffs ruidosos.
- El `package-lock.json` se versiona siempre y se commitea junto al `package.json`.
- Instalación reproducible en CI: `npm ci` (respeta el lock; falla si está desincronizado).

## Dependencias actuales

Este repo es de **empaquetado y documentación del DS**: no tiene dependencias de runtime.
Solo `devDependencies` para tipos y linting de los proyectos que consumen el DS:

- `typescript`, `@types/node`, `@types/react`, `@types/react-dom`
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`

Los scripts (`scripts/`) usan solo módulos nativos de Node (`node:fs`, `node:path`, `node:url`), sin dependencias externas.

## Reglas para agregar/actualizar dependencias

- Justificar toda dependencia nueva en el PR (qué problema resuelve, por qué no se hace con lo existente).
- Preferir módulos nativos de Node antes que paquetes externos para scripts.
- Fijar rango con `^` salvo que haya razón para fijar versión exacta.
- Mantener separadas `dependencies` (runtime) de `devDependencies` (build/tooling).
- Actualizar `package-lock.json` en el mismo commit.

## Auditoría de seguridad

- Correr `npm audit` antes de cada release y de forma periódica.
- Resolver vulnerabilidades **high/critical** antes de mergear; `npm audit fix` para las automáticas.
- Documentar en el PR cualquier vulnerabilidad aceptada conscientemente (con motivo y plan).
- Revisar `npm outdated` periódicamente para evitar deuda de versiones.

## Comandos de referencia

```bash
npm ci            # instalación reproducible (CI)
npm audit         # reporte de vulnerabilidades
npm audit fix     # arregla las resolubles automáticamente
npm outdated      # dependencias con versión nueva disponible
```
