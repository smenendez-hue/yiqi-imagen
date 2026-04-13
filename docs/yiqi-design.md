# YiQi Design — UI/UX System

Guía oficial de experiencia para YiQi Platform.
Define cómo se diseñan interfaces claras, rápidas y orientadas a decisión.

---

# 🧠 0. Definición

YiQi Design no es estética.

Es:

> diseño de superficies de decisión sobre datos de negocio

---

# 🎯 1. Principio central

Toda interfaz debe responder:

> ¿Qué tiene que decidir el usuario ahora?

---

# 🧩 2. Marco de decisión

Toda pantalla debe permitir responder:

1. ¿Qué está pasando?
2. ¿Por qué está pasando?
3. ¿Qué debería hacer ahora?

---

# 🏗️ 3. Arquitectura de la interfaz

## Capas obligatorias

1. Contexto (Hero)
2. Estado (KPIs)
3. Dirección (Tendencias)
4. Diagnóstico (Detalle)
5. Acción (Decisión)

---

## Regla estructural

> arriba → decisión
> abajo → explicación

---

# 👤 4. Diseño por rol

## Owner (dueño)

* ingresos
* margen
* riesgo
* oportunidades

## Operaciones

* flujo
* estados
* bloqueos

## Comercial

* conversión
* canales
* performance

---

## Regla

> no mezclar múltiples roles en una misma interfaz

---

# ⚡ 5. Jerarquía cognitiva

El usuario escanea, no lee.

Diseñar para:

* foco
* significado
* acción

---

# 🎨 6. Sistema visual

## Uso del color

* cyan → foco / acción
* green → positivo
* amber → alerta
* red → crítico
* muted → secundario

---

## Regla

> el color es semántico, no decorativo

---

# 📐 7. Layout

* máximo 2 columnas en desktop
* 1 columna en mobile
* separación clara entre bloques

---

# 📱 8. Responsive

* breakpoint principal: `max-width: 980px`
* mobile no es adaptación: es simplificación

---

# 📦 9. Componentes (criterio UX)

## Panel

* agrupa información
* no mezclar contextos

---

## KPI

* entendible en <1 segundo
* siempre con contexto

---

## Badge

* estado claro
* corto

---

## Button

* 1 acción principal por vista
* evitar múltiples CTAs dominantes

---

# 📊 10. Tablas (Data Table)

Las tablas son:

> herramientas de análisis, no elementos visuales

---

## Capacidades obligatorias

* sorting por columnas
* búsqueda en tiempo real
* scroll horizontal
* estados: loading / empty / error

---

## Sorting

* visible
* explícito
* aplicable a datos relevantes

---

## Layout

* contenidas en `.table-wrap`
* nunca rompen layout
* scroll horizontal si es necesario

---

## Jerarquía

* columnas importantes primero
* números a la derecha
* texto a la izquierda

---

## UX

* evitar más de 6–7 columnas
* priorizar escaneo

---

## Accesibilidad

* `<th>` correcto
* navegación por teclado
* contraste AA

---

# 🔁 11. Estados de UI

Toda pantalla debe contemplar:

* Loading
* Empty
* Error

---

# 🧠 12. Data UX

Los datos deben tener:

* comparación temporal
* variación (%)
* contexto

---

# 🖱️ 13. Interacción

* hover sutil
* feedback inmediato
* estados claros

---

# ♿ 14. Accesibilidad (AA obligatorio)

Cumplir WCAG 2.1 AA:

* texto normal → 4.5:1
* texto grande → 3:1
* UI interactiva → 3:1

---

## Componentes interactivos deben:

* tener focus visible
* ser navegables por teclado
* respetar contraste en todos los estados

---

# 🎨 15. Consistencia visual

* reutilizar componentes existentes
* no inventar estilos nuevos
* usar tokens siempre

---

# ✍️ 16. Copy

* español neutro
* claro
* accionable
* breve

Ejemplo:

❌ Error en API
✅ No se pudieron cargar las ventas

---

# 🔐 17. Login (contrato UX)

* pantalla independiente
* no mezclar con app autenticada

---

## Obligatorio

* reutilizar el patrón definido en `docs/yiqi-login.md` para:

  * estructura
  * copy
  * estados

---

## Reglas

* contraste AA en bloque superior
* bordes sin cortes (`overflow: hidden`)
* evitar dobles bordes
* usar tokens

---

# 🌗 18. Dark / Light

* selector visible
* persistencia de preferencia
* cambio inmediato

---

# ⚙️ 19. Comportamiento UI

* feedback inmediato
* estados visibles
* interacción predecible

---

# 🚫 20. Anti-patrones

* dashboards genéricos
* exceso de métricas
* múltiples focos
* UI decorativa
* datos sin contexto

---

# 🤖 21. Uso con IA

## La IA debe:

* respetar estructura
* usar tokens
* mantener jerarquía
* no cambiar contenido

---

## La IA no puede:

* inventar componentes
* alterar layout base
* redefinir tokens

---

# 🧩 22. Modelo mental

Una UI YiQi es:

* clara
* rápida
* confiable

No es:

* un ERP complejo
* un reporte estático
* una demo visual

---

# 🚀 23. Nivel de calidad

1 → UI bonita
2 → usable
3 → informa
4 → guía
5 → hace decidir ✅

---

# 🔥 24. Regla final

Si el usuario duda:

* qué está viendo
* qué significa
* qué hacer

👉 la interfaz falló

---

# 🧠 25. Definición final

YiQi Design es:

> claridad aplicada a decisiones de negocio
