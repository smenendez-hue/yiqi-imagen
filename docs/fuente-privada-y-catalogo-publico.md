# Fuente privada interna vs. catálogo público

Aclara qué parte del Design System es **fuente interna de trabajo** y qué es **catálogo
público consumible**, para que un tercero (o un proyecto consumidor) sepa qué puede usar y
qué no debe tocar.

> Nota de implementación: por ahora **no se mueven archivos**. `styles.css` se publica al
> CDN desde la raíz del repo (`https://diguardia.github.io/yiqi-imagen/styles.css`); mover
> archivos rompería esa URL. Esta separación es **documental**; una eventual división física
> (carpetas/repos) se hace después, preservando la ruta del CDN.

## Modelo de fuente

- **Fuente canónica (privada/interna):** repo `diguardia/www.yiqi`. Ahí viven los tokens y
  componentes reales del DS. Ver `LEEME-FUENTE-DS.md`.
- **Este repo (`yiqi-imagen`):** empaqueta y **publica** al CDN el `styles.css` de consumo.
  No es fuente: recibe cambios vía `npm run sync`.

## Clasificación de artefactos

### Público — catálogo consumible (lo que un proyecto usa)
| Artefacto | Uso |
|-----------|-----|
| `styles.css` | Hoja de estilos de consumo vía CDN (no copiar, no editar) |
| `yiqi-design-system.html` | Catálogo visual de componentes y patrones |
| `api-docs.html` | Documentación de API (referencia) |
| `yiqi-design.md`, `execution.md` | Guías de implementación |
| `README.md`, `docs/INDEX.md` | Puerta de entrada y navegación |
| `Fuentes/*.svg` (logos/íconos vigentes) | Activos de marca |

### Interno — fuente y herramientas (no es catálogo)
| Artefacto | Por qué es interno |
|-----------|--------------------|
| `ds-styles.css`, `site.css`, `ds-doc.css` | Insumos/derivados del empaquetado |
| `ds-components.js`, `yiqi-runtime.js` | Runtime/soporte del catálogo, no API pública |
| `scripts/` | Herramientas de build/sync internas |
| `fixtures/` | Datos de ejemplo para desarrollo/test |
| `Fuentes/archive/` | Versiones históricas (solo referencia) |
| `Agent/` | Instrucciones para agentes, no para consumidores |

## Reglas de frontera

- Lo **público** puede consumirse desde otros proyectos; lo **interno** no es contrato y puede cambiar sin aviso.
- Lo **derivado** (`styles.css`, `ds-styles.css`) nunca se edita a mano: se regenera desde la fuente.
- Si en el futuro se separa físicamente (repo público de catálogo + fuente privada), mantener `styles.css` accesible en la misma URL de CDN o publicar una redirección.

## Decisión pendiente (del equipo)
Si se quiere una separación física, elegir entre: (a) dos carpetas en este repo
(`public/` + `internal/`) o (b) un repo público espejo solo de catálogo. Hasta entonces,
rige esta clasificación documental.
