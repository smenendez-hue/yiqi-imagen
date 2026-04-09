[README.md](https://github.com/user-attachments/files/26607523/README.md)
# YiQi Design System — Recipes & Components

> **Versión activa del DS:** `v1.2.4`  
> Siempre construir aplicativos contra la última versión listada arriba.

---

## ¿Qué es este repositorio?

Colección de **elementos, recetas y templates** para construir aplicativos con el **YiQi Design System**. Cada pieza está lista para usar y respeta las convenciones de DS v1.2.4: tokens de color, tipografía, componentes, modo oscuro/claro y versión mobile.

---

## Estructura

```
/
├── components/          # Componentes reutilizables (topbar, sidebar, cards, tablas…)
├── recipes/             # Plantillas completas listas para fork (dashboard, reporte, landing…)
├── tokens/              # Tokens de diseño en JSON (Tokens Studio compatible)
├── assets/              # Logos SVG, íconos y recursos estáticos
└── README.md
```

---

## Principios de uso

| Principio | Regla |
|---|---|
| **Versión** | Siempre usar la última versión del DS. Ver badge arriba. |
| **Logo** | Siempre embeber el logo como SVG inline — nunca como `<img>`. |
| **Mobile** | Todo componente debe incluir breakpoint mobile (≤ 980 px). |
| **Tokens** | Usar variables CSS del DS (`--cyan`, `--bg`, `--text`, etc.) — sin colores hardcodeados. |
| **Tipografía** | Inter para UI, IBM Plex Mono para código/datos. |
| **Idioma** | Copy en español neutro (sin voseo). |

---

## Detección automática de nueva versión

El archivo [`version.json`](./version.json) en la raíz del repo es la **fuente de verdad** de la versión activa del DS:

```json
{
  "ds_version": "1.2.4",
  "released_at": "2026-04-09",
  "changelog_url": "https://github.com/TU_ORG/TU_REPO/blob/main/CHANGELOG.md"
}
```

### Para consumidores del DS

Cualquier aplicativo puede verificar si hay una nueva versión ejecutando:

```js
// check-ds-version.js
const REPO_VERSION_URL =
  "https://raw.githubusercontent.com/TU_ORG/TU_REPO/main/version.json";

async function checkDSVersion(localVersion) {
  const res  = await fetch(REPO_VERSION_URL);
  const data = await res.json();

  if (data.ds_version !== localVersion) {
    console.warn(
      `⚠️  Nueva versión del DS disponible: ${data.ds_version}` +
      ` (tu versión: ${localVersion}). Changelog: ${data.changelog_url}`
    );
    return { outdated: true, latest: data.ds_version };
  }

  console.log(`✅ DS v${localVersion} está actualizado.`);
  return { outdated: false };
}

// Uso:
checkDSVersion("1.2.4");
```

### Para aplicativos HTML standalone

Pegá este snippet en el `<head>` de cualquier entregable HTML:

```html
<script>
(async () => {
  const LOCAL = "1.2.4"; // ← actualizar al generar cada entregable
  const URL   = "https://raw.githubusercontent.com/TU_ORG/TU_REPO/main/version.json";
  try {
    const { ds_version, changelog_url } = await (await fetch(URL)).json();
    if (ds_version !== LOCAL) {
      const banner = document.createElement("div");
      banner.style.cssText =
        "position:fixed;bottom:1rem;right:1rem;z-index:9999;" +
        "background:#0A0E27;border:1px solid #00ccff;color:#f3f5f7;" +
        "font-family:Inter,sans-serif;font-size:.8rem;padding:.75rem 1rem;" +
        "border-radius:.5rem;box-shadow:0 4px 24px rgba(0,204,255,.2);max-width:320px";
      banner.innerHTML =
        `<strong style="color:#00ccff">Nueva versión del DS: ${ds_version}</strong><br>` +
        `Este archivo usa v${LOCAL}. <a href="${changelog_url}" target="_blank" ` +
        `style="color:#00ccff">Ver changelog →</a>`;
      document.body.appendChild(banner);
    }
  } catch (_) { /* silencioso si offline */ }
})();
</script>
```

> **Flujo recomendado:** cada vez que se publica una nueva versión del DS, actualizar `ds_version` en `version.json` → los aplicativos muestran el banner de aviso automáticamente.

---

## Colores del sistema

| Token | Valor | Uso |
|---|---|---|
| `--cyan` | `#00CCFF` | Primario / CTAs / métricas destacadas |
| `--bg` | `#0A0E27` | Fondo base dark |
| `--accent-blue` | `#1A5299` | Acento secundario |
| `--accent-green` | `#10B981` | Positivo / éxito |

---

## Contribuir

1. Crear rama `feature/nombre-componente`
2. El componente debe pasar el checklist:
   - [ ] Tokens DS (sin colores hardcodeados)
   - [ ] Mobile responsive (≤ 980 px)
   - [ ] Dark mode funcional
   - [ ] Logo SVG inline
   - [ ] Copy en español neutro
3. Abrir PR con preview del componente embebido

---

## Licencia

Uso interno YiQi — © 2026 YiQi ERP. Todos los derechos reservados.
