# YiQi Design System — Guía maestra v1.2.5

> Fuente única de verdad para implementación de UI en productos YiQi ERP.
> Este archivo reemplaza cualquier versión anterior de `yiqi-design.md`.
> Referencias completas: `YiQi_DS_v1_2_4.md` · `YiQi_DS_v1_2_4_Recipe.md` · `YiQi_DS_v1_2_5_Recipe.md`

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
  --bg:        #0c0c0e;
  --bg-elev:   #111114;
  --bg-elev-2: #18181c;
  --bg-soft:   rgba(255,255,255,.04);

  /* Borders */
  --line:        rgba(255,255,255,.08);
  --line-strong: rgba(255,255,255,.14);

  /* Text */
  --text:    #f0f1f3;
  --muted:   #908e8e;
  --muted-2: #625f5f;

  /* Brand — Cyan */
  --cyan:            #00ccff;
  --cyan-soft:       rgba(0,204,255,.12);
  --cyan-soft-2:     rgba(0,204,255,.18);
  --cyan-label:      rgba(0,204,255,.7);
  --text-cyan-muted: rgba(0,195,240,.45);  /* subtítulos activos, labels acento */

  /* Semantic */
  --green:       #00c48c;
  --green-soft:  rgba(0,196,140,.12);
  --amber:       #f6a623;
  --amber-soft:  rgba(246,166,35,.12);
  --red:         #f25f5c;
  --red-soft:    rgba(242,95,92,.12);
  --purple:      #a78bfa;
  --purple-soft: rgba(167,139,250,.12);

  /* Focus glow */
  --glow: 0 0 0 3px rgba(0,204,255,.22);

  /* Typography */
  --sans:    "Inter", system-ui, sans-serif;
  --display: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --mono:    "IBM Plex Mono", monospace;

  /* Font weights */
  --weight-regular:  400;
  --weight-medium:   500;
  --weight-semibold: 600;
  --weight-bold:     700;

  /* Spacing (base 4px) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 32px;
  --space-8: 48px;

  /* Border radius */
  --radius-xs:   5px;
  --radius-sm:   7px;
  --radius:      10px;
  --radius-pill: 99px;

  /* Elevation / Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,.35), 0 1px 8px rgba(0,0,0,.18);
  --shadow-md: 0 4px 16px rgba(0,0,0,.4), 0 1px 4px rgba(0,0,0,.2);
  --shadow-lg: 0 8px 32px rgba(0,0,0,.5), 0 2px 8px rgba(0,0,0,.25);

  /* Transitions */
  --transition-fast: 120ms ease;
  --transition-base: 180ms ease;
  --transition-slow: 240ms ease;

  /* Layout */
  --sidebar-w: 240px;
  --topbar-h:  56px;

  /* Nav active border — borderless por defecto */
  --nav-item-active-border: transparent;
}
```

### 1.2 Light mode (`html[data-theme="light"]`)

```css
html[data-theme="light"] {
  /* Backgrounds */
  --bg:        #f5f4f0;
  --bg-elev:   #eeece7;
  --bg-elev-2: #e6e4df;
  --bg-soft:   rgba(0,0,0,.04);

  /* Borders */
  --line:        rgba(0,0,0,.08);
  --line-strong: rgba(0,0,0,.14);

  /* Text */
  --text:    #1a1a1e;
  --muted:   #5e5a57;
  --muted-2: #8a8580;

  /* Brand — Cyan (shifted para fondo claro) */
  --cyan:            #009fc7;
  --cyan-soft:       rgba(0,159,199,.1);
  --cyan-soft-2:     rgba(0,159,199,.16);
  --cyan-label:      rgba(0,159,199,.65);
  --text-cyan-muted: rgba(0,140,175,.48);

  /* Semantic */
  --green:       #007a58;
  --green-soft:  rgba(0,122,88,.1);
  --amber:       #c47c00;
  --amber-soft:  rgba(196,124,0,.1);
  --red:         #c93c39;
  --red-soft:    rgba(201,60,57,.1);
  --purple:      #7c3aed;
  --purple-soft: rgba(124,58,237,.1);

  /* Shadows (más suaves en fondo claro) */
  --shadow-sm: 0 1px 3px rgba(0,0,0,.08), 0 1px 8px rgba(0,0,0,.05);
  --shadow-md: 0 4px 16px rgba(0,0,0,.1), 0 1px 4px rgba(0,0,0,.06);
  --shadow-lg: 0 8px 32px rgba(0,0,0,.15), 0 2px 8px rgba(0,0,0,.08);
}
```

---

## 2. Tipografía

### Imports (en `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Regla de uso

