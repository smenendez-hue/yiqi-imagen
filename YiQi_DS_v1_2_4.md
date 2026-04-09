# YiQi Design System — v1.2.4

> **El ERP más completo del mercado**  
> Sistema de diseño listo para implementación. Tokens, tipografía, espaciado, radios, efectos y todos los componentes de interfaz, preparado para uso directo en producto y desarrollo.

---

## Índice

1. [Release Notes](#release-notes)
2. [Logo & Marca](#logo--marca)
3. [Colores](#colores)
4. [Tipografía](#tipografía)
5. [Espaciado](#espaciado)
6. [Border Radius](#border-radius)
7. [Efectos & Sombras](#efectos--sombras)
8. [Motion](#motion)
9. [Componentes](#componentes)
   - [Botones](#botones)
   - [Badges & Tags](#badges--tags)
   - [Inputs & Formularios](#inputs--formularios)
   - [Cards & KPIs](#cards--kpis)
   - [Navegación](#navegación)
   - [Tablas](#tablas)
   - [Iconografía Phosphor](#iconografía-phosphor)
   - [Elementos varios](#elementos-varios)
10. [Grid & Layout](#grid--layout)
11. [Responsive / Mobile](#responsive--mobile)

---

## Release Notes

| Versión | Fecha | Tipo | Detalle |
|---------|-------|------|---------|
| v1.2.4 | 20/03/2026 | RESPONSIVE | Breakpoint mobile oficial con navegación lateral colapsable, overlay y ajuste de espaciados. |
| v1.2.4 | 20/03/2026 | SISTEMA | Sección de **Iconografía Phosphor** con mapeo base para módulos, acciones y navegación. |
| v1.2.3 | 19/03/2026 | COMPONENTE | Variante **Instalar** en ámbar con ícono de descarga dentro del sistema de botones. |
| v1.2.3 | 19/03/2026 | DOCUMENTACIÓN | Uso recomendado de la CTA ámbar para instalación, descarga y activación. |
| v1.2.3 | 17/03/2026 | DOCUMENTACIÓN | Nuevo texto de hero aplicado al DS con enfoque en implementación y desarrollo. |
| v1.2.3 | 17/03/2026 | SISTEMA | Sección de release notes para trazabilidad de cambios. |
| v1.2.1 | 17/03/2026 | COMPONENTE | Fix de la tabla sortable como base de esta versión. |

---

## Logo & Marca

### Nombre de la marca

El nombre siempre se escribe **YiQi** — Y mayúscula, i minúscula, Q mayúscula, i minúscula.  
❌ `yiqi` `YIQI` `YiQI` `Yiqi`  
✅ `YiQi`

### Variantes de logo

| Variante | Fondo | Letras (Y i i) | Símbolo Q |
|----------|-------|----------------|-----------|
| Negativo (dark mode) | `#0A0A0B` / oscuro | `#f2f0ef` / `currentColor` | `#00CCFF` |
| Positivo (light mode) | `#EEECE7` / claro | `#231f20` / `currentColor` | `#009FC7` |
| Topbar universal | `var(--bg-elev)` | `var(--text)` (adapta al tema) | `#00CCFF` / `#009FC7` |

### Reglas de uso

- **Siempre SVG inline** — nunca `<img src="logo.png">` ni `<img src="logo.svg">`.
- El símbolo Q aislado puede usarse como mark cuando el espacio no permite el wordmark completo.
- Espacio libre mínimo: equivalente a la altura del símbolo Q en todos los lados.
- No rotar, deformar, recolorear ni aplicar efectos al logo.

### CTA canónica

```
Reserva tu demo
```

Nunca usar: "Agendá tu demo", "Reservá", "Agenda tu demo" (voseo), ni variantes regionales.

---

## Colores

### CSS Custom Properties — Dark mode (`:root`)

```css
:root {
  /* Backgrounds */
  --bg:         #0a0a0b;
  --bg-elev:    #0f1013;
  --bg-elev-2:  #14161b;
  --bg-soft:    #181b21;

  /* Lines */
  --line:         rgba(255,255,255,.08);
  --line-strong:  rgba(255,255,255,.14);

  /* Text */
  --text:    #f3f5f7;
  --muted:   #98a2b3;
  --muted-2: #6f7785;

  /* Brand / Semantic */
  --cyan:        #00ccff;
  --cyan-soft:   rgba(0,204,255,.10);
  --cyan-soft-2: rgba(0,204,255,.16);
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

  /* Layout */
  --sidebar-w:  308px;
  --topbar-h:   54px;
}
```

### CSS Custom Properties — Light mode (`html[data-theme="light"]`)

```css
html[data-theme="light"] {
  --bg:         #eeece7;
  --bg-elev:    #f6f4ef;
  --bg-elev-2:  #ffffff;
  --bg-soft:    #ece9e2;

  --line:         rgba(0,0,0,.08);
  --line-strong:  rgba(0,0,0,.13);

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

### Paleta de referencia rápida

| Token | Dark | Light | Uso semántico |
|-------|------|-------|---------------|
| `--cyan` | `#00CCFF` | `#009FC7` | Primario, acción, foco, links activos |
| `--green` | `#15D49C` | `#0C9B6D` | Éxito, positivo, métricas favorables |
| `--amber` | `#FFB020` | `#C78000` | Advertencia, instalación, acción secundaria |
| `--red` | `#FF637D` | `#D4485E` | Error, eliminación, alerta crítica |
| `--blue` | `#7AB7FF` | `#347DE6` | Informativo, complementario |
| `--purple` | `#A78BFA` | `#7C3AED` | Accent decorativo |
| `--text` | `#F3F5F7` | `#17191C` | Texto principal |
| `--muted` | `#98A2B3` | `#586170` | Texto secundario |
| `--muted-2` | `#6F7785` | `#7F8896` | Labels, placeholders, ayudas |

---

## Tipografía

### Familias

| Variable | Familia | Uso |
|----------|---------|-----|
| `--sans` | Inter | Todo el texto de interfaz |
| `--mono` | IBM Plex Mono | Labels, tokens, badges, IDs, valores numéricos, atajos |

```html
<!-- Google Fonts import -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

### Escala — Inter (UI sans)

| Tamaño | Peso | Letter-spacing | Uso |
|--------|------|---------------|-----|
| 40px | 700 | `-.04em` | Hero title |
| 30px | 700 | `-.04em` | Placeholder / page title |
| 28px | 700 | `-.04em` | KPI value |
| 26px | 700 | `-.03em` | Section title (DS) |
| 24px | 700 | `-.03em` | Section hero |
| 18px | 700 | `-.02em` | Card title destacado |
| 14px | 700 | — | Panel title |
| 13px | 600 | — | Module title, botones |
| 13px | 400 | — | Body, celdas de tabla |
| 12px | 400 | — | Meta text (muted) |
| 11px | 400 | — | Helper / caption (muted) |

### Escala — IBM Plex Mono (labels, tokens, badges)

| Tamaño | Peso | Letter-spacing | Transform | Uso |
|--------|------|---------------|-----------|-----|
| 10px | 700 | `.16em` | uppercase | Kicker / section label (cyan) |
| 10px | 700 | `.15em` | uppercase | Nav section label (muted-2) |
| 11px | 600 | — | — | Delta / KPI change |
| 10px | 700 | — | — | ID / código (INV-2024-0047) |
| 10px | 600 | — | — | Keyboard shortcut (⌘K) |
| 9px | 700 | `.12em` | uppercase | Topbar label ("ERP") |

---

## Espaciado

Base de **4px**. Usar múltiplos de 4 para todo `padding`, `margin` y `gap`.

| Valor | Uso típico |
|-------|-----------|
| 4px | Gap mínimo entre íconos y texto inline |
| 6px | Padding en badges pequeños |
| 8px | Gap entre elementos de formulario |
| 10px | Padding de badges, gap en chips |
| 12px | Gap entre cards, padding de nav items |
| 14px | Padding horizontal en inputs y celdas |
| 16px | Padding interno de cards, botones large |
| 18px | Sección gap interno |
| 20px | Content padding mobile |
| 24px | Separación de subsecciones |
| 28px | Padding de hero y topbar desktop |
| 32px | Separación mayor entre secciones |
| 36–40px | Content padding desktop |
| 64–80px | Separación entre secciones de DS |

### Tokens de layout

| Token | Valor | Nota |
|-------|-------|------|
| `--sidebar-w` | `308px` | Ancho sidebar expandido |
| `--topbar-h` | `54px` | Altura topbar |
| Sidebar colapsado | `88px` | Solo íconos |
| Content padding desktop | `36–40px` | `.ds-content` |
| Content padding mobile | `20–22px` | `<980px` |
| Card gap | `12px` | `gap` en grids |
| Section gap | `14–18px` | Gap interno de sección |

---

## Border Radius

```css
:root {
  --radius-xs:   6px;   /* Tags, checkboxes, elementos pequeños */
  --radius-sm:   10px;  /* Nav items, botones small, tooltips */
  --radius:      14px;  /* Inputs, botones default, swatches */
  --radius-md:   16px;  /* Module items, integration cards */
  --radius-lg:   18px;  /* Cards principales */
  --radius-xl:   24px;  /* Cards destacadas, modales */
  --radius-pill: 999px; /* Badges, tags, switches, pills */
}
```

| Token | Valor | Usar en |
|-------|-------|---------|
| `--radius-xs` | 6px | Checkboxes, code chips, elementos miniatura |
| `--radius-sm` | 10px | Botón small, nav items, tooltips, module icons |
| `--radius` | 14px | Inputs, botones default, swatches, effect cards |
| `--radius-md` | 16px | Module items, integration cards, table toolbar |
| `--radius-lg` | 18px | Cards y table cards principales |
| `--radius-xl` | 24px | Cards destacadas, modales grandes |
| `--radius-pill` | 999px | Badges, tags, switches, pills, topbar pills |

---

## Efectos & Sombras

```css
/* Glow cyan — foco y acento en dark/light */
--glow: 0 0 0 1px rgba(0,204,255,.14) inset;   /* dark */
--glow: 0 0 0 1px rgba(0,159,199,.14) inset;   /* light */

/* Elevation shadow — modales, dropdowns */
box-shadow: 0 4px 14px rgba(0,0,0,.25);

/* Cyan accent shadow — hover en btn ámbar */
box-shadow: 0 10px 30px rgba(255,176,32,.22);

/* Off-canvas sidebar shadow */
box-shadow: 22px 0 40px rgba(0,0,0,.28);
```

### Focus state

```css
.input:focus,
.textarea:focus {
  border-color: rgba(0,204,255,.28);
  box-shadow: var(--glow);
}
```

### Live dot (indicador en tiempo real)

```css
.live-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(21,212,156,.10);
  animation: pulse 2s infinite;
}
@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
```

---

## Motion

| Nombre | Especificación | Uso recomendado |
|--------|---------------|-----------------|
| Fade in | `opacity 0→1 + translateY(4px→0)` | Aparición de paneles y cards |
| Scale pulse | `scale 1→1.12→1` | Confirmaciones, KPI highlights |
| Slide in | `translateX(-6px→0) + opacity` | Menús laterales, drawers |
| Sidebar slide | `transform .24s ease` | Nav off-canvas mobile |
| General transition | `all .18s ease` | Hover de botones, inputs, nav items |
| Thumb switch | `transform .2s ease` | Toggle switch |

```css
/* Transición base para interactivos */
transition: all .18s ease;

/* Off-canvas nav */
transition: transform .24s ease;
```

---

## Componentes

### Botones

#### Variantes disponibles

```html
<!-- Default -->
<button class="btn">Acción</button>

<!-- Primary (cyan) -->
<button class="btn btn-primary">Guardar cambios</button>

<!-- Amber / Instalación -->
<button class="btn btn-amber">Instalar módulo</button>

<!-- Ghost -->
<button class="btn btn-ghost">Cancelar</button>

<!-- Danger -->
<button class="btn btn-danger">Eliminar</button>
```

#### Tamaños

```html
<button class="btn btn-sm">Pequeño</button>
<button class="btn">Default</button>
<button class="btn btn-lg">Grande</button>
```

| Clase | Padding | Font-size | Radius |
|-------|---------|-----------|--------|
| `.btn-sm` | `7px 12px` | 12px | `--radius-sm` |
| `.btn` (default) | `10px 16px` | 13px | `--radius` |
| `.btn-lg` | `13px 20px` | 14px | 16px |

#### CSS de referencia

```css
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 16px; border-radius: var(--radius);
  border: 1px solid var(--line); background: var(--bg-elev-2);
  color: var(--text); font: 600 13px var(--sans);
  cursor: pointer; transition: all .18s ease;
}
.btn-primary { background: var(--cyan-soft); border-color: rgba(0,204,255,.28); color: var(--cyan); }
.btn-amber   { background: linear-gradient(180deg,#ffb020,#d89200); border-color: rgba(255,176,32,.28); color: #1a1200; }
.btn-ghost   { background: transparent; border-color: transparent; color: var(--muted); }
.btn-danger  { background: rgba(255,99,125,.08); border-color: rgba(255,99,125,.2); color: var(--red); }
```

---

### Badges & Tags

#### Badges (con dot de color)

```html
<span class="badge badge-cyan">Activo</span>
<span class="badge badge-green">Completado</span>
<span class="badge badge-amber">Pendiente</span>
<span class="badge badge-red">Error</span>
<span class="badge badge-muted">Inactivo</span>
```

| Clase | Color texto | Fondo | Uso |
|-------|------------|-------|-----|
| `badge-cyan` | `--cyan` | `--cyan-soft` | Estado activo, resaltado |
| `badge-green` | `--green` | `rgba(21,212,156,.08)` | Éxito, completado |
| `badge-amber` | `--amber` | `rgba(255,176,32,.08)` | Advertencia, pendiente |
| `badge-red` | `--red` | `rgba(255,99,125,.08)` | Error, crítico |
| `badge-muted` | `--muted` | `--bg-soft` | Neutral, inactivo |

#### Tags (pill cyan)

```html
<span class="tag">Módulo activo</span>
```

#### Placeholder tags

```html
<span class="ph-tag">Sin asignar</span>
```

#### Status pills (tablas)

```html
<span class="status-ok">OK</span>
<span class="status-warn">Advertencia</span>
<span class="status-err">Error</span>
```

---

### Inputs & Formularios

#### Input de texto

```html
<!-- Default -->
<div class="input-wrap">
  <input class="input" type="text" placeholder="Buscar..." />
</div>

<!-- Con ícono -->
<div class="input-wrap">
  <svg class="input-icon">...</svg>
  <input class="input input-with-icon" type="text" placeholder="Buscar..." />
</div>

<!-- Con atajo de teclado -->
<div class="input-wrap">
  <input class="input input-with-icon" type="text" placeholder="Buscar..." />
  <div class="input-shortcut">⌘K</div>
</div>
```

#### Textarea

```html
<textarea class="textarea" placeholder="Descripción..."></textarea>
```

#### Select

```html
<select class="select">
  <option>Opción 1</option>
</select>
```

#### Toggle switch

```html
<label class="switch-label">
  <div class="switch-track on">
    <div class="switch-thumb"></div>
  </div>
  <span class="switch-text">Activado</span>
</label>
```

#### Checkbox

```html
<label class="checkbox-label">
  <div class="checkbox checked">
    <svg><!-- check icon --></svg>
  </div>
  Recordar sesión
</label>
```

#### CSS clave

```css
.input {
  width: 100%; height: 40px; border-radius: var(--radius);
  border: 1px solid var(--line); background: var(--bg-elev-2);
  padding: 0 14px; color: var(--text); font: 500 13px var(--sans);
}
.input:focus { border-color: rgba(0,204,255,.28); box-shadow: var(--glow); }
```

---

### Cards & KPIs

#### Card default

```html
<div class="card">
  <div class="card-kicker">MÓDULO</div>
  <div class="card-value">$2,847,391</div>
  <div class="card-delta delta-up">+18.4% vs mes anterior</div>
</div>
```

#### Card con acento cyan

```html
<div class="card-accent">
  <div class="card-kicker">DESTACADO</div>
  <div style="font-size:18px;font-weight:700;margin-top:10px">Titulo</div>
  <div style="font-size:13px;color:var(--muted);margin-top:10px">Descripción del componente.</div>
</div>
```

#### Grid de KPIs (4 columnas)

```html
<div class="kpi-grid">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

| Clase | Descripción |
|-------|-------------|
| `.card` | Card base — borde `--line`, fondo `--bg-elev-2`, radio `--radius-lg` |
| `.card-accent` | Card destacada — borde cyan, glow inset |
| `.card-kicker` | Label superior mono 10px uppercase muted-2 |
| `.card-value` | Valor KPI 30px / 700 / ls `-.04em` |
| `.card-delta` | Variación KPI 11px / 600 mono |
| `.delta-up` | Color `--green` |
| `.delta-down` | Color `--amber` |

---

### Navegación

#### Nav item activo (sidebar)

```css
.ds-nav-item.active { background: var(--cyan-soft); color: var(--cyan); }
```

#### Módulo con submenu

```html
<div class="module-demo open">
  <div class="module-head-demo">
    <div class="module-icon"><svg>...</svg></div>
    <div>
      <div class="module-title-text">Compras</div>
      <div class="module-meta-text">12 submódulos</div>
    </div>
    <span class="module-count-badge">12</span>
    <span class="chev">›</span>
  </div>
  <div class="module-body-demo">
    <div class="sub-item-demo active">
      <svg>...</svg> Órdenes de compra
      <span class="sub-count">3</span>
    </div>
  </div>
</div>
```

#### Nav section label

```css
.ds-nav-label {
  font: 700 9px var(--mono); letter-spacing: .15em;
  text-transform: uppercase; color: var(--muted-2);
}
```

---

### Tablas

#### Tabla base

```html
<table class="table-demo">
  <thead>
    <tr>
      <th>ID</th>
      <th>Módulo</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="mono-cell">INV-2024-0047</td>
      <td>Compras</td>
      <td><span class="status-ok">OK</span></td>
    </tr>
  </tbody>
</table>
```

#### Tabla sortable (con buscador)

```html
<div class="table-card-demo">
  <div class="table-card-top">
    <div>
      <div class="table-card-title">Nombre de la tabla</div>
      <div class="table-card-sub">Subtítulo o descripción</div>
    </div>
    <div class="table-toolbar-search">
      <svg><!-- search icon --></svg>
      <input placeholder="Buscar..." />
    </div>
  </div>
  <table class="table-demo table-sortable">
    <thead>...</thead>
    <tbody>...</tbody>
  </table>
  <div class="table-empty">Sin resultados para esta búsqueda.</div>
</div>
```

| Clase | Descripción |
|-------|-------------|
| `.table-sortable th` | Headers clickeables con cursor pointer |
| `.table-sortable th::after` | Indicador `↕` por defecto |
| `.sorted-asc::after` | `↑` en cyan |
| `.sorted-desc::after` | `↓` en cyan |
| `.table-empty.show` | Mensaje visible cuando no hay resultados |
| `.mono-cell` | Celda mono 12px / 500 / muted |

---

### Iconografía Phosphor

```html
<!-- Import via CDN -->
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">

<!-- Uso -->
<i class="ph ph-house"></i>
<i class="ph ph-chart-line"></i>
<i class="ph ph-shopping-cart"></i>
```

#### Tamaños estándar

| Contexto | Tamaño | Clase de tamaño |
|----------|--------|-----------------|
| Ícono en sidebar / módulo | 16px | `font-size: 16px` |
| Ícono en icon box (módulo) | 16px SVG (`width:16px`) | — |
| Ícono en topbar | 16px | — |
| Ícono en botones | 15px SVG | `.btn svg` |
| Ícono de integración | 18px SVG | — |

#### Mapeo recomendado por módulo

| Ícono Phosphor | Módulo / Uso |
|----------------|-------------|
| `ph-house` | Inicio / Dashboard |
| `ph-chart-line` | Reportes / Analytics |
| `ph-shopping-cart` | Compras |
| `ph-package` | Inventario / Stock |
| `ph-receipt` | Facturación |
| `ph-users` | CRM / Clientes |
| `ph-factory` | Producción |
| `ph-truck` | Logística / Envíos |
| `ph-gear` | Configuración |
| `ph-bell` | Notificaciones |
| `ph-magnifying-glass` | Búsqueda |
| `ph-arrow-down-to-line` | Descarga / Instalar |
| `ph-arrow-right` | Navegación / CTA |
| `ph-check` | Confirmación |
| `ph-x` | Cerrar / Cancelar |

---

### Elementos varios

#### Avatar

```html
<div class="avatar">SM</div>
```

```css
.avatar {
  width: 32px; height: 32px; border-radius: 50%;
  background: var(--cyan-soft); color: var(--cyan);
  border: 1px solid rgba(0,204,255,.24);
  font: 700 11px var(--mono);
  display: grid; place-items: center;
}
```

#### Alert badge (con dot de notificación)

```html
<div class="alert-badge-demo">
  <svg><!-- bell icon --></svg>
  <div class="alert-badge-dot">3</div>
</div>
```

#### Tooltip

```html
<div class="tooltip-demo">
  <div class="tooltip-box">Texto del tooltip</div>
</div>
```

#### Integration card

```html
<div class="integration-card">
  <div style="display:flex;align-items:center;gap:12px">
    <div class="integration-icon"><svg>...</svg></div>
    <div>
      <div class="integration-name">Nombre integración</div>
      <div class="integration-meta">Descripción corta</div>
    </div>
  </div>
  <button class="btn btn-sm">Conectar</button>
</div>
```

#### Search bar

```html
<div class="search-demo">
  <svg><!-- search icon --></svg>
  <span>Buscar en el sistema...</span>
</div>
```

#### Code chip (inline)

```html
<span class="code-chip">--cyan</span>
```

#### Live dot

```html
<span class="live-dot"></span>
```

#### Divider

```html
<div class="ds-divider"></div>
```

---

## Grid & Layout

### Estructura de página

```
┌─────────────────────────────────────────────────────┐
│  TOPBAR  (56px sticky, z-index: 99)                  │
├────────────────┬────────────────────────────────────┤
│  SIDEBAR NAV   │  CONTENT                           │
│  (240px sticky │  (padding: 36px 40px 80px)         │
│   top: 56px)   │  max-width: 1100px                 │
│                │                                    │
└────────────────┴────────────────────────────────────┘
```

```css
.ds-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: calc(100vh - 56px);
}
```

### Grids de contenido

| Clase | Definición | Uso |
|-------|-----------|-----|
| `.token-grid` | `repeat(auto-fill, minmax(160px, 1fr))` | Swatches de color |
| `.token-grid-2` | `repeat(auto-fill, minmax(260px, 1fr))` | Cards de dos columnas |
| `.token-grid-3` | `repeat(3, 1fr)` | Tres columnas fijas |
| `.kpi-grid` | `repeat(4, 1fr)` | KPIs en fila |

---

## Responsive / Mobile

### Breakpoints

| Breakpoint | Comportamiento |
|-----------|----------------|
| `> 1200px` | Layouts de 3 col / 4 KPIs completos |
| `≤ 1200px` | `.token-grid-3`, `.kpi-grid`, `.icon-grid` → 2 columnas |
| `≤ 980px` | Sidebar off-canvas, layout 1 columna |
| `≤ 720px` | Espaciados reducidos, topbar pill oculto, grids → 1 col |

### Sidebar off-canvas (≤ 980px)

```css
@media (max-width: 980px) {
  .ds-nav {
    position: fixed;
    top: 56px; left: 0;
    width: min(290px, calc(100vw - 32px));
    height: calc(100dvh - 56px);
    transform: translateX(-108%);
    transition: transform .24s ease;
    z-index: 90;
    box-shadow: 22px 0 40px rgba(0,0,0,.28);
  }
  .ds-nav.open { transform: translateX(0); }
}
```

### Overlay (mobile)

```css
.ds-overlay {
  display: none; position: fixed; inset: 0;
  background: rgba(0,0,0,.45); z-index: 80;
  backdrop-filter: blur(2px);
}
.ds-overlay.show { display: block; }
```

### Toggle de navegación mobile

```html
<button class="mobile-menu-btn" onclick="toggleNav()">
  <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
</button>
```

```javascript
function toggleNav() {
  document.querySelector('.ds-nav').classList.toggle('open');
  document.querySelector('.ds-overlay').classList.toggle('show');
}
function closeNav() {
  document.querySelector('.ds-nav').classList.remove('open');
  document.querySelector('.ds-overlay').classList.remove('show');
}
```

### Mobile frame fix (v1.2.4.1)

```css
html, body { overflow-x: hidden; }
.ds-layout, .ds-content, .card, .table-card-demo,
.token-grid, .token-grid-2, .token-grid-3, .kpi-grid {
  min-width: 0;
}
img, svg { max-width: 100%; height: auto; }
```

---

## Convenciones de código

### Interruptores de tema

```html
<html data-theme="dark"> <!-- o "light" -->
```

```javascript
function toggleTheme() {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark';
}
```

### Versioning de archivos

```
YiQi_[NombrePieza]_DS.html           ← naming en Drive
[proyecto]-v1_0_0.html                ← local (puntos → guiones bajos)
```

### Dependencias inline (siempre embebidas)

- Google Fonts (Inter + IBM Plex Mono)
- Phosphor Icons CDN (`@phosphor-icons/web@2.1.1`)
- Chart.js `4.4.0` (cuando se usan gráficos)
- Logo SVG — siempre inline, nunca como `<img>`

---

## Checklist de implementación

- [ ] `data-theme="dark"` en `<html>` como estado inicial
- [ ] Variables CSS completas en `:root` y `html[data-theme="light"]`
- [ ] Logo YiQi en SVG inline (nunca `<img>`)
- [ ] Topbar sticky con logo + toggle de tema + botón hamburguesa mobile
- [ ] Sidebar con clase `.open` y overlay con clase `.show`
- [ ] Fuentes Inter + IBM Plex Mono cargadas
- [ ] `overflow-x: hidden` en `html, body`
- [ ] `min-width: 0` en containers del grid
- [ ] Colores hardcodeados reemplazados por custom properties
- [ ] CTA canónica: **"Reserva tu demo"** (sin voseo)
- [ ] Nombre de marca: **YiQi** (Y mayúscula, Q mayúscula)

---

*YiQi ERP · Design System v1.2.4 · Última actualización: 20/03/2026*
