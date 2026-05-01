# YiQi Design System — imagen-1

Repositorio de referencia de diseño para el equipo de desarrollo de **YiQi ERP**. Contiene la hoja de estilos canónica, la documentación de componentes y las guías de implementación.

![Version](https://img.shields.io/badge/version-1.2.5-00ccff?style=flat-square)
![Status](https://img.shields.io/badge/status-stable-green?style=flat-square)
![License](https://img.shields.io/badge/license-proprietary-blue?style=flat-square)

---

## Archivos principales

| Archivo | Para quién | Propósito |
|---------|-----------|-----------|
| `styles.css` | Desarrollador | Hoja de estilos completa — copiar al proyecto |
| `yiqi-design.md` | IA / Claude | Guía maestra de componentes y patrones v1.2.5 |
| `execution.md` | IA / Claude | Checklist de implementación paso a paso |
| `CHANGELOG.md` | Todos | Historial de cambios por versión |
| `version.json` | CI / scripts | Versión legible por máquina |

---

## Estructura del repositorio

```
yiqi-imagen-1/
├── README.md                     # Este archivo
├── CHANGELOG.md                  # Historial de cambios
├── version.json                  # { ds_version: "1.2.5" }
│
├── styles.css                    # ★ Hoja de estilos principal v1.2.5
├── yiqi-design.md                # ★ Guía maestra de diseño v1.2.5
├── execution.md                  # ★ Guía de ejecución v1.2.5
│
├── api-docs.html                 # Documentación de API (HTML interactivo)
├── YiQi API Docs.html            # Documentación de API (versión alternativa)
│
├── Fuentes/
│   ├── LOGO YiQi 100x65 NEGATIVO.svg   # Logo negativo (dark mode)
│   ├── iAready.svg                      # Ícono iAready
│   └── archive/                         # Versiones anteriores (solo referencia)
│       ├── YiQi_DS_v1_2_4.md
│       ├── YiQi_DS_v1_2_4_Recipe.md
│       └── yiqi-design-system-v1.2.4.html
│
└── docs/                         # Guías técnicas para el equipo
    ├── application-best-practices.md
    ├── copilot-global-guidelines.md
    ├── pr-checklist.md
    ├── testing-jest.md
    ├── yiqi-api.md
    ├── yiqi-login.md
    └── archive/
        └── yiqi-design-v1.2.4.md
```

---

## Uso rápido

### 1. Incorporar estilos al proyecto

```html
<!-- Opción A: archivo local -->
<link rel="stylesheet" href="./styles.css">

<!-- Opción B: copiar contenido inline en <style> -->
```

### 2. Activar tema

```html
<!-- El tema por defecto es "system" (sigue la preferencia del OS) -->
<body data-theme="system">

<!-- Forzar dark o light -->
<body data-theme="dark">
<body data-theme="light">
```

El toggle tiene 3 estados: `"dark"` → `"system"` → `"light"`.

### 3. Fondos

**Dashboards y apps** — solo radiales (sin grilla):
```html
<body data-theme="system">
  <!-- El fondo radial se aplica automáticamente desde styles.css -->
```

**Marketing y landing** — radiales + grilla 52×52px (Variante B):
```css
body::after {
  content: "";
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 52px 52px;
}
```

---

## Tokens principales — v1.2.5

### Backgrounds
```css
/* Dark */
--bg: #0c0c0e          /* Superficie base */
--bg-elev: #111114     /* Cards y paneles */
--bg-elev-2: #18181c   /* Modales, dropdowns */
--bg-soft: rgba(255,255,255,.04)

/* Light */
--bg: #f5f4f0
--bg-elev: #eeece7
--bg-elev-2: #e6e4df
--bg-soft: rgba(0,0,0,.04)
```

### Tipografía y semántica
```css
--text: #f0f1f3        /* Texto principal */
--muted: #8a8d94       /* Texto secundario */
--muted-2: #5a5d66     /* Texto terciario */

--cyan:   #00ccff      /* Acento principal */
--green:  #00c48c      /* Success */
--amber:  #f6a623      /* Warning */
--red:    #f25f5c      /* Danger */
--purple: #a78bfa      /* Secundario */
```

### Geometría
```css
--radius: 10px    --radius-sm: 7px    --radius-xs: 5px
--sidebar-w: 240px    --topbar-h: 56px
```

---

## Filosofía borderless

Los elementos de display usan `box-shadow` en lugar de `border`. El único `border` aceptable es en inputs en estado de foco (`--glow`).

```css
/* ✅ Correcto */
box-shadow: 0 0 0 1px var(--border);

/* ❌ Evitar */
border: 1px solid var(--border);
```

---

## Documentación de referencia

| Documento | Contenido |
|-----------|-----------|
| `yiqi-design.md` | Componentes, tokens, patrones, layout |
| `execution.md` | Pasos de implementación, checklist, anti-patrones |
| `docs/yiqi-api.md` | API endpoints y autenticación |
| `docs/yiqi-login.md` | Flujo de login y sesión |
| `docs/application-best-practices.md` | Convenciones de código |
| `docs/copilot-global-guidelines.md` | Guías para IA/Copilot |
| `docs/pr-checklist.md` | Checklist de Pull Request |
| `docs/testing-jest.md` | Testing con Jest |

---

## Versionado

```
MAJOR.MINOR.PATCH
1.2.5
│ │ └─ Bug fixes / refinamientos (retrocompatible)
│ └─── Nuevos componentes / features (retrocompatible)
└───── Cambios breaking (requiere migración)
```

| Versión | Estado | Cambios principales |
|---------|--------|-------------------|
| **1.2.5** | ✅ Estable | Tokens corregidos, borderless, toggle 3 estados, yiqi-runtime.js |
| 1.2.4 | 🏛️ Archive | Mobile fix, Phosphor icons, tabla sortable |

---

**Última actualización:** Mayo 2026
**Versión DS:** 1.2.5
**Estado:** ✅ Stable
