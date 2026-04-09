# Integracion con API YiQi

## Autenticacion

- Obtener token via endpoint de seguridad definido en OpenAPI.
- Si aplica, completar contexto de usuario con endpoint de login information.
- No almacenar credenciales en codigo.

## Patron de implementacion sugerido

1. `services/apiClient.ts`: wrapper HTTP + headers + errores base.
2. `services/yiqiApi.ts`: endpoints concretos por entidad.
3. `services/mappers.ts`: normalizacion y conversion de payloads.

## Reglas de robustez

- Manejar respuestas no 2xx con excepcion controlada.
- Validar campos requeridos antes de usar en UI.
- No asumir estructura exacta sin normalizacion.
- Agregar mensajes de error de usuario en espanol neutro.

## Versionado y contratos

- Basar cambios en OpenAPI oficial.
- Si cambia una entidad/campo, actualizar:
  - mapeos
  - tests
  - documentacion tecnica
