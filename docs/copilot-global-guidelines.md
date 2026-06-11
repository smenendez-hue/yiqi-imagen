# Lineamientos Globales para Agentes Codificadores YiQi

## 1. Principios base

- Priorizar seguridad, mantenibilidad y legibilidad.
- Evitar código acoplado a una sola pantalla/módulo si puede abstraerse.
- No hardcodear secretos ni credenciales.
- Documentar decisiones tecnicas no obvias.
- Preservar estilos y convenciones existentes del repositorio.

## 2. Verificación y testing

- Usar el runner de testing ya configurado en el repositorio.
- Si el repo no tiene runner configurado, proponer una opción compatible con el stack antes de imponer una herramienta.
- Jest aplica solo cuando el proyecto ya lo usa o cuando el equipo lo define explícitamente.
- Cada cambio funcional debe incluir o ajustar tests cuando exista superficie testeable.
- Revisar regresiones antes de terminar: flujos existentes afectados, contratos, errores, estados vacíos, responsive y navegación.
- Priorizar tests de:
  - Reglas de negocio
  - Integraciones con API
  - Casos borde y manejo de errores
- Comandos esperados: los declarados en `package.json` o en la documentación del proyecto.
- En proyectos activos, recomendar Husky/lint-staged o un hook equivalente para ejecutar verificaciones antes de commitear. No instalarlo sin acuerdo del equipo.

## 3. Integracion API YiQi

- Respetar contratos OpenAPI vigentes.
- Manejar errores HTTP con mensajes claros para usuario y logs tecnicos.
- Incluir timeout y estrategia de reintento cuando aplique.
- Validar y normalizar respuesta antes de mapear a UI.
- Mantener separacion de responsabilidades:
  - Capa API (fetch/axios)
  - Capa mapeo/normalizacion
  - Capa UI/estado

## 4. Diseno estandar YiQi

- Usar tokens de diseno (sin colores hardcodeados en componentes).
- Tipografia UI: Inter.
- Tipografia para datos/codigo: IBM Plex Mono.
- Asegurar responsive con breakpoint principal <= 980px.
- Mantener copy en espanol neutro.
- Reutilizar componentes de sistema antes de crear nuevos.

## 5. Buenas practicas de arquitectura

- Módulos pequeños, con funciones puras cuando sea posible.
- Evitar logica de negocio dentro de componentes visuales.
- TypeScript debe ser el estandar por defecto para codigo nuevo y refactors relevantes.
- En repositorios legacy en JavaScript, priorizar migracion gradual a TypeScript antes de seguir ampliando logica critica.
- Definir tipos/interfaces claros en TypeScript.
- Reducir duplicacion con utilidades compartidas.
- Incluir manejo consistente de estados: loading/success/error.

## 6. Checklist minimo de entrega

Estas reglas aplican especialmente a proyectos derivados, apps y desarrollos que usen
esta documentacion como guia. En este repo de empaquetado del DS, aplicarlas solo cuando
la tarea tenga una superficie real equivalente.

- Build compila sin errores.
- Tests relevantes pasan.
- Sin warnings criticos de lint.
- UI consistente con lineamientos YiQi.
- Documentacion actualizada si hubo cambios de contrato o flujo.
- Al final de cada tarea, revisar el checklist que corresponda segun el tema.
- Si no existe un checklist adecuado, crear un checklist breve para esa tarea y usarlo antes de cerrar.
- Si la tarea toca una pagina, flujo, grupo de componentes o tema relevante, crear o actualizar un resumen interno en `Agent/summaries/`.
- Informar al usuario, en lenguaje simple, que checklist se uso y que puntos quedaron pendientes o con riesgo.

## 7. Higiene de Git

Estas reglas son el estandar recomendado para proyectos activos derivados de esta
documentacion. En este repo, usarlas como criterio de orden cuando se preparen cambios.

- Hacer commits pequeños y separados por intención de cambio. Evitar commits gigantes con arreglos mezclados.
- Usar nombres de rama descriptivos del trabajo, no nombres de agentes ni herramientas.
- No agregarse como coautor ni agregar agentes como coautores, salvo pedido explícito del equipo.
- No mezclar cambios de documentación, tooling y feature en el mismo commit si pueden revisarse por separado.

## 8. Herramientas reutilizables

- Para mojibake, encoding, cambios mecánicos repetidos o transformaciones frágiles, crear o actualizar una herramienta en vez de repetir pasos manuales.
- Si una herramienta no cubre el caso real, corregir la herramienta o documentar su límite antes de dar el problema por resuelto.
- Documentar herramientas reutilizables en `scripts/README.md`, `scripts/INDEX.md` o `Agent/tools/README.md` según corresponda.
- Una herramienta debe declarar objetivo, entrada, salida, archivos que toca, riesgos y ejemplo de uso.

## 9. Resumen interno por pagina o tema

Esta regla esta pensada para apps y proyectos derivados donde se trabajan paginas,
flujos y componentes con contexto recurrente. En este repo de empaquetado, crear
resumenes solo para temas recurrentes reales.

- Mantener resumenes internos breves en `Agent/summaries/` para paginas, flujos, grupos de componentes o temas que requieran contexto recurrente.
- Usar el resumen para evitar releer todo el codigo o toda la documentacion en tareas futuras.
- Actualizar el resumen cuando cambien comportamiento, estructura, contrato, riesgos o comandos de verificacion.
- No guardar secretos, tokens, credenciales ni datos productivos.
- Escribir resumenes operativos en ASCII y con lenguaje simple.

## 10. Reglas operativas y memoria de errores

- En proyectos derivados, documentar restricciones operativas en `Agent/project-rules.md` cuando existan: schemas permitidos, entornos, politica de credenciales, safe probes y acciones que requieren aprobacion.
- Antes de consultar APIs reales, revisar esas reglas. Si no existen y la accion puede ser riesgosa, pedir confirmacion.
- Para errores repetibles, leer primero `Agent/error-memory/errors/INDEX.md` y luego solo la categoria relevante.
- Registrar causa raiz y fix final. No guardar logs crudos, secretos, tokens, cookies, passwords ni datos productivos.
- Si el proyecto tiene memoria legacy, migrar entradas utiles gradualmente a categorias, sin duplicar todo.
