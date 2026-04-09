# YiQi Design System — Receta v1.2.4

> Referencia canónica para implementación de UI en productos YiQi ERP.  
> Fuente: `yiqi-design-system-v1.2.4-mobile-phosphor-fix.html`

---

## 1 · Identidad de marca

| Elemento | Valor |
|---|---|
| Nombre del producto | **YiQi** (Y mayúscula, i minúscula, Q mayúscula) |
| CTA canónico | **"Reserva tu demo"** |
| Copy | Español neutro — sin voseo |

### Logo

- Siempre embebido como SVG inline — nunca como `<img>`
- **Logo negativo** (topbar oscuro / dark mode): `cls-2 fill #f2f0ef` · `cls-3 fill #0cf`
- **Logo positivo** (fondo claro / light mode): `cls-2 fill #231f20` · `cls-3 fill #0cf`
- Símbolo Q aislado: `40px` sidebar expandido / `28px` sidebar colapsado

---

## 2 · CSS Custom Properties

### 2.1 Backgrounds

```css
/* Dark mode (default) */
--bg:         #0a0a0b;
--bg-elev:    #0f1013;
--bg-elev-2:  #14161b;
--bg-soft:    #181b21;

/* Light mode */
--bg:         #eeece7;
--bg-elev:    #f6f4ef;
--bg-elev-2:  #ffffff;
--bg-soft:    #ece9e2;
```

### 2.2 Líneas / Bordes

```css
/* Dark */
--line:         rgba(255,255,255,.08);
--line-strong:  rgba(255,255,255,.14);

/* Light */
--line:         rgba(0,0,0,.08);
--line-strong:  rgba(0,0,0,.13);
```

### 2.3 Texto

```css
/* Dark */
--text:    #f3f5f7;
--muted:   #98a2b3;
--muted-2: #6f7785;

/* Light */
--text:    #17191c;
--muted:   #586170;
--muted-2: #7f8896;
```

### 2.4 Colores de marca y semánticos

```css
/* Acento principal */
--cyan:        #00ccff;       /* light: #009fc7 */
--cyan-soft:   rgba(0,204,255,.10);
--cyan-soft-2: rgba(0,204,255,.16);

/* Semánticos */
--green:  #15d49c;   /* light: #0c9b6d */  /* Success */
--amber:  #ffb020;   /* light: #c78000 */  /* Warning */
--red:    #ff637d;   /* light: #d4485e */  /* Danger  */
--blue:   #7ab7ff;   /* light: #347de6 */  /* Info    */
--purple: #a78bfa;   /* light: #7c3aed */  /* Accent  */
```

### 2.5 Efectos

```css
--glow: 0 0 0 1px rgba(0,204,255,.14) inset;
```

### 2.6 Tipografía

```css
--sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
--mono: 'IBM Plex Mono', ui-monospace, 'SFMono-Regular', monospace;
```

### 2.7 Border Radius

```css
--radius-xs:   6px;    /* Checkboxes, chips pequeños */
--radius-sm:   10px;   /* Sub-items, icon buttons    */
--radius:      14px;   /* Base — Botones, inputs, tags */
--radius-md:   16px;   /* Nav items, módulos          */
--radius-lg:   18px;   /* Cards, panels, tables       */
--radius-xl:   24px;   /* Modales, placeholders       */
--radius-pill: 999px;  /* Badges, avatares, pills     */
```

### 2.8 Layout

```css
--sidebar-w: 308px;
--topbar-h:  54px;
```

---

## 3 · Tipografía

Dos familias:
- **Inter** — texto de interfaz (headings, body, labels)
- **IBM Plex Mono** — tokens, badges, valores numéricos, código

### Escala Inter (UI sans)

| Uso | Tamaño | Peso | Letter-spacing |
|---|---|---|---|
| Hero / Dashboard | 40px | 700 | -0.04em |
| Título sección | 28px | 700 | -0.03em |
| Subtítulo | 20px | 600 | -0.02em |
| Card heading | 16px | 600 | -0.01em |
| Body | 14px | 400 | 0 |
| Label small | 12px | 500 | 0 |
| Micro | 11px | 400/500 | 0 |

### Escala IBM Plex Mono