- **Plus Jakarta Sans (`--display`)** → títulos de página, hero headlines, headings grandes
- **Inter (`--sans`)** → todo el texto de interfaz: body, labels, botones, nav
- **IBM Plex Mono (`--mono`)** → tokens, badges, kickers, valores numéricos, IDs, atajos de teclado

### Escala tipográfica

| Uso | Fuente | Tamaño | Peso | Letter-spacing |
|---|---|---|---|---|
| Hero / Page title | `--display` | 40–52px | 800 | -0.03em a -0.04em |
| Título de sección | `--display` | 24–28px | 700 | -0.025em |
| Subtítulo / card heading | `--sans` | 16–20px | 600 | -0.02em |
| Panel title | `--sans` | 14px | 700 | — |
| Body / celdas | `--sans` | 13–14px | 400 | — |
| Label / meta | `--sans` | 12px | 500 | — |
| Kicker / section label | `--mono` | 10–11px | 600–700 | .10em–.16em, uppercase |
| Valor numérico / ID | `--mono` | 10–13px | 500 | — |

---

## 3. Filosofía borderless *(nuevo en v1.2.5)*

**Regla:** los elementos de display van **sin borde** siempre que sea posible. La profundidad se logra con elevación de fondo y `box-shadow`.

```
borde visible → solo en controles interactivos (input, select, textarea, switch, checkbox, search)
sin borde     → cards, panels, KPIs, badges, tags, nav items, modales, accordions, icon cards
```

```css
/* ✅ Correcto — card borderless */
.card {
  background: var(--bg-elev);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);   /* profundidad por sombra */
}

/* ✅ Correcto — input con borde (control interactivo) */
.input {
  border: 1px solid var(--line);
}

/* ❌ Incorrecto */
.card { border: 1px solid var(--line); }
.badge { border: 1px solid var(--line); }
```

---

## 4. Token `--text-cyan-muted` *(nuevo en v1.2.5)*

Usar en: subtítulos, estado activo de módulos, labels secundarios con acento cyan.

**Nunca** en CTAs ni texto principal.

```css
/* ✅ Uso correcto */
.section-kicker    { color: var(--text-cyan-muted); }
.module-open-title { color: var(--text-cyan-muted); }
.nav-item.active   { color: var(--text-cyan-muted); }

/* ❌ Incorrecto — usar --cyan directo para estados activos */
.nav-item.active { color: var(--cyan); }
```

---

## 5. Fondo de pantalla *(actualizado en v1.2.5)*

Dos variantes según el contexto del entregable:

| Variante | Cuándo usarla |
|---|---|
| **Solo radiales** | Dashboard, informe, panel gerencial — cualquier app funcional |
| **Radiales + grilla** | Landing, propuesta comercial (leads), sitio web (www.yiqi.com.ar) |

### Variante A — Solo radiales (dashboards e informes)

```css
body {
  background:
    radial-gradient(circle at 72% 8%,  rgba(0,204,255,.07), transparent 28%),
    radial-gradient(circle at 12% 60%, rgba(0,204,255,.04), transparent 22%),
    var(--bg);
}
html[data-theme="light"] body {
  background:
    radial-gradient(circle at 72% 8%,  rgba(0,159,199,.06), transparent 28%),
    radial-gradient(circle at 12% 60%, rgba(0,159,199,.04), transparent 22%),
    var(--bg);
}
```

