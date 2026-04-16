{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww20840\viewh22300\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # YiQi Design System \'97 Master Recipe + Prompt v1.2.4\
\
Fuente \'fanica de verdad para:\
- Generaci\'f3n de UI con IA\
- Implementaci\'f3n manual\
- Estandarizaci\'f3n cross-producto\
\
---\
\
# 0 \'b7 Modo de uso\
\
Este documento es ejecutable.\
\
Cumple 3 funciones:\
1. Design System (tokens, componentes, reglas)\
2. Receta estructural (qu\'e9 construir)\
3. Prompt operativo (c\'f3mo generarlo con IA)\
\
Regla:\
\uc0\u8594  No se permite desviaci\'f3n de este documento.\
\
---\
\
# 1 \'b7 Prompt Maestro (usar directamente con IA)\
\
Vas a actuar como un experto en UI implementando estrictamente el YiQi Design System v1.2.4.\
\
Contexto obligatorio:\
- Este documento es la \'fanica fuente de verdad\
- No inferir estilos fuera de lo definido\
- Logo YiQi siempre SVG inline (nunca <img>)\
\
Objetivo:\
Generar un HTML interactivo autocontenido siguiendo esta receta y el DS.\
\
Reglas estrictas:\
- Solo usar variables CSS (no colores hardcodeados)\
- Tipograf\'eda:\
  - Inter \uc0\u8594  UI\
  - IBM Plex Mono \uc0\u8594  datos\
- Spacing m\'faltiplos de 4\
- No sombras con offset\
- Borders completos (1px solid var(--line))\
- Dark mode por defecto\
- Responsive obligatorio (\uc0\u8804  980px)\
\
Output:\
- 1 archivo HTML completo\
- <head> incluido\
- Sin errores\
- Sin dependencias rotas\
- No explicar nada\
- No texto fuera del HTML\
\
---\
\
# 2 \'b7 Receta estructural (Informe est\'e1ndar)\
\
Layout base:\
- Topbar sticky\
- Sidebar con navegaci\'f3n\
- Contenido principal centrado\
- Max width: 1100px\
\
Secciones obligatorias:\
1. Contexto\
2. Resumen (KPIs)\
3. Distribuci\'f3n (donut charts)\
4. Hist\'f3rico (l\'ednea 12 meses)\
5. An\'e1lisis (insights + embeds)\
6. Detalle (tabla)\
\
Componentes obligatorios:\
\
Topbar:\
- Logo YiQi (SVG inline)\
- Cliente\
- Per\'edodo\
- Toggle dark/light\
- CTA: "Reserva tu demo"\
\
Sidebar:\
- Scroll-spy\
- Navegaci\'f3n por secciones\
\
KPI cards:\
- accent-cyan\
- accent-green\
- accent-amber\
- accent-muted\
\
Charts:\
- Chart.js\
- Colores desde CSS vars\
\
Tabla:\
- Sortable\
- Filtrable\
- Estado vac\'edo\
\
Embeds:\
- Flourish iframe\
- Footer clipeado\
- Link externo\
\
---\
\
# 3 \'b7 Contrato de datos\
\
Excel requerido\
\
Columnas obligatorias:\
- titulo\
- sprint (YYYYMM)\
- BL\
- sector\
- tipo (bug | mejora | soporte)\
- estado (creado | en_progreso | resuelto)\
- esfuerzo (number)\
\
Opcionales:\
- prioridad\
- responsable\
- fecha_creacion\
- fecha_cierre\
\
---\
\
# 4 \'b7 Core JS obligatorio\
\
function toggleTheme() \{\}\
function initSidebar() \{\}\
function initScrollSpy() \{\}\
function initTableSorting() \{\}\
function initTableFiltering() \{\}\
function renderCharts() \{\}\
\
document.addEventListener("DOMContentLoaded", () => \{\
  toggleTheme();\
  initSidebar();\
  initScrollSpy();\
  initTableSorting();\
  initTableFiltering();\
  renderCharts();\
\});\
\
---\
\
# 5 \'b7 Responsive\
\
Breakpoint: 980px\
\
Mobile:\
- Sidebar off-canvas\
- 1 columna\
- KPI grid: 2 columnas\
- Tables scroll horizontal\
\
Desktop:\
- Sidebar fija\
- Layout 2 columnas\
\
---\
\
# 6 \'b7 Estados\
\
- empty \uc0\u8594  \'93Sin datos para el per\'edodo\'94\
- loading \uc0\u8594  fade\
- error \uc0\u8594  fallback + link\
\
---\
\
# 7 \'b7 Naming\
\
- ds-* \uc0\u8594  base\
- app-* \uc0\u8594  layout\
- rep-* \uc0\u8594  reportes\
\
---\
\
# 8 \'b7 Tokens CSS\
\
Backgrounds:\
--bg\
--bg-elev\
--bg-elev-2\
--bg-soft\
\
Texto:\
--text\
--muted\
--muted-2\
\
L\'edneas:\
--line\
--line-strong\
\
Colores:\
--cyan\
--green\
--amber\
--red\
--blue\
--purple\
\
---\
\
# 9 \'b7 Tipograf\'eda\
\
- Inter \uc0\u8594  UI\
- IBM Plex Mono \uc0\u8594  datos\
\
KPI:\
- 30px\
- 700\
- letter-spacing -0.04em\
\
---\
\
# 10 \'b7 Componentes base\
\
Card:\
.card \{\
  padding: 20px;\
  border: 1px solid var(--line);\
  border-radius: var(--radius-lg);\
  background: var(--bg-elev-2);\
\}\
\
Button:\
.btn-primary \{\
  background: var(--cyan);\
  color: #0a0a0b;\
\}\
\
Table:\
.table th::after \{ content: "\uc0\u8597 "; \}\
.table th.sorted-asc::after \{ content: "\uc0\u8593 "; color: var(--cyan); \}\
.table th.sorted-desc::after \{ content: "\uc0\u8595 "; color: var(--cyan); \}\
\
---\
\
# 11 \'b7 Charts\
\
- type: doughnut\
- cutout: 68%\
- legend custom\
- colores desde CSS\
\
---\
\
# 12 \'b7 Branding\
\
- Nombre: YiQi\
- CTA: "Reserva tu demo"\
- Espa\'f1ol neutro\
- Logo SVG inline obligatorio\
\
---\
\
# 13 \'b7 Versionado\
\
Incluir en footer:\
YiQi Design System v1.2.4\
\
---\
\
# 14 \'b7 Dependencias\
\
Modo est\'e1ndar:\
- Google Fonts\
- Chart.js\
- Phosphor Icons\
\
Modo offline:\
- embebido inline\
\
---\
\
# 15 \'b7 Output contract\
\
El HTML final debe:\
- Renderizar correctamente\
- Ser responsive\
- No tener errores JS\
- Mantener consistencia visual DS\
- Ser reutilizable para cualquier cliente\
\
---\
\
# 16 \'b7 Convenci\'f3n de archivo\
\
[nombre]-v1_0_0.html\
\
---\
\
# 17 \'b7 Regla cr\'edtica final\
\
Si algo no est\'e1 definido:\
\uc0\u8594  NO inventar\
\uc0\u8594  Usar criterio m\'ednimo basado en este documento\
\
---\
\
YiQi ERP \'b7 Design System v1.2.4 \'b7 Master Recipe}