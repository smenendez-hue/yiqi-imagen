# Buenas Prácticas Generales de Aplicaciones YiQi

## Arquitectura

- Separar capa de presentación, dominio y acceso a datos.
- Minimizar dependencias cruzadas entre módulos.
- Favorecer funciones puras y componentes reutilizables.

## Calidad de código

- Código legible antes que ingenioso.
- Nombres explícitos para funciones y variables.
- Preferir TypeScript como lenguaje por defecto para nueva lógica de negocio, integraciones y estado.
- Si un módulo legacy sigue en JavaScript, favorecer migraciones incrementales a TypeScript durante cambios sustanciales.
- Evitar side effects ocultos.
- Manejar errores con contexto útil.

## Redacción de UI

- Todo texto visible al usuario debe mantener ortografía y sintaxis correctas en español (incluyendo tildes).
- Mantener terminología funcional consistente entre pantallas e indicadores.
- Reservar MAYÚSCULAS para siglas técnicas o de negocio (API, POS, SLA, SKU).
- Redactar en español neutro latinoamericano, sin voseo ni regionalismos.

## Seguridad

- No exponer secretos en cliente.
- Validar entradas y salidas.
- Sanitizar datos visibles al usuario cuando corresponda.

## Performance

- Evitar renders innecesarios.
- Cargar datos bajo demanda cuando aplique.
- Medir antes de optimizar.

## Observabilidad

- Logs útiles para diagnóstico (sin datos sensibles).
- Mensajes de error consistentes y accionables.

## Entrega

- Cada funcionalidad debe cerrar con build + tests verdes.
- Registrar decisiones relevantes en README/ADR breve.
