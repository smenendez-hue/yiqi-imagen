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

## Estandar Transversal de Tema (Obligatorio)

- Toda app en `*.yiqi.com.ar` debe implementar selector Dark / Light visible para usuario.
- La preferencia de tema debe compartirse entre subdominios usando cookie `yiqi_theme` con `domain=.yiqi.com.ar`.
- No se acepta persistencia solo local (solo `localStorage`) para aplicaciones productivas YiQi.
- Debe existir fallback local para desarrollo local, pero en produccion prevalece cookie compartida.
