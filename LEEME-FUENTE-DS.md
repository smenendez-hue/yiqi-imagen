# Fuente del Design System: este repo (`yiqi-imagen`)

**Fuente canónica del DS:** este repositorio **`yiqi-imagen`** (`diguardia/yiqi-imagen`).
A partir del **2026-06-11**, las actualizaciones del Design System (tokens, componentes,
catálogo, documentación) se hacen **acá** y desde acá se propagan.

Archivos canónicos en este repo:
- `ds-styles.css` — hoja del DS (componentes + tokens del catálogo).
- `styles.css` — bundle de consumo publicado al CDN.
- `yiqi-design.md` — documentación maestra de diseño.
- `yiqi-design-system.html` — catálogo visual.
- `version.json` — versión legible por máquina.

## Relación con `www.yiqi`

`www.yiqi` (el sitio) **consume** el DS: carga `styles.css` desde el CDN
(`https://diguardia.github.io/yiqi-imagen/styles.css`) y mantiene una copia local
sincronizada. Para propagar cambios del DS hacia el sitio:

```bash
npm run sync   # empuja el DS de este repo -> www.yiqi (scripts/sync-to-www.mjs)
```

## Pendiente
- Actualizar en `www.yiqi` el archivo `content/design-system/_FUENTE-CANONICA.md`, que
  todavía declara a `www.yiqi` como fuente única (decisión previa del 2026-06-04, ahora revertida).
- Reconciliar el catálogo `yiqi-design-system.html` entre ambos repos (tomar esta versión como canónica).

_Cambio de fuente definido el 2026-06-11: `yiqi-imagen` pasa a ser la fuente del DS._