### Variante B — Radiales + grilla (landing, leads, web)

```css
body {
  background:
    radial-gradient(circle at 72% 8%,  rgba(0,204,255,.07), transparent 28%),
    radial-gradient(circle at 12% 60%, rgba(0,204,255,.04), transparent 22%),
    linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.018) 1px, transparent 1px),
    var(--bg);
  background-size: auto, auto, 52px 52px, 52px 52px, auto;
}
html[data-theme="light"] body {
  background:
    radial-gradient(circle at 72% 8%,  rgba(0,159,199,.06), transparent 28%),
    radial-gradient(circle at 12% 60%, rgba(0,159,199,.04), transparent 22%),
    linear-gradient(rgba(0,0,0,.032) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,.032) 1px, transparent 1px),
    var(--bg);
  background-size: auto, auto, 52px 52px, 52px 52px, auto;
}
```


## 6. Layout shell

### Estructura base

```
topbar sticky (56px, z-index: 99)
  └─ SVG logo inline + version pill + toggle 3 pasos + hamburger mobile
sidebar (240px, sticky top: 56px)
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
  gap: 16px; padding: 0 28px; height: var(--topbar-h);
  background: rgba(12,12,14,.82);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--line);  /* excepción: separador estructural */
}
html[data-theme="light"] .topbar {
  background: rgba(238,236,231,.88);
}
```

### Sidebar

```css
.sidebar {
  width: var(--sidebar-w);
  position: sticky; top: var(--topbar-h);
  height: calc(100vh - var(--topbar-h));
  overflow-y: auto;
  border-right: 1px solid var(--line);  /* excepción: separador estructural */
  padding: 24px 16px;
}
```

### HTML mínimo

```html
<html data-theme="system" lang="es">
<body>
  <header class="topbar">...</header>
  <div class="app-layout">
    <nav class="sidebar">...</nav>
    <main class="content">
      <div class="kpi-grid">...</div>
      <div class="panel">...</div>
    </main>
  </div>
</body>
```

---

## 7. Responsive

### Breakpoints

| Breakpoint | Comportamiento |
|---|---|
| `> 1200px` | 3–4 columnas KPIs completos |
| `≤ 1200px` | Grids 3 col → 2 col |
| `≤ 980px` | Sidebar off-canvas, layout 1 columna |
| `≤ 640px` | Espaciados reducidos |
| `≤ 420px` | Mobile pequeño — stacks totales |

### Mobile frame fix (obligatorio)

```css
html, body { overflow-x: hidden; }
.app-layout, .content, .card, .panel,
.kpi-grid, .table-wrap { min-width: 0; }
img, svg { max-width: 100%; }
```

---

## 8. Componentes clave

### Botones

```css
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 16px; border-radius: var(--radius);
  border: none; font: 600 13px var(--sans);
  transition: all var(--transition-base); cursor: pointer;
}
.btn-primary   { background: var(--cyan-soft-2); color: var(--cyan); }
.btn-secondary { background: var(--bg-elev-2);   color: var(--text); }
.btn-ghost     { background: var(--bg-elev-2);   color: var(--muted); }
.btn-danger    { background: var(--red-soft);     color: var(--red); }
```

### Badges / Tags / Pills — sin borde

```css
.badge {
  display: inline-flex; align-items: center;
  padding: 3px 9px; border-radius: var(--radius-pill);
  font: 600 11px var(--mono); letter-spacing: .04em;
  /* sin border — borderless philosophy */
}
.badge-cyan   { background: var(--cyan-soft);   color: var(--cyan); }
.badge-green  { background: var(--green-soft);  color: var(--green); }
.badge-amber  { background: var(--amber-soft);  color: var(--amber); }
.badge-red    { background: var(--red-soft);    color: var(--red); }
.badge-purple { background: var(--purple-soft); color: var(--purple); }
```

### Cards / KPIs — sin borde

