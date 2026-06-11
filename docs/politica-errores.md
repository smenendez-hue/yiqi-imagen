# Política de errores: mensaje al usuario vs. log técnico

Separar **lo que ve el usuario final** de **lo que se registra para diagnóstico**. Nunca
mezclar los dos: el usuario no debe ver stack traces ni códigos crudos; el log no debe
quedarse sin contexto técnico.

## Principios

1. **Mensaje de usuario:** claro, accionable, en **español neutro**, sin jerga ni detalle interno.
2. **Log técnico:** completo, en el backend, con contexto suficiente para reproducir.
3. **Nunca** exponer al usuario: stack traces, SQL, tokens, nombres de variables/endpoints internos, `schemaId`.
4. Cada error capturado se **loguea una vez** con su contexto y se traduce a un mensaje de usuario.

## Mensaje al usuario final

- Tono neutro y respetuoso; decir qué pasó y qué puede hacer.
- No culpar al usuario ni dar falsa precisión.
- Ofrecer la siguiente acción cuando exista (reintentar, volver, contactar soporte).

Ejemplos:

| Situación | ❌ Evitar | ✅ Preferir |
|-----------|-----------|------------|
| Token expiró | "Error 401 Unauthorized" | "Tu sesión expiró. Iniciá sesión de nuevo." |
| Sin permisos | "403 Forbidden" | "No tenés permisos para esta acción." |
| Falla remota | "Internal Server Error (NullPointer...)" | "No pudimos completar la operación. Probá de nuevo en unos minutos." |
| Validación | "campo X null en payload" | "Faltan datos obligatorios. Revisá el formulario." |

## Log técnico (backend)

Registrar, como mínimo: timestamp, endpoint/operación, código HTTP, id de correlación,
`userId` (si aplica), resumen del error remoto. **Sin** tokens, contraseñas ni PII.

## Mapeo de códigos HTTP (alineado con docs/yiqi-api.md)

| Código | Log técnico | Acción + mensaje de usuario |
|--------|-------------|-----------------------------|
| `401` | token inválido/expirado | limpiar sesión y reautenticar — "Tu sesión expiró." |
| `403` | sin permisos | no reintentar — "No tenés permisos para esta acción." |
| `409` | conflicto de estado/clave única | mostrar conflicto funcional — "Este registro ya existe / cambió de estado." |
| `5xx` | error remoto YiQi o intermedia | reintentar con criterio y registrar — "No pudimos completar la operación." |

## Estados de datos en UI

- Cuando no hay fuente real, informar explícitamente: "No disponible" o "Dato de ejemplo".
- No mostrar `undefined`, `NaN` ni valores crudos: usar estados vacíos claros.

## Checklist
- [ ] El usuario nunca ve stack/código crudo/token.
- [ ] Cada error se loguea una vez con contexto técnico (sin datos sensibles).
- [ ] Mensajes de usuario en español neutro y accionables.
- [ ] Códigos `401/403/409/5xx` mapeados a acción + mensaje.
- [ ] Estados "No disponible"/"Dato de ejemplo" cuando no hay fuente real.
