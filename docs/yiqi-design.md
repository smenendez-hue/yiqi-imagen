# YiQi Design System — Guía maestra v1.2.4

> Fuente única de verdad para implementación de UI en productos YiQi ERP.
> Este archivo reemplaza cualquier versión anterior de `yiqi-design.md`.
> Referencias completas: `YiQi_DS_v1_2_4.md` · `YiQi_DS_v1_2_4_Recipe.md`

---

## 0. Identidad de marca

| Elemento | Valor |
|---|---|
| Nombre del producto | **YiQi** — Y mayúscula, i minúscula, Q mayúscula, i minúscula |
| ❌ Incorrecto | `yiqi` `YIQI` `YiQI` `Yiqi` |
| CTA canónica | **"Reserva tu demo"** |
| Copy | Español neutro — sin voseo ni regionalismos |

### Logo

- Siempre como **SVG inline** — nunca `<img src="logo.svg">` ni `<img src="logo.png">`
- **Dark mode / negativo:** letras `#f2f0ef`, símbolo Q `#00ccff`
- **Light mode / positivo:** letras `#231f20`, símbolo Q `#009fc7`
- **Topbar universal:** letras `var(--text)`, símbolo Q `var(--cyan)`
- No rotar, deformar, recolorear ni aplicar efectos

---

## 1. CSS Custom Properties

### 1.1 Dark mode (`:root` — default)

```css
:root {
  /* Backgrounds */
  --bg:        #0a0a0b;
  --bg-elev:   #0f1013;
  --bg-elev-2: #14161b;
  --bg-soft:   #181b21;

  /* Borders */
  --line:        rgba(255,255,255,.08);
  --line-strong: rgba(255,255,255,.14);

  /* Text */
  --text:   #f3f5f7;
  --muted:  #98a2b3;
  --muted-2:#6f7785;

  /* Brand / Semantic */
  --cyan:       #00ccff;
  --cyan-soft:  rgba(0,204,255,.10);
  --cyan-soft-2:rgba(0,204,255,.16);
  --green:  #15d49c;
  --amber:  #ffb020;
  --red:    #ff637d;
  --blue:   #7ab7ff;
  --purple: #a78bfa;

  /* Effects */
  --glow: 0 0 0 1px rgba(0,204,255,.14) inset;

  /* Typography */
  --sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace;

  /* Font weights */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* Font sizes */
  --text-xs:  11px;
  --text-sm:  13px;
  --text-md:  14px;
  --text-lg:  18px;
  --text-xl:  22px;
  --text-2xl: 28px;

  /* Spacing (base 4px) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;

  /* Border radius */
  --radius-xs:   6px;    /* checkboxes, chips pequeños */
  --radius-sm:   10px;   /* nav items, icon buttons, tooltips */
  --radius:      14px;   /* base — botones, inputs, tags */
  --radius-md:   16px;   /* module items, integration cards */
  --radius-lg:   18px;   /* cards y panels principales */
  --radius-xl:   24px;   /* modales, cards destacadas */
  --radius-pill: 999px;  /* badges, avatares, pills */

  /* Transitions */
  --transition-fast: 120ms ease;
  --transition-base: 180ms ease;
  --transition-slow: 240ms ease;

  /* Layout */
  --sidebar-w: 308px;
  --topbar-h:  54px;
}
```

### 1.2 Light mode (`html[data-theme="light"]`)

```css
html[data-theme="light"] {
  --bg:        #eeece7;
  --bg-elev:   #f6f4ef;
  --bg-elev-2: #ffffff;
  --bg-soft:   #ece9e2;

  --line:        rgba(0,0,0,.08);
  --line-strong: rgba(0,0,0,.13);

  --text:    #17191c;
  --muted:   #586170;
  --muted-2: #7f8896;

  --cyan:        #009fc7;
  --cyan-soft:   rgba(0,159,199,.10);
  --cyan-soft-2: rgba(0,159,199,.14);
  --green:  #0c9b6d;
  --amber:  #c78000;
  --red:    #d4485e;
  --blue:   #347de6;
  --purple: #7c3aed;

  --glow: 0 0 0 1px rgba(0,159,199,.14) inset;
}
```

