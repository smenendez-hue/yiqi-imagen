# Política de uso y actualización de fixtures

Los fixtures (`fixtures/*.json`) son **datos de ejemplo** que reflejan la forma real de los
payloads de la API YiQi. Sirven para desarrollar UI, escribir tests y fijar el contrato de
identidad (`items[].id`). **No son datos productivos.**

## Estructura de cada fixture

Cada archivo conserva campos reales del OpenAPI publicado y declara su origen:

```json
{
  "source":   { "module": "...", "endpoint": "...", "detailEndpoint": "...", "openApi": "..." },
  "identity": { "field": "id", "type": "integer", "rule": "Usar items[].id para navegar a ..." },
  "items":    [ { "id": 120184, "...": "..." } ]
}
```

- `source`: módulo, endpoint de lista, endpoint de detalle y URL del OpenAPI.
- `identity`: campo de id canónico, su tipo y la regla de navegación.
- `items`: registros de ejemplo con campos reales del contrato.

## Reglas de uso

- Usar fixtures para desarrollo y tests; **nunca** como fuente de datos en producción.
- La identidad canónica para navegar a detalle es `items[].id` (no `ID`, número, código ni nombre).
- Al consumir un endpoint, identificar el `id` desde el fixture o el OpenAPI, no inventarlo.

## Reglas de actualización

- Mantener los fixtures **alineados con el OpenAPI vigente**: si cambia una entidad/campo, actualizar el fixture, los mapeos y los tests en la misma iteración.
- Conservar el bloque `source` e `identity` al editar; son parte del contrato documentado.
- **Sin PII ni datos reales de clientes:** usar valores ficticios/anonimizados.
- Si se agrega un fixture nuevo, registrarlo en `fixtures/INDEX.md`.

## Fixtures actuales

Ver `fixtures/INDEX.md`. Hoy: `facturas-lista.json`, `ordenes-compra-lista.json`, `ordenes-pago-lista.json`.

## Relación con tests

`npm run test:detail-navigation` valida que el código navegue con `item.id`. Los fixtures
fijan ese contrato: si el `id` cambia de nombre/tipo en el OpenAPI, primero se actualiza el
fixture y luego el código y los tests.
