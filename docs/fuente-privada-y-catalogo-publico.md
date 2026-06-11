# Fuente del DS vs. catálogo público

Aclara qué es **fuente del Design System** y qué es **catálogo/artefacto consumible**, para
que un proyecto consumidor sepa qué puede usar y qué no debe editar.

## Modelo de fuente (desde 2026-06-11)

- **Fuente canónica:** este repo `diguardia/yiqi-imagen`. Acá se editan tokens, componentes,
  catálogo y documentación del DS. Ver `../LEEME-FUENTE-DS.md`.
- **Sitio `www.yiqi`:** **consume** el DS. Carga `styles.css` desde el CDN y recibe los
  artefactos sincronizados con `npm run sync` (`scripts/sync-to-www.mjs`). No es la fuente.

## Clasificación de artefactos

### Fuente del DS — se edita acá
| Artefacto | Rol |
|-----------|-----|
| `ds-styles.css` | Hoja del DS (componentes + tokens del catálogo) — canónico |
| `styles.css` | Bundle de consumo publicado al CDN — canónico |
| `yiqi-design.md` | Documentación maestra de diseño |
| `yiqi-design-system.html` | Catálogo visual |
| `version.json` | Versión del DS |

### Consumible — lo que usan los proyectos (no editar)
| Artefacto | Uso |
|-----------|-----|
| `https://diguardia.github.io/yiqi-imagen/styles.css` | Hoja de estilos vía CDN (consumir, no copiar) |
| `api-docs.html` | Documentación de API (referencia) |
| `Fuentes/*.svg` (logos/íconos vigentes) | Activos de marca |

### Interno — herramientas y soporte
| Artefacto | Por qué es interno |
|-----------|--------------------|
| `scripts/` | Build/sync (incluye `sync-to-www.mjs`) |
| `fixtures/` | Datos de ejemplo para desarrollo/test |
| `Fuentes/archive/` | Versiones históricas (solo referencia) |
| `Agent/` | Instrucciones para agentes, no para consumidores |

## Reglas de frontera

- El DS se **edita en este repo**; `www.yiqi` recibe copias sincronizadas y no debe editarlas.
- Los proyectos consumen `styles.css` por **CDN**; no copian ni forkean los tokens.
- `styles.css` se publica al CDN desde la raíz de este repo: no mover ese archivo (rompería la URL publicada).

## Pendiente del lado de `www.yiqi`
- `content/design-system/_FUENTE-CANONICA.md` todavía declara a `www.yiqi` como fuente única
  (decisión del 2026-06-04, ahora revertida). Debe actualizarse para apuntar a `yiqi-imagen`.