```css
.card {
  padding: 20px;
  border-radius: var(--radius);
  background: var(--bg-elev);
  box-shadow: var(--shadow-sm);   /* profundidad por sombra, no por borde */
}
.card-kicker {
  font: 700 10px var(--mono); letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted-2);
}
.kpi-value {
  font: 700 28px var(--display); letter-spacing: -.03em;
  color: var(--text); margin-top: 8px;
}
.kpi-delta-positive { color: var(--green); }
.kpi-delta-negative { color: var(--red); }
```

### Inputs — excepción borderless

```css
.input {
  width: 100%; padding: 9px 12px;
  border: 1px solid var(--line);  /* controles interactivos sí llevan borde */
  border-radius: var(--radius-sm);
  background: var(--bg-elev-2); color: var(--text);
  font: 400 14px var(--sans);
  transition: border-color 160ms, box-shadow 160ms;
  outline: none;
}
.input:focus {
  border-color: var(--cyan);
  box-shadow: var(--glow);
}
```

### Módulos accordion — sin borde, profundidad por sombra

```css
.module-card {
  background: var(--bg-elev);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.module-card[open],
.module-card.open {
  box-shadow: var(--shadow-sm), inset 0 1px 0 rgba(0,195,240,.12);
}
```

### Panel

```css
.panel {
  background: var(--bg-elev);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  padding: var(--space-5);
  display: flex; flex-direction: column; gap: var(--space-4);
}
```

### Tablas

```css
.table-wrap { overflow-x: auto; }
.table { width: 100%; border-collapse: collapse; font-size: 13px; }
.table th {
  font: 600 11px var(--mono); letter-spacing: .06em;
  text-transform: uppercase; color: var(--muted-2);
  padding: 8px 12px; border-bottom: 1px solid var(--line); text-align: left;
}
.table td {
  padding: 11px 12px; color: var(--muted);
  border-bottom: 1px solid var(--line);
}
.table tr:last-child td { border-bottom: none; }
.table tr:hover td { background: var(--bg-soft); }
```

### Nav item

```css
.nav-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: var(--radius-sm);
  font: 500 13px var(--sans); color: var(--muted);
  transition: all var(--transition-base);
}
.nav-item:hover  { background: var(--bg-soft); color: var(--text); }
.nav-item.active {
  background: var(--cyan-soft);
  color: var(--text-cyan-muted);    /* nunca --cyan directo */
  border-left: 2px solid var(--nav-item-active-border);  /* transparent — borderless */
}
```

---


### Load progress

Barra de carga con porcentaje. Aparece mientras la app se conecta al backend o carga datos pesados.

```html
<div class="load-progress">
  <div class="load-progress-track">
    <div class="load-progress-fill" style="width: 65%"></div>
  </div>
  <div class="load-progress-meta">
    <span>Conectando con el servidor...</span>
    <strong>65%</strong>
  </div>
</div>
```

- Fill: degradado `var(--cyan)` → `var(--green)`, animado con `transition: width 0.35s ease`
- Estado completo: `width: 100%`

---

### Session warning

Aviso inline no crítico. Para alertas de sesión, límites de uso, o información de contexto que requiere atención sin interrumpir el flujo.

```html
<p class="session-warning">
  Tu sesión expira en 10 minutos. Guardá tu trabajo antes de continuar.
</p>
```

- Color ámbar (`var(--amber)`) con fondo y borde sutiles
- Max-width 52ch — nunca ocupa todo el ancho

---

### Runtime banner

Banner de estado que ocupa el ancho completo de un panel. Dos variantes según el estado de conexión.

```html
<!-- Datos de prueba (mock) -->
<div class="runtime-banner" data-state="mock">
  <div>
    <span>Modo demo</span>
    <strong>Datos de ejemplo activos</strong>
    <p>Conectá tu empresa para ver datos reales.</p>
  </div>
  <button class="btn btn-primary">Conectar</button>
</div>

<!-- Error de conexión -->
<div class="runtime-banner" data-state="error">
  <div>
    <span>Sin conexión</span>
    <strong>No se pudo alcanzar el servidor</strong>
    <p>Revisá tu conexión o intentá más tarde.</p>
  </div>
</div>
```

