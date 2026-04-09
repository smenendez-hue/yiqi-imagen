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