| Uso | Tamaño | Peso |
|---|---|---|
| Kicker / etiqueta de sección | 10–11px | 700 |
| Token / hex value | 10–11px | 500 |
| Valor numérico en tabla | 12–13px | 600 |

**Kickers:** `font: 700 10px var(--mono); letter-spacing: .16em; text-transform: uppercase; color: var(--cyan)`

---

## 4 · Espaciado

Siempre múltiplos de 4.

`4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 28 · 32 · 36 · 40`

---

## 5 · Efectos y sombras

```css
/* Glow ring — cards accent, inputs focus, módulos abiertos */
box-shadow: 0 0 0 1px rgba(0,204,255,.14) inset;

/* Input focus state */
border-color: rgba(0,204,255,.28);
box-shadow: var(--glow);

/* Nav item activo */
background: linear-gradient(180deg, var(--cyan-soft), rgba(0,204,255,.06));

/* Panel lateral placeholder */
background: linear-gradient(180deg, rgba(0,204,255,.05), transparent);
```

> Regla: no usar `box-shadow` de desplazamiento (offset). Solo inset ring para depth.

---

## 6 · Motion

| Nombre | Duration | Easing | Uso |
|---|---|---|---|
| Micro transition | 180ms | ease | Botones, inputs, borders, bg hover |
| Chevron rotate | 180ms | ease | Accordion open/close |
| Fade in up | 400ms | ease | Carga inicial de cards y módulos |
| Live pulse | 2s infinite | ease | Indicador de estado en tiempo real |

```css
/* Fade in up */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Live pulse */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: .45; }
}
```

---

## 7 · Componentes

### 7.1 Botones

```css
/* Base */
.btn {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 10px 16px; border-radius: var(--radius);
  border: 1px solid transparent; font: 600 13px var(--sans);
  transition: all 180ms ease; cursor: pointer;
}

/* Primary (Cyan) */
.btn-primary {
  background: var(--cyan); color: #0a0a0b;
  border-color: var(--cyan);
}

/* Secondary */
.btn-secondary {
  background: var(--bg-elev-2); color: var(--text);
  border-color: var(--line-strong);
}

/* Ghost */
.btn-ghost {
  background: transparent; color: var(--muted);
  border-color: var(--line);
}

/* Amber (instalación / descarga operativa) */
.btn-amber {
  background: var(--amber); color: #0a0a0b;
  border-color: var(--amber);
}

/* Danger */
.btn-danger {
  background: var(--red); color: #fff;
  border-color: var(--red);
}
```

### 7.2 Badges / Tags

```css
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 3px 9px; border-radius: var(--radius-pill);
  font: 600 11px var(--mono); border: 1px solid transparent;
}
.badge-cyan   { background: var(--cyan-soft);              color: var(--cyan); border-color: rgba(0,204,255,.20); }
.badge-green  { background: rgba(21,212,156,.10);          color: var(--green); }
.badge-amber  { background: rgba(255,176,32,.10);          color: var(--amber); }
.badge-red    { background: rgba(255,99,125,.10);          color: var(--red); }
.badge-muted  { background: var(--bg-soft); color: var(--muted); border-color: var(--line); }
```

### 7.3 Inputs

```css
.input {
  width: 100%; padding: 10px 12px;
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  background: var(--bg); color: var(--text);
  font: 400 14px var(--sans);
  transition: border-color 180ms ease, box-shadow 180ms ease;
}
.input:focus {
  outline: none;
  border-color: rgba(0,204,255,.28);
  box-shadow: var(--glow);
}
.input::placeholder { color: var(--muted-2); }
```

### 7.4 Cards / KPIs

```css
.card {
  padding: 20px; border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--bg-elev-2);
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
.kpi-delta-negative { color: var(--red); }
```

### 7.5 Tablas

```css
.table { width: 100%; border-collapse: collapse; }
.table th {
  font: 700 10px var(--mono); letter-spacing: .12em;
  text-transform: uppercase; color: var(--muted-2);
  padding: 10px 14px; background: var(--bg-elev);
  border-bottom: 1px solid var(--line);
  text-align: left;
}
.table td {
  padding: 12px 14px; font: 400 13px var(--sans);
  border-bottom: 1px solid var(--line); color: var(--text);
}
.table tr:last-child td { border-bottom: none; }
.table tr:hover td { background: var(--bg-soft); }
```

