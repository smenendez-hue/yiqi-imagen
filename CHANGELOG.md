# CHANGELOG

Todos los cambios notables en el YiQi Design System están documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/) y este proyecto adhiere a [Versionado Semántico](https://semver.org/lang/es/).

---

## [1.2.4] - 2026-04-15

### 🎯 Focus
Mobile responsiveness refinado, fixes de accesibilidad, componentes de tabla mejorados.

### ✨ Added
- **Tabla sortable:** Nuevo componente `table-sortable` con ordenamiento por columna (asc/desc)
- **Phosphor Icons:** Integración completa del set de iconos (500+ iconos disponibles)
- **Mobile breakpoints:** Soporte explícito para 420px (teléfono pequeño)
- **Donut chart sorter:** Función `sortDonutDesc()` para ordenamiento automático descendente
- **Interactive recipe:** Documento HTML con demostraciones en vivo

### 🔧 Changed
- **Logo embebido:** Todos los HTML ahora incluyen SVG inline (positivo/negativo) en lugar de `<img>`
- **Border rule enforcement:** Cards, KPIs y paneles siempre usan `border: 4px solid` completo, nunca solo lado
- **Dark mode refinado:** Ajustes de contraste para WCAG AA en componentes secundarios
- **Tipografía mejorada:** Kerning fino en títulos y mejora de legibilidad en tamaños pequeños
- **Grid responsivo:** Ajustes de gap y márgenes según breakpoint

### 🐛 Fixed
- Overflow de tablas en mobile (ahora con scroll horizontal)
- Alineación de iconos en botones pequeños (sm)
- Espaciado de modales en pantallas < 420px
- Contrast ratio en hover state de botones secundarios
- Padding inconsistente en cards en modo light

### 🚀 Deprecated
- Logo vía `<img>` tag — usar SVG inline siempre
- Custom borders (solo `border-left`, etc.) — usar border completo

### 📚 Docs
- Receta actualizada: `YiQi_DS_v1_2_4_Recipe.md` (completa y canónica)
- Guía de tablas sortables
- Guía de Phosphor icons
- Plantillas mejoradas para reportes y dashboards

### 🔗 Archivos
- `yiqi-design-system-v1.2.4.html` (referencia completa)
- `YiQi_DS_v1_2_4_Recipe.md` (receta canónica)
- `CHANGELOG.md` (este archivo)

---

## [1.2.3] - 2026-03-10

### 🎯 Focus
Refinamiento del dark mode, mejor accesibilidad.

### ✨ Added
- **Light mode palette:** Colores ajustados para fondo claro (eeece7)
- **ARIA labels:** Mejora de accesibilidad en navegación, botones y formularios
- **Keyboard navigation:** Tab order consistente en todos los componentes
- **Focus indicators:** Anillo de focus visible en modo keyboard

### 🔧 Changed
- **Dark/light toggle:** Mejor transición entre modos
- **Text contrast:** Ajustes en variables --muted y --muted-2 para garantizar WCAG AA
- **Spacing refinado:** Márgenes y paddings ajustados tras feedback de UX

### 🐛 Fixed
- Botones deshabilitados con contrast insuficiente (dark mode)
- Help text invisible en ciertos backgrounds
- Modales con scroll interno truncando contenido

### 📚 Docs
- Guía de color actualizada con nuevas recomendaciones light mode
- Checklist de accesibilidad

---

## [1.2.0] - 2026-02-01

### 🎯 Focus
Primera versión stable completa con todos los componentes core y patrones de dashboard.

### ✨ Added
- **Componentes base:** Botones, inputs, cards, navegación
- **Componentes complejos:** Tablas, gráficos (Chart.js), modales, popovers
- **Patrones UI:** Dashboards, formularios, reportes, estados vacíos
- **Responsive:** Breakpoints 980px (desktop), 640px (tablet), 420px (mobile)
- **Dark/Light mode:** Soporte completo con CSS variables
- **Tipografía:** Inter + IBM Plex Mono, pesos 400-700
- **Tokens:** Sistema de colores, espaciado, tamaños, sombras
- **Logo assets:** Negativo y positivo como SVG

### 🔧 Changed
- Estructura de carpetas: `foundations/`, `components/`, `patterns/`, `responsive/`
- Documentación: Markdown + HTML playgrounds interactivos

### 📚 Docs
- `YiQi_DS_v1_2_0.md` (guía completa)
- `YiQi_DS_v1_2_0_Recipe.md` (receta de implementación)
- Playgrounds HTML para demostración

---

## [1.0.0] - 2025-12-15

### 🎯 Focus
Foundations iniciales: tokens, color, tipografía, spacing.

### ✨ Added
- **CSS Variables:** Sistema completo de tokens (backgrounds, borders, text, colores)
- **Color palette:** Cyan, green, amber, red, purple (dark + light)
- **Typography:** Inter (principal) + IBM Plex Mono (monoespaciada)
- **Spacing scale:** xs (4px) → 2xl (48px)
- **Responsive breakpoints:** 980px, 640px, 420px
- **Documentación:** Guía de foundations

### 📚 Docs
- `foundations/tokens.md`
- `foundations/color-palette.md`
- `foundations/typography.md`
- `foundations/spacing-sizing.md`

---

## [Unreleased]

### ✨ Added

- Regla obligatoria de trazabilidad para KPIs/indicadores: declarar origen validable (`módulo + campo(s) + agregado/fórmula + periodo`).
- Ejemplo visual en cards KPI con `Fuente` y ayuda contextual (`i`) para validar el dato.

### 📚 Docs

- Actualización de guía maestra y receta con checklist explícito de indicadores auditables.

### 🔮 Roadmap para 1.3.0

- [ ] **Animations:** Transiciones y micro-interacciones consistentes
- [ ] **Data pickers:** Calendarios y time pickers mejorados
- [ ] **Validación avanzada:** Custom validators y messages contextuales
- [ ] **Figma integration:** Tokens Studio sync automático
- [ ] **Motion guidelines:** Duración, easing, y timing
- [ ] **Component library:** Storybook integrando todos los componentes
- [ ] **Performance:** Optimizaciones de carga y renders

### 🔮 Roadmap para 2.0.0 (breaking)

- [ ] **Redesign visual:** Evaluación de color palette y tipografía
- [ ] **Nuevo grid system:** Cambio a CSS Grid nativo
- [ ] **Web components:** Migración a custom elements
- [ ] **Accesibilidad mejorada:** WCAG AAA target
- [ ] **Temas personalizables:** Sistema de theming dinámico

---

## Cómo contribuir

Si encontrás un bug o tenés una sugerencia:

1. Describe el problema claramente
2. Incluye screenshots/video si es visual
3. Sugiere una solución (si aplica)
4. Abre una issue o PR con referencia a esta versión

## Versionado

Seguimos [Versionado Semántico](https://semver.org/lang/es/):

- **MAJOR:** Cambios incompatibles con versiones anteriores
- **MINOR:** Nuevas funcionalidades, retrocompatibles
- **PATCH:** Fixes y refinamientos, retrocompatibles

---

**Última actualización:** Abril 2026  
**Mantenedor:** Design System Team @ YiQi  
**Licencia:** Proprietary — YiQi S.A.
