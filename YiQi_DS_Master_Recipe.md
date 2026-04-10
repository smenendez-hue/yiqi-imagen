# YiQi Design System — Master Recipe + Prompt v1.2.4

Fuente única de verdad para:
- Generación de UI con IA
- Implementación manual
- Estandarización cross-producto

---

# 0 · Modo de uso

Este documento es ejecutable.

Cumple 3 funciones:
1. Design System (tokens, componentes, reglas)
2. Receta estructural (qué construir)
3. Prompt operativo (cómo generarlo con IA)

Regla:
→ No se permite desviación de este documento.

---

# 1 · Prompt Maestro (usar directamente con IA)

Vas a actuar como un experto en UI implementando estrictamente el YiQi Design System v1.2.4.

Contexto obligatorio:
- Este documento es la única fuente de verdad
- No inferir estilos fuera de lo definido
- Logo YiQi siempre SVG inline (nunca <img>)

Objetivo:
Generar un HTML interactivo autocontenido siguiendo esta receta y el DS.

Reglas estrictas:
- Solo usar variables CSS (no colores hardcodeados)
- Tipografía:
  - Inter → UI
  - IBM Plex Mono → datos
- Spacing múltiplos de 4
- No sombras con offset
- Borders completos (1px solid var(--line))
- Dark mode por defecto
- Responsive obligatorio (≤ 980px)

Output:
- 1 archivo HTML completo
- <head> incluido
- Sin errores
- Sin dependencias rotas
- No explicar nada
- No texto fuera del HTML

---

# 2 · Receta estructural (Informe estándar)

Layout base:
- Topbar sticky
- Sidebar con navegación
- Contenido principal centrado
- Max width: 1100px

Secciones obligatorias:
1. Contexto
2. Resumen (KPIs)
3. Distribución (donut charts)
4. Histórico (línea 12 meses)
5. Análisis (insights + embeds)
6. Detalle (tabla)

Componentes obligatorios:

Topbar:
- Logo YiQi (SVG inline)
- Cliente
- Período
- Toggle dark/light
- CTA: "Reserva tu demo"

Sidebar:
- Scroll-spy
- Navegación por secciones

KPI cards:
- accent-cyan
- accent-green
- accent-amber
- accent-muted

Charts:
- Chart.js
- Colores desde CSS vars

Tabla:
- Sortable
- Filtrable
- Estado vacío

Embeds:
- Flourish iframe
- Footer clipeado
- Link externo

---

# 3 · Contrato de datos

Excel requerido

Columnas obligatorias:
- titulo
- sprint (YYYYMM)
- BL
- sector
- tipo (bug | mejora | soporte)
- estado (creado | en_progreso | resuelto)
- esfuerzo (number)

Opcionales:
- prioridad
- responsable
- fecha_creacion
- fecha_cierre

---

# 4 · Core JS obligatorio

function toggleTheme() {}
function initSidebar() {}
function initScrollSpy() {}
function initTableSorting() {}
function initTableFiltering() {}
function renderCharts() {}

document.addEventListener("DOMContentLoaded", () => {
  toggleTheme();
  initSidebar();
  initScrollSpy();
  initTableSorting();
  initTableFiltering();
  renderCharts();
});

---

# 5 · Responsive

Breakpoint: 980px

Mobile:
- Sidebar off-canvas
- 1 columna
- KPI grid: 2 columnas
- Tables scroll horizontal

Desktop:
- Sidebar fija
- Layout 2 columnas

---

# 6 · Estados

- empty → “Sin datos para el período”
- loading → fade
- error → fallback + link

---

# 7 · Naming

- ds-* → base
- app-* → layout
- rep-* → reportes

---

# 8 · Tokens CSS

Backgrounds:
--bg
--bg-elev
--bg-elev-2
--bg-soft

Texto:
--text
--muted
--muted-2

Líneas:
--line
--line-strong

Colores:
--cyan
--green
--amber
--red
--blue
--purple

---

# 9 · Tipografía

- Inter → UI
- IBM Plex Mono → datos

KPI:
- 30px
- 700
- letter-spacing -0.04em

---

# 10 · Componentes base

Card:
.card {
  padding: 20px;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--bg-elev-2);
}

Button:
.btn-primary {
  background: var(--cyan);
  color: #0a0a0b;
}

Table:
.table th::after { content: "↕"; }
.table th.sorted-asc::after { content: "↑"; color: var(--cyan); }
.table th.sorted-desc::after { content: "↓"; color: var(--cyan); }

---

# 11 · Charts

- type: doughnut
- cutout: 68%
- legend custom
- colores desde CSS

---

# 12 · Branding

- Nombre: YiQi
- CTA: "Reserva tu demo"
- Español neutro
- Logo SVG inline obligatorio

---

# 13 · Versionado

Incluir en footer:
YiQi Design System v1.2.4

---

# 14 · Dependencias

Modo estándar:
- Google Fonts
- Chart.js
- Phosphor Icons

Modo offline:
- embebido inline

---

# 15 · Output contract

El HTML final debe:
- Renderizar correctamente
- Ser responsive
- No tener errores JS
- Mantener consistencia visual DS
- Ser reutilizable para cualquier cliente

---

# 16 · Convención de archivo

[nombre]-v1_0_0.html

---

# 17 · Regla crítica final

Si algo no está definido:
→ NO inventar
→ Usar criterio mínimo basado en este documento

---

YiQi ERP · Design System v1.2.4 · Master Recipe