---

## 2. Tipografía

### Imports (en `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Regla de uso

- **Inter (`--sans`)** → todo el texto de interfaz: headings, body, labels, botones
- **IBM Plex Mono (`--mono`)** → tokens, badges, kickers, valores numéricos, IDs, atajos de teclado

### Escala Inter

| Uso | Tamaño | Peso | Letter-spacing |
|---|---|---|---|
| Hero / Dashboard title | 40px | 700 | -0.04em |
| Título de sección | 28px | 700 | -0.03em |
| Subtítulo / card heading | 18–20px | 600 | -0.02em |
| Panel title | 14px | 700 | — |
| Body / celdas | 13–14px | 400 | — |
| Label / meta | 12px | 500 | — |
| Caption / helper | 11px | 400 | — |

### Escala IBM Plex Mono

| Uso | Tamaño | Peso | Transform |
|---|---|---|---|
| Kicker / section label | 10px | 700 | uppercase, ls .16em, color `--cyan` |
| Nav section label | 9–10px | 700 | uppercase, ls .15em, color `--muted-2` |
| Valor delta / KPI change | 11px | 600 | — |
| ID / código | 10–12px | 500 | — |
| Shortcut de teclado | 10px | 600 | — |

---

## 3. Uso semántico del color

| Color | Token | Uso |
|---|---|---|
| Cyan | `--cyan` | Acento primario, CTA, foco, links activos, métrica clave |
| Green | `--green` | Éxito, positivo, incremento |
| Amber | `--amber` | Advertencia, instalación, acción secundaria |
| Red | `--red` | Error, peligro, decremento, eliminación |
| Blue | `--blue` | Informativo, contexto complementario |
| Purple | `--purple` | Acento secundario decorativo |
| Muted | `--muted` | Texto secundario, estados neutrales |

**Regla:** el color es semántico, nunca decorativo. No hardcodear valores — siempre usar tokens.

---

## 4. Layout shell

### Estructura base

```
topbar sticky (54–56px, z-index: 99)
  └─ SVG logo inline + version pill + dark/light toggle + hamburger mobile
sidebar (308px, sticky top: 56px)
  └─ off-canvas en mobile (breakpoint: 980px)
main content
  └─ padding: 36–40px desktop / 20–22px mobile
  └─ max-width: 1100px
```

### Topbar

```css
.topbar {
  position: sticky; top: 0; z-index: 99;
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 0 28px; height: 56px;
  background: var(--bg-elev);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(12px);
}
```

### Sidebar

```css
.sidebar {
  width: var(--sidebar-w);
  position: sticky; top: 56px;
  height: calc(100vh - 56px);
  overflow-y: auto;
  border-right: 1px solid var(--line);
  padding: 24px 16px;
}
```

### HTML mínimo

```html
<html data-theme="dark">
<body>
  <header class="topbar">...</header>
  <div class="ds-layout">
    <nav class="sidebar">...</nav>
    <main class="content">
      <div class="kpi-grid">...</div>
      <div class="panel">...</div>
    </main>
  </div>
  <div class="ds-overlay"></div>
</body>
```

---

## 5. Responsive

### Breakpoints

| Breakpoint | Comportamiento |
|---|---|
| `> 1200px` | 3 col / 4 KPIs completos |
| `≤ 1200px` | Grids de 3 col → 2 col |
| `≤ 980px` | Sidebar off-canvas, layout 1 columna |
| `≤ 720px` | Espaciados reducidos, grids → 1 col |

### Sidebar mobile off-canvas

```css
@media (max-width: 980px) {
  .sidebar {
    position: fixed; inset: 0; left: -100%; z-index: 98;
    transition: left var(--transition-base);
    box-shadow: 22px 0 40px rgba(0,0,0,.28);
  }
  .sidebar.open { left: 0; }

  .ds-overlay {
    display: none; position: fixed; inset: 0;
    background: rgba(0,0,0,.45); z-index: 80;
    backdrop-filter: blur(2px);
  }
  .ds-overlay.show { display: block; }
}
```

