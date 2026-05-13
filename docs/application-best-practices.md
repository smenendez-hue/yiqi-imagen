# Buenas Practicas Generales de Aplicaciones YiQi

## Arquitectura

- Separar capa de presentacion, dominio y acceso a datos.
- Minimizar dependencias cruzadas entre modulos.
- Favorecer funciones puras y componentes reutilizables.

## Calidad de codigo

- Codigo legible antes que ingenioso.
- Nombres explicitos para funciones y variables.
- Preferir TypeScript como lenguaje por defecto para nueva logica de negocio, integraciones y estado.
- Si un modulo legacy sigue en JavaScript, favorecer migraciones incrementales a TypeScript durante cambios sustanciales.
- Evitar side effects ocultos.
- Manejar errores con contexto util.

## Redaccion de UI

- Todo texto visible al usuario debe mantener ortografia y sintaxis correctas en espanol (incluyendo tildes).
- Mantener terminologia funcional consistente entre pantallas e indicadores.
- Reservar MAYUSCULAS para siglas tecnicas o de negocio (API, POS, SLA, SKU).

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