- `data-state="mock"` → borde cyan + glow (app corriendo con datos de prueba)
- `data-state="error"` → borde rojo (fallo de conexión)
- Sin `data-state` → neutro, solo fondo oscuro semitransparente

---

### Skeleton / Shimmer

Placeholders animados que reemplazan el contenido mientras carga. Evitan el efecto de "pantalla en blanco" y comunican que algo viene.

```html
<div class="card skeleton-card">
  <div class="skeleton-line skeleton-label" style="margin-bottom:10px"></div>
  <div class="skeleton-line skeleton-value" style="margin-bottom:14px"></div>
  <div class="skeleton-line skeleton-text"></div>
  <div class="skeleton-line skeleton-text" style="width:80%;margin-top:6px"></div>
</div>
```

Clases de tamaño disponibles:

| Clase | Ancho | Alto | Uso |
|---|---|---|---|
| `.skeleton-label` | 42% | 12px | Etiqueta / kicker |
| `.skeleton-value` | 70% | 28px | Valor numérico grande |
| `.skeleton-text` | 100% | 12px | Línea de texto |

- Animación: `yiqi-shimmer` — barrido horizontal de luz de 1.4s
- Se adapta al modo claro automáticamente

---

### Coherence badge

Badge de estado para tablas de coherencia contable — compara totales entre comprobantes (pedidos, remitos, facturas, cobranzas) y marca si están alineados.

```html
<!-- Datos coherentes -->
<span class="coherence-badge is-good">98.2%</span>

<!-- Diferencia detectada -->
<span class="coherence-badge is-alert">87.4%</span>
```

- `.is-good` → verde, diferencia < umbral aceptable
- `.is-alert` → ámbar, diferencia supera el umbral

---

## 9. Iconografía

**HTML standalone:** usar **SVG stroke inline**. El CDN de Phosphor puede fallar offline.

```html
<!-- Ejemplo SVG inline (recomendado para standalone) -->
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
     width="16" height="16">
  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
  <polyline points="9 22 9 12 15 12 15 22"/>
</svg>
```

**Next.js:** Phosphor Icons sigue siendo válido.

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
```

| Ícono Phosphor | Módulo |
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

---

## 10. Principios UX

YiQi Design no es estética. Es diseño de **superficies de decisión sobre datos de negocio**.

**Pregunta central:** ¿Qué tiene que decidir el usuario ahora?

**Arquitectura de pantalla (orden obligatorio):**
1. Contexto — Hero card
2. Estado — KPIs
3. Dirección — Tendencias / gráficos
4. Diagnóstico — Tabla de detalle
5. Acción — CTA / decisión

**Regla:** arriba → decisión / abajo → explicación.

**Color semántico:** cyan = foco/acción · green = positivo · amber = alerta · red = crítico · muted = secundario.

---

## 11. Toggle de tema — 3 pasos *(actualizado en v1.2.5)*

El toggle tiene tres estados: **Oscuro / Sistema / Claro**. `Sistema` es el default — respeta la preferencia del sistema operativo del usuario.

```html
<html data-theme="system" lang="es">

<!-- Segmented control en topbar -->
<div class="theme-toggle" role="group" aria-label="Tema">
  <button class="theme-opt" onclick="setTheme('dark')">Oscuro</button>
  <button class="theme-opt" onclick="setTheme('system')">Sistema</button>
  <button class="theme-opt" onclick="setTheme('light')">Claro</button>