### Mobile frame fix (obligatorio)

```css
html, body { overflow-x: hidden; }
.ds-layout, .content, .card, .panel,
.kpi-grid, .table-wrap { min-width: 0; }
img, svg { max-width: 100%; height: auto; }
```

---

## 6. Componentes clave

### Botones

```css
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 16px; border-radius: var(--radius);
  border: 1px solid transparent; font: 600 13px var(--sans);
  transition: all var(--transition-base); cursor: pointer;
}
.btn-primary   { background: var(--cyan); color: #0a0a0b; border-color: var(--cyan); }
.btn-secondary { background: var(--bg-elev-2); color: var(--text); border-color: var(--line-strong); }
.btn-ghost     { background: transparent; color: var(--muted); border-color: var(--line); }
.btn-amber     { background: var(--amber); color: #0a0a0b; border-color: var(--amber); }
.btn-danger    { background: var(--red); color: #fff; border-color: var(--red); }
```

### Badges

```css
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 9px; border-radius: var(--radius-pill);
  font: 600 11px var(--mono); border: 1px solid transparent;
}
.badge-cyan  { background: var(--cyan-soft);           color: var(--cyan);  border-color: rgba(0,204,255,.20); }
.badge-green { background: rgba(21,212,156,.10);        color: var(--green); }
.badge-amber { background: rgba(255,176,32,.10);        color: var(--amber); }
.badge-red   { background: rgba(255,99,125,.10);        color: var(--red);   }
.badge-muted { background: var(--bg-soft); color: var(--muted); border-color: var(--line); }
```

### Cards / KPIs

```css
.card {
  padding: 20px; border: 1px solid var(--line);
  border-radius: var(--radius-lg); background: var(--bg-elev-2);
}
.card-kicker {
  font: 700 10px var(--mono); letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted-2);
}
.kpi-value {
  font: 700 28px var(--sans); letter-spacing: -.03em;
  color: var(--text); margin-top: 8px;
}
.kpi-delta-positive { color: var(--green); }
.kpi-delta-negative { color: var(--red);   }
```

### Inputs

```css
.input {
  width: 100%; padding: 10px 12px;
  border: 1px solid var(--line-strong); border-radius: var(--radius);
  background: var(--bg); color: var(--text);
  font: 400 14px var(--sans);
  transition: border-color var(--transition-base), box-shadow var(--transition-base);
}
.input:focus {
  outline: none;
  border-color: rgba(0,204,255,.28);
  box-shadow: var(--glow);
}
.input::placeholder { color: var(--muted-2); }
```

### Panel

```css
.panel {
  background: var(--bg-elev);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  display: flex; flex-direction: column; gap: var(--space-4);
}
```

### Tablas

```css
.table-wrap { overflow-x: auto; }
.table { width: 100%; border-collapse: collapse; }
.table th {
  font: 700 10px var(--mono); letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted-2);
  padding: 10px 14px; background: var(--bg-elev);
  border-bottom: 1px solid var(--line); text-align: left;
}
.table td {
  padding: 12px 14px; font: 400 13px var(--sans);
  border-bottom: 1px solid var(--line); color: var(--text);
}
.table tr:last-child td { border-bottom: none; }
.table tr:hover td { background: var(--bg-soft); }
```

Toda tabla debe tener: sorting por columna · búsqueda en tiempo real · scroll horizontal · estados loading/empty/error.

### Nav item (sidebar)

```css
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: var(--radius-sm);
  font: 500 13px var(--sans); color: var(--muted);
  transition: all var(--transition-base);
}
.nav-item:hover  { background: var(--bg-soft); color: var(--text); }
.nav-item.active { background: var(--cyan-soft); color: var(--cyan); }
```

---

