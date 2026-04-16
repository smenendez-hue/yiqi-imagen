# YiQi Design System

Sistema de diseño oficial de **YiQi ERP** — la fuente única de verdad para interfaces, componentes y patrones visuales de todos los productos YiQi.

![Version](https://img.shields.io/badge/version-1.2.4-00ccff?style=flat-square)
![Status](https://img.shields.io/badge/status-stable-green?style=flat-square)
![License](https://img.shields.io/badge/license-proprietary-blue?style=flat-square)

---

## 📋 Contenido

- [Visión general](#visión-general)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Foundations](#foundations)
- [Componentes](#componentes)
- [Patrones de UI](#patrones-de-ui)
- [Responsive y Layout](#responsive-y-layout)
- [Cómo usar](#cómo-usar)
- [Versionado](#versionado)
- [Gobernanza](#gobernanza)

---

## 🎯 Visión general

El YiQi Design System define:

- **Identidad visual consistente** — colores, tipografía y espaciado para toda la suite de productos YiQi
- **Componentes reutilizables** — desde botones hasta dashboards complejos
- **Patrones probados** — layouts, flujos de datos, gestión de estados
- **Accesibilidad y responsividad** — soporte mobile-first, dark/light mode
- **Documentación ejecutable** — archivos HTML interactivos y guías de implementación

Todos los productos YiQi deben respetar este sistema. Los desvíos requieren justificación explícita y aprobación de diseño.

---

## 📁 Estructura del repositorio

```
yiqi-design-system/
├── README.md                              # Este archivo
├── VERSION                                # Versión activa (1.2.4)
├── CHANGELOG.md                           # Historial de cambios
│
├── foundations/
│   ├── tokens.md                          # CSS Custom Properties
│   ├── color-palette.md                   # Guía de colores y semántica
│   ├── typography.md                      # Tipografía (Inter + IBM Plex Mono)
│   └── spacing-sizing.md                  # Sistema de espaciado y tamaños
│
├── components/
│   ├── buttons.md                         # Botones y variantes
│   ├── inputs.md                          # Campos de formulario
│   ├── cards.md                           # Cards y contenedores
│   ├── tables.md                          # Tablas con ordenamiento
│   ├── charts.md                          # Gráficos (Chart.js 4.4.0)
│   ├── navigation.md                      # Menús, tabs, breadcrumbs
│   └── modals-popovers.md                 # Modales y popovers
│
├── patterns/
│   ├── forms.md                           # Patrones de formularios
│   ├── data-entry.md                      # Entrada de datos
│   ├── dashboards.md                      # Layout de dashboards
│   ├── empty-states.md                    # Estados vacíos
│   └── error-success.md                   # Validación y feedback
│
├── responsive/
│   ├── breakpoints.md                     # 980px, 640px, 420px
│   ├── mobile-patterns.md                 # Patrones mobile-first
│   └── fluid-layouts.md                   # Layouts fluidos y flexibles
│
├── assets/
│   ├── logos/
│   │   ├── LOGO_YiQi_100x65.svg          # Logo positivo (light mode)
│   │   └── LOGO_YiQi_100x65_NEGATIVO.svg # Logo negativo (dark mode)
│   ├── icons/                             # Phosphor Icons (set completo)
│   └── illustrations/                     # Ilustraciones de marca
│
├── html-playgrounds/
│   ├── yiqi-design-system-v1_2_4-mobile-phosphor-fix.html
│   ├── yiqi-ds-sidebar.html
│   └── yiqi-ds-interactive.html           # Demostración interactiva
│
├── recipes/
│   ├── YiQi_DS_v1_2_4_Recipe.md           # Receta canónica de implementación
│   └── common-patterns.md                 # Patrones frecuentes
│
└── templates/
    ├── report-template.html               # Template para reportes
    ├── dashboard-template.html            # Template para dashboards
    └── commercial-proposal.html           # Template para propuestas
```

---

## 🎨 Foundations

### Tokens (CSS Custom Properties)

Todos los componentes se construyen sobre variables CSS unificadas. Incluyen modo oscuro y claro.

**Backgrounds:**
```css
--bg:         #0a0e27 (dark) / #eeece7 (light)
--bg-elev:    #0f1013 (dark) / #f6f4ef (light)
--bg-elev-2:  #14161b (dark) / #ffffff (light)
--bg-soft:    #181b21 (dark) / #ece9e2 (light)
```

**Colores de marca:**
```css
--cyan:      #00ccff  /* Acento principal */
--green:     #15d49c  /* Success */
--amber:     #ffb020  /* Warning */
--red:       #ff637d  /* Danger */
--purple:    #a78bfa  /* Secundario */
```

**Tipografía:**
- **Fuente principal:** Inter (weights: 400, 500, 600, 700)
- **Fuente monoespaciada:** IBM Plex Mono (400, 500)
- **Tamaños:** 12px, 14px, 16px, 18px, 20px, 24px, 32px, 40px, 48px

📖 Ver: [`foundations/tokens.md`](./foundations/tokens.md)

### Paleta de colores

Cada color semántico tiene dos variantes (modo oscuro y claro). La paleta está diseñada para WCAG AA accessibility.

📖 Ver: [`foundations/color-palette.md`](./foundations/color-palette.md)

### Espaciado y tamaños

Sistema de escala consistente basado en `8px base`:
```
xs:  4px    sm: 8px    md: 16px   lg: 24px   xl: 32px   2xl: 48px
```

📖 Ver: [`foundations/spacing-sizing.md`](./foundations/spacing-sizing.md)

---

## 🧩 Componentes

Todos los componentes incluyen:
- ✅ Estados (default, hover, active, disabled, loading)
- ✅ Responsive (funciona en 420px, 640px, 980px)
- ✅ Dark/Light mode
- ✅ Accesibilidad (ARIA labels, keyboard navigation)

### Botones
- Primary, secondary, tertiary
- Tamaños: sm, md, lg
- Estados: default, hover, active, disabled, loading

### Inputs
- Text, email, password, number, select, multiselect
- Validación en tiempo real
- Labels, help text, error messages
- Soporte para iconos

### Cards
- Contenedores flexibles para datos
- Bordes completos (4 lados), nunca solo lado izquierdo
- Espaciado interno consistente
- Soportan acciones y overlays

### Tablas
- **Ordenamiento por columna** (ascending/descending)
- Paginación integrada
- Selección múltiple
- Responsive con scroll horizontal en mobile

### Gráficos
- Chart.js 4.4.0
- Tipos: líneas, barras, donut, scatter
- Donut charts siempre ordenados descendente
- Leyendas interactivas

### Navegación
- Sidebar colapsable
- Breadcrumbs
- Tabs
- Menú mobile responsive

📖 Ver: [`components/`](./components/)

---

## 📐 Patrones de UI

### Dashboards
Estructura recomendada:
- Topbar con logo + navegación
- Sidebar (colapsable)
- Área de contenido responsive
- KPI cards con borders completos
- Gráficos con título y leyenda
- Tablas ordenables

### Formularios
- Validación clara y temprana
- Mensajes de error en rojo (#ff637d)
- Help text en gris (--muted)
- Botón submit deshabilitado hasta validar

### Reportes
- Encabezado con logo y metadata
- Secciones con títulos jerárquicos
- Longitud de texto limitada (párrafos cortos)
- Footers con versión de DS
- Generación de PDF lista

### Estados vacíos
- Ilustración + título + descripción
- CTA secundario ("Crear primero", "Volver atrás")
- Nunca texto largo — usar listas estructuradas

📖 Ver: [`patterns/`](./patterns/)

---

## 📱 Responsive y Layout

### Breakpoints
```css
980px   /* Desktop (default) */
640px   /* Tablet y laptop pequeño */
420px   /* Teléfono */
```

### Principios mobile-first
1. Comienza el diseño en 420px
2. Expande hidratamente a 640px y 980px
3. Touch targets mínimo 44px × 44px
4. Tablas con scroll horizontal en mobile
5. Modales fullscreen en mobile

### Layout fluido
- Máximo ancho: 1400px en desktop
- Márgenes laterales: 24px (sm), 32px (md), 48px (lg)
- Grid: 12 columnas, gap de 16px
- Flexbox para alineación vertical/horizontal

📖 Ver: [`responsive/`](./responsive/)

---

## 💻 Cómo usar

### 1. Para desarrolladores

**Copiar el HTML de referencia:**
```bash
cp yiqi-design-system-v1_2_4-mobile-phosphor-fix.html mi-proyecto/
```

**Importar variables CSS:**
```html
<link rel="stylesheet" href="yiqi-ds-tokens.css">
```

**Usar componentes:**
```html
<!-- Botón primario -->
<button class="btn btn-primary">Reserva tu demo</button>

<!-- Card con border completo -->
<div class="card">
  <h3>Título</h3>
  <p>Contenido</p>
</div>

<!-- Tabla con ordenamiento -->
<table class="table table-sortable">
  <thead>
    <tr><th data-sort="asc">Nombre</th></tr>
  </thead>
</table>
```

**Dark/Light mode:**
```html
<!-- Toggle dark mode -->
<body class="dark"><!-- o class="light" --></body>
```

### 2. Para diseñadores

**Descarga de activos:**
- Logos SVG (positivo/negativo) en `/assets/logos/`
- Icons Phosphor completo en `/assets/icons/`
- Ilustraciones de marca en `/assets/illustrations/`

**Figma:**
- Componentes basados en esta receta
- Variables sincronizadas vía Tokens Studio
- Actualizaciones via PR a este repositorio

### 3. Para product managers

**Propuestas comerciales:**
Usar template en `/templates/commercial-proposal.html`

**Reportes de clientes:**
Usar template en `/templates/report-template.html`

---

## 🏷️ Versionado

Este repositorio sigue **versionado semántico**:

```
MAJOR.MINOR.PATCH
1.2.4
│ │ └─ Bug fixes / refinamientos (retrocompatible)
│ └─── Nuevos componentes / features (retrocompatible)
└───── Cambios breaking (requiere migración)
```

### Versión actual: **1.2.4**

| Versión | Cambios principales | Estado |
|---------|-------------------|--------|
| 1.2.4 | Mobile fix, Phosphor icons, tabla sortable | ✅ Stable |
| 1.2.3 | Dark mode refinado, espaciado ajustado | ✅ Legacy |
| 1.2.0 | Primer release con todos los componentes | ✅ Legacy |
| 1.0.0 | Foundations y tokens iniciales | 🏛️ Archive |

📖 Ver: [`CHANGELOG.md`](./CHANGELOG.md)

### Cómo identificar la versión en un documento HTML

```html
<!-- En el footer -->
<footer>
  © 2026 YiQi S.A. · Nombre del documento · DS v1.2.4
</footer>
```

### Migración entre versiones

Cambios breaking requieren:
1. Notificación 2 semanas antes
2. Documentación de migración paso a paso
3. Scripts de conversion (si aplica)
4. Soporte durante transición

---

## 👥 Gobernanza

### Quién mantiene este repositorio

- **Design Lead:** Aprobación de cambios visuales
- **Dev Lead:** Aprobación de cambios técnicos
- **Product Manager:** Aprobación de nuevos patrones
- **Arquitecto:** Aprobación de cambios breaking

### Cómo proponer cambios

1. **Feature o mejora:**
   - Abre una issue describiendo el cambio
   - Incluye mockups/screenshots
   - Espera feedback del equipo de diseño

2. **Bug fix:**
   - PR directamente con descripción del problema
   - Incluye antes/después visual
   - Requiere 1 aprobación

3. **Cambio breaking:**
   - Issue extendida con contexto y alternativas
   - Aprobación de todos los owners
   - Notificación a todos los product teams
   - Versión MAJOR (ej: 2.0.0)

### Pull Request Checklist

- [ ] Cambios probados en 420px, 640px, 980px
- [ ] Dark mode y light mode funcionan
- [ ] Accesibilidad: ARIA labels, keyboard nav, color contrast
- [ ] Sin regresiones visuales
- [ ] Documentación actualizada
- [ ] Footer de versión correcto (si es HTML)
- [ ] CHANGELOG.md actualizado

---

## 📚 Documentación

### Archivos principales

| Archivo | Propósito |
|---------|-----------|
| `YiQi_DS_v1_2_4_Recipe.md` | Receta canónica — referencia completa |
| `YiQi_DS_v1_2_4.md` | Guía de diseño (foundational) |
| `yiqi-design.md` | Resumen ejecutivo |

### Playgrounds HTML

| Archivo | Descripción |
|---------|-------------|
| `yiqi-design-system-v1_2_4-mobile-phosphor-fix.html` | Referencia completa + interactive demo |
| `yiqi-ds-sidebar.html` | Componente sidebar con ejemplos |
| `yiqi-ds-interactive.html` | Demostración interactiva de componentes |

---

## 🚀 Guía rápida

### Para crear un nuevo dashboard

```bash
# 1. Copiar template
cp templates/dashboard-template.html mi-dashboard.html

# 2. Personalizar
- Cambiar logo (positivo si background claro)
- Actualizar topbar con navegación
- Agregar cards con KPIs (borders completos)
- Insertar gráficos Chart.js
- Agregar tablas sortables si aplica
- Actualizar footer con versión DS

# 3. Probar responsive
- Abrir en DevTools
- Ir a 420px, 640px, 980px
- Verificar dark/light mode

# 4. Validar accesibilidad
- Tab navigation funciona
- Contraste de colores WCAG AA
- ARIA labels en interactivos
```

### Para proponer un nuevo componente

1. Describe el caso de uso
2. Proporciona mockup en Figma
3. Incluye todos los estados (default, hover, active, disabled)
4. Sugiere variantes (tamaño, color, tipo)
5. Abre PR con implementación HTML/CSS
6. Espera aprobación design + dev

---

## 📋 Licencia

**Proprietary** — Uso exclusivo de YiQi S.A. y sus partners autorizados.

---

## 📞 Contacto y soporte

- **Reportar bugs:** Abre una issue en este repositorio
- **Propuestas de mejora:** Discusión en Slack #design-system
- **Acceso:** Contacta a arquitectura@yiqi.com.ar
- **Documentación:** https://sites.google.com/yiqi.com.ar/ayudaerp

---

**Última actualización:** Abril 2026  
**Versión DS:** 1.2.4  
**Estado:** ✅ Stable