Sorting: indicador en header, asc/desc en `var(--cyan)` para feedback inmediato.

### 7.6 Avatar

```css
.avatar {
  width: 32px; height: 32px; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--cyan-soft); color: var(--cyan);
  border: 1px solid rgba(0,204,255,.24);
  font: 700 11px var(--mono);
}
```

### 7.7 Tooltip

```css
.tooltip-box {
  padding: 6px 10px;
  border: 1px solid var(--line-strong);
  background: var(--bg-elev-2);
  border-radius: var(--radius-sm);
  font: 500 11px var(--sans); color: var(--text);
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(0,0,0,.25);
}
```

### 7.8 Live indicator

```css
.live-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--green);
  box-shadow: 0 0 0 4px rgba(21,212,156,.10);
  animation: pulse 2s infinite;
}
```

---

## 8 · Layout shell

### Estructura base

```
sticky topbar (54px)
  └─ inline SVG logo + version pill + dark/light toggle
sidebar (308px, scroll-spy nav)
  └─ off-canvas en mobile (breakpoint: 980px)
main content (two-column, max-width 1100px)
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

### Sidebar / Nav

```css
.sidebar {
  width: var(--sidebar-w);
  position: sticky; top: 56px;
  height: calc(100vh - 56px);
  overflow-y: auto;
  border-right: 1px solid var(--line);
  padding: 24px 16px;
}
/* Mobile */
@media (max-width: 980px) {
  .sidebar {
    position: fixed; inset: 0; left: -100%; z-index: 98;
    transition: left 180ms ease;
  }
  .sidebar.open { left: 0; }
}
```

---

## 9 · Iconografía

Biblioteca: **Phosphor Icons** `@phosphor-icons/web@2.1.1`

```html
<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">
```

Uso: `<i class="ph ph-[nombre-icono]"></i>`

### Set base recomendado

| Ícono | Clase | Uso |
|---|---|---|
| Configuración | `ph-gear-six` | Settings |
| Seguridad | `ph-shield-check` | Auth / permisos |
| Analytics | `ph-chart-line-up` | Reportes |
| Auditoría | `ph-list-magnifying-glass` | Logs |
| Testing | `ph-flask` | QA |
| Ajustes | `ph-sliders` | Filtros |
| Lanzamientos | `ph-rocket` | Releases |
| Capacitación | `ph-graduation-cap` | Training |
| Soporte | `ph-headset` | Help desk |
| Facturación | `ph-calculator` | Finanzas |

---

## 10 · Uso semántico de color

| Color | Token | Uso |
|---|---|---|
| Cyan | `--cyan` | Métrica principal, acento, CTA primario |
| Green | `--green` | Estado positivo, éxito, incremento |
| Amber | `--amber` | Alerta, advertencia, instalación |
| Red | `--red` | Error, peligro, decremento |
| Blue | `--blue` | Información, contexto |
| Purple | `--purple` | Acento secundario |

---

## 11 · Imports mínimos

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

## 12 · Reglas críticas de implementación

1. **SVG labels en charts** — deben vivir dentro de elementos `<text>` con `transform="rotate()"`. No usar `<div>`/`<span>` como labels: se cortan en dark mode.
2. **Colores hardcodeados** — reemplazar siempre por custom properties. Nunca `fill="#17191c"` o `rgba(0,0,0,.1)` dentro de SVGs o Chart.js.
3. **Dark/light toggle** — implementar via `data-theme="dark|light"` en `<html>`. Las variables CSS se redefinen con `html[data-theme="light"] { ... }`.
4. **Archivos self-contained** — fuentes, scripts, estilos y SVGs embebidos inline. Sin dependencias externas en el archivo final.
5. **Convención de nombres** — `[proyecto]-v1_0_0.html` (puntos → guiones bajos).
6. **Espaciado** — siempre múltiplos de 4. Nunca valores arbitrarios.
7. **No box-shadow con offset** — solo inset ring (`var(--glow)`) para depth.
8. **Logo siempre SVG inline** — nunca `<img src="logo.png">`.

---

*YiQi ERP · Design System v1.2.4 · Generado para uso en aplicaciones*