## 7. Iconografía — Phosphor Icons

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
```

Uso: `<i class="ph ph-[nombre-icono]"></i>`

Tamaño estándar: 16px en sidebar y topbar · 15px en botones · 18px en integration cards.

| Ícono | Módulo |
|---|---|
| `ph-house` | Inicio / Dashboard |
| `ph-chart-line-up` | Reportes / Analytics |
| `ph-shopping-cart` | Compras |
| `ph-package` | Inventario |
| `ph-receipt` | Facturación |
| `ph-users` | CRM / Clientes |
| `ph-gear-six` | Configuración |
| `ph-bell` | Notificaciones |
| `ph-magnifying-glass` | Búsqueda |
| `ph-arrow-down-to-line` | Descarga / Instalar |

---

## 8. Principios UX

YiQi Design no es estética. Es diseño de **superficies de decisión sobre datos de negocio**.

**Pregunta central:** ¿Qué tiene que decidir el usuario ahora?

**Arquitectura de pantalla (orden obligatorio):**
1. Contexto — Hero card
2. Estado — KPIs
3. Dirección — Tendencias / gráficos
4. Diagnóstico — Tabla de detalle
5. Acción — CTA / decisión

**Regla estructural:** arriba → decisión / abajo → explicación.

**Color semántico:** cyan = foco/acción · green = positivo · amber = alerta · red = crítico · muted = secundario.

**Anti-patrones:** dashboards genéricos · exceso de métricas · múltiples focos · UI decorativa · datos sin contexto.

---

## 9. Dark / Light toggle

```html
<html data-theme="dark">
```

```js
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('yiqi-theme', html.dataset.theme);
}
```

Persistencia: `localStorage` + cookie `yiqi_theme` para dominio `.yiqi.com.ar`.

---

## 10. Reglas críticas de implementación

1. **Tokens siempre** — nunca hardcodear colores. Nunca `background: #000` ni `fill="#17191c"` en SVGs.
2. **Logo SVG inline** — nunca `<img>`. El símbolo Q adaptado por tema vía `--cyan`.
3. **Dark/light** — solo via `data-theme="dark|light"` en `<html>`. No clases, no JS inline.
4. **Sin box-shadow con offset** — solo inset ring (`var(--glow)`) para depth. Excepción: modales y dropdowns.
5. **SVG labels en charts** — deben vivir en elementos `<text>` con `transform="rotate()"`. No `<div>` como label.
6. **Spacing múltiplos de 4** — nunca valores arbitrarios.
7. **Archivos self-contained** — fuentes, scripts, SVGs embebidos inline. Sin dependencias externas.
8. **Convención de nombres** — `[proyecto]-v1_0_0.html` (puntos → guiones bajos).

---

## 11. Reglas para IA

La IA **debe:**
- Usar solo los componentes y tokens definidos aquí
- Respetar jerarquía: contexto → estado → dirección → diagnóstico → acción
- Mantener layout: app-shell → sidebar → content
- No cambiar contenido ni copy existente
- Aplicar mobile fix (`min-width: 0`, `overflow-x: hidden`)

La IA **no puede:**
- Inventar componentes o variantes no documentadas
- Hardcodear colores o valores de tipografía
- Crear estilos inline (`style="color: #fff"`)
- Romper el layout base
- Redefinir tokens en componentes individuales

---

## 12. Checklist antes de deploy

- [ ] `data-theme="dark"` en `<html>` como estado inicial
- [ ] Variables CSS completas en `:root` y `html[data-theme="light"]`
- [ ] Logo YiQi en SVG inline (nunca `<img>`)
- [ ] Fuentes Inter + IBM Plex Mono cargadas
- [ ] `overflow-x: hidden` en `html, body`
- [ ] `min-width: 0` en todos los containers del grid
- [ ] Sidebar con clase `.open` y overlay con clase `.show`
- [ ] Topbar sticky con toggle de tema + botón hamburguesa mobile
- [ ] Colores hardcodeados reemplazados por custom properties
- [ ] CTA canónica: **"Reserva tu demo"** (sin voseo)
- [ ] Nombre de marca: **YiQi**

---

## 13. Dependencias estándar

```html
<!-- Fuentes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Iconos -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">

<!-- Charts (cuando aplique) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

---

*YiQi ERP · Design System v1.2.4 · Última actualización: 20/03/2026*
*Reemplaza todas las versiones anteriores de yiqi-design.md*
