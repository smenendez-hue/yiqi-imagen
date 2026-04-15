# Buenas Practicas Generales de Aplicaciones YiQi

## Arquitectura

- Separar capa de presentacion, dominio y acceso a datos.
- Minimizar dependencias cruzadas entre modulos.
- Favorecer funciones puras y componentes reutilizables.

## Calidad de codigo

- Codigo legible antes que ingenioso.
- Nombres explicitos para funciones y variables.
- Evitar side effects ocultos.
- Manejar errores con contexto util.

## Seguridad

- No exponer secretos en cliente.
- Validar entradas y salidas.
- Sanitizar datos visibles al usuario cuando corresponda.

## Performance

- Evitar renders innecesarios.
- Cargar datos bajo demanda cuando aplique.
- Medir antes de optimizar.

## Observabilidad

- Logs utiles para diagnostico (sin datos sensibles).
- Mensajes de error consistentes y accionables.

## Entrega

- Cada funcionalidad debe cerrar con build + tests verdes.
- Registrar decisiones relevantes en README/ADR breve.

## Estandar de Campos Query (Obligatorio)

- No se permite hardcodear nombres de campos en requests a endpoints `/query` de YiQi.
- Los nombres de campos deben provenir de una fuente de verdad versionada en el repo (ej: `schema-fields`).
- La fuente de verdad debe generarse automaticamente desde OpenAPI/Swagger oficial (o catalogo tecnico controlado cuando OpenAPI no expone enums).
- Todo builder de query debe consumir constantes de campos; no strings literales en `field` ni `columnName`.
- Si el schema cambia, el cambio debe incluir en el mismo PR:
	- regeneracion de campos
	- ajuste de mapeos
	- ajuste de tests
	- ajuste de documentacion tecnica
- Debe existir al menos una validacion automatica (test o script CI) que detecte campos no definidos.

## Estandar Transversal de Tema (Obligatorio)

- Toda app en `*.yiqi.com.ar` debe implementar selector Dark / Light visible para usuario.
- El selector debe ser un switch visual con iconos de sol y luna (referencia: `apidoc.yiqi.com.ar`, esquina superior derecha).
- La preferencia de tema debe compartirse entre subdominios usando cookie `yiqi_theme` con `domain=.yiqi.com.ar`.
- No se acepta persistencia solo local (solo `localStorage`) para aplicaciones productivas YiQi.
- Debe existir fallback local para desarrollo local, pero en produccion prevalece cookie compartida.

## Estandar Transversal de Contraste (Obligatorio)

- Toda UI debe cumplir WCAG 2.1 AA en textos y controles.
- Los componentes interactivos deben manejar contraste por estados (base, hover, active, focus) usando tokens.
- No se aprueban PRs con bloques de navegacion o CTA de bajo contraste, aunque visualmente sigan la paleta YiQi.