</div>
```

```js
function resolveTheme() {
  const s = localStorage.getItem('yiqi-theme') || 'system';
  return s === 'system'
    ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    : s;
}
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  const s = localStorage.getItem('yiqi-theme') || 'system';
  document.querySelectorAll('.theme-opt').forEach((b, i) =>
    b.classList.toggle('active', ['dark','system','light'][i] === s));
}
function setTheme(v) {
  localStorage.setItem('yiqi-theme', v);
  applyTheme(v === 'system' ? resolveTheme() : v);
  document.querySelectorAll('.theme-opt').forEach((b, i) =>
    b.classList.toggle('active', ['dark','system','light'][i] === v));
}
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => {
  if ((localStorage.getItem('yiqi-theme') || 'system') === 'system') applyTheme(resolveTheme());
});
applyTheme(resolveTheme());
```

> ⚠️ `toggleTheme()` binario está **deprecated** desde v1.2.5. Usar `setTheme(v)`.

---

## 12. Uso semántico del color

| Color | Token | Uso |
|---|---|---|
| Cyan | `--cyan` | CTA, links, foco, acción principal |
| Cyan muted | `--text-cyan-muted` | Subtítulos activos, kickers, labels acento |
| Green | `--green` | Éxito, positivo, incremento |
| Amber | `--amber` | Advertencia, instalación, acción secundaria |
| Red | `--red` | Error, peligro, decremento, eliminación |
| Purple | `--purple` | Acento decorativo secundario |
| Muted | `--muted` | Texto secundario, estados neutrales |

**Regla:** el color es semántico, nunca decorativo. No hardcodear hex — siempre tokens.

---

## 13. Reglas críticas de implementación

1. **Tokens siempre** — nunca hardcodear colores (`background: #000`, `fill="#17191c"`, etc.)
2. **Logo SVG inline** — nunca `<img>`. Símbolo Q adaptado por tema vía `var(--cyan)`.
3. **Borderless philosophy** — elementos de display sin borde; profundidad con `box-shadow: var(--shadow-sm)`. Excepción: inputs, selects, textareas, switches, checkboxes.
4. **Fondo sin grilla** — solo 2 radiales cyan. Sin `background-size` de grilla.
5. **`data-theme="system"` como default** — nunca `"dark"` ni `"light"` hardcodeado.
6. **Toggle 3 pasos** — `setTheme(v)` con `"dark" | "system" | "light"`. No `toggleTheme()`.
7. **`--text-cyan-muted`** — para estados activos y labels con acento. Nunca `var(--cyan)` directo en texto de estado.
8. **Plus Jakarta Sans** — importar y usar como `var(--display)` en títulos y heroes.
9. **SVG inline para íconos** en HTML standalone — no Phosphor CDN sin fallback.
10. **Spacing múltiplos de 4** — sin valores arbitrarios.
11. **Archivos self-contained** — fuentes y scripts embebidos o desde CDN confiable.
12. **Convención de nombres** — `[proyecto]-v1_0_0.html` (puntos → guiones bajos).

---

## 14. Checklist antes de deploy

- [ ] `data-theme="system"` en `<html>` como estado inicial
- [ ] Variables CSS completas en `:root` y `html[data-theme="light"]`
- [ ] Token `--text-cyan-muted` declarado en ambos modos
- [ ] Logo YiQi en SVG inline (nunca `<img>`)
- [ ] Fuentes Plus Jakarta Sans + Inter + IBM Plex Mono cargadas
- [ ] `overflow-x: hidden` en `html, body`
- [ ] `min-width: 0` en todos los containers del grid
- [ ] Toggle 3 pasos: `setTheme()` + `resolveTheme()` + listener `prefers-color-scheme`
- [ ] Cards, panels, badges sin `border` — profundidad por `box-shadow`
- [ ] Fondo con solo 2 radiales cyan (sin grilla `background-size`)
- [ ] Colores hardcodeados reemplazados por custom properties
- [ ] CTA canónica: **"Reserva tu demo"** (sin voseo)
- [ ] Nombre de marca: **YiQi**
- [ ] Footer con versión DS: `· DS v1.2.5`

---

## 15. Dependencias estándar

```html
<!-- Fuentes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Iconos (solo Next.js — en standalone usar SVG inline) -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">

<!-- Charts (cuando aplique) -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
```

---

*YiQi ERP · Design System v1.2.5 · Última actualización: 30/04/2026*
*Reemplaza todas las versiones anteriores de yiqi-design.md*
