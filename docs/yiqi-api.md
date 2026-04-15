# Integracion con API YiQi

## Documentacion oficial

- La documentacion completa de la API de YiQi se encuentra en https://apidoc.yiqi.com.ar.
- En ese portal esta la documentacion general de uso y los Swagger de cada modulo.

## Autenticacion

- Obtener token via endpoint de seguridad definido en OpenAPI.
- Si aplica, completar contexto de usuario con endpoint de login information.
- No almacenar credenciales en codigo.
- Implementar el flujo visual y de estados segun `docs/yiqi-login.md`.

## Patron de implementacion sugerido

1. `services/apiClient.ts`: wrapper HTTP + headers + errores base.
2. `services/yiqiApi.ts`: endpoints concretos por entidad.
3. `services/mappers.ts`: normalizacion y conversion de payloads.

## Reglas de robustez

- Manejar respuestas no 2xx con excepcion controlada.
- Validar campos requeridos antes de usar en UI.
- No asumir estructura exacta sin normalizacion.
- Agregar mensajes de error de usuario en espanol neutro.
- Convencion obligatoria de paths: las entidades YiQi deben consumirse en MAYUSCULAS (ej: `/PEDIDO/query`, `/REPORTE_VENTAS_RES/query`).

## Contrato de fields para endpoints /query (Obligatorio)

- Prohibido inventar o asumir nombres de campos en `columns[].field` y `filters[].columnName`.
- Definir una capa de constantes de campos (ej: `FIELDS.<ENTIDAD>.<CAMPO>`) como unica via para construir queries.
- Generar esas constantes automaticamente desde los Swagger de https://apidoc.yiqi.com.ar (recomendado: script `generate:fields`).
- Si un campo no existe en la fuente generada, no se puede usar en el request.
- Para entidades con diferencias por schema/tenant, implementar estrategia de fallback por candidatos, pero siempre con campos presentes en la fuente de verdad.

Checklist minimo por app:
- Script reproducible de generacion de fields.
- Archivo generado versionado en repo.
- Builders de query sin strings literales de campo.
- Test de contrato o linter interno para detectar drift entre builders y fields.
- Ejecucion obligatoria en CI antes de merge.

## Versionado y contratos

- Basar cambios en OpenAPI oficial.
- Si cambia una entidad/campo, actualizar:
  - mapeos
  - tests
  - documentacion tecnica
