# Integracion con API YiQi

## Objetivo

Esta guia define el minimo operativo para integrar una app con YiQi sin depender de supuestos implicitos sobre autenticacion, identidad, esquema o estructura del cliente.

## Autenticacion base

El flujo base de autenticacion YiQi es:

1. `POST /token` para obtener el access token.
2. `GET /api/accountapi/GetLoginInformation` para resolver identidad y contexto de sesión.
3. Reutilizar el token como `Bearer` en el header `Authorization` para el resto de los modulos.

`GetLoginInformation` no es un paso accesorio. Es el healthcheck canonico post-login y el origen primario de los datos que la aplicacion necesita para operar con consistencia.

## Contexto mínimo por sesión

Toda sesión de trabajo debería poder reconstruirse, como mínimo, con:

- `accessToken`
- `userId`
- `userName`
- `schemaId`

Segun el caso, tambien conviene conservar en memoria de trabajo:

- `schemaName`
- `host`

## Cuando aplica completar contexto de usuario

En la practica, aplica siempre que la app vaya a consumir endpoints de negocio, mostrar identidad de usuario o necesite resolver el esquema activo. Es decir: obtener el token por si solo no alcanza para una implementacion real.

Si un endpoint de negocio requiere `schemaId`, ese valor debe salir de `GetLoginInformation` o de una configuracion controlada del backend. No debe venir de UI libre, variables manuales o parametros editables por el usuario final.

## Identidad y esquema

- La identidad operativa del usuario se resuelve desde `GetLoginInformation`.
- `userId` debe considerarse la referencia primaria para acciones de usuario, autoría, responsable actual o trazabilidad.
- `schemaId` debe considerarse el metodo primario para determinar el esquema de trabajo.
- Si hay configuracion complementaria por ambiente, debe estar controlada y documentada; no debe contradecir la respuesta de login.

## Manejo de token

- No hay refresh token documentado como contrato base.
- Cuando el token expira o deja de ser valido, la aplicacion debe volver a autenticarse con `POST /token`.
- No almacenar credenciales en codigo.
- Evitar exponer el token YiQi directamente al cliente si la arquitectura permite encapsularlo en backend propio.

## Patron recomendado de cliente

Separar responsabilidades reduce acoplamiento y hace mas claro el manejo de errores y mapeos.

- `http-client`: transporte HTTP, timeout, headers base y parseo de errores remotos.
- `auth-service`: `login`, `getLoginInformation`, cierre de sesión y normalización de contexto autenticado.
- `yiqi-api`: funciones por endpoint o módulo de negocio.
- `mappers`: conversion entre payload remoto, modelo interno y DTO de UI.

## Estructura minima sugerida

```text
services/
  http-client.ts
  auth-service.ts
  yiqi-api.ts
  mappers.ts
```

## Pseudocodigo minimo

```ts
const token = await auth.login(username, password)
const loginInfo = await auth.getLoginInformation(token)

const client = createYiqiClient({
  token,
  schemaId: loginInfo.schemaId,
})
```

La creación del cliente debe suceder después de resolver `schemaId`. Crear un cliente solo con token deja incompleto el contexto de negocio cuando el módulo requiere esquema.

## Reglas de robustez

- Manejar respuestas no `2xx` con errores controlados.
- Validar campos requeridos antes de usar datos en UI o logica de negocio.
- No asumir estructura exacta sin normalizacion.
- Agregar mensajes de error de usuario en espanol neutro.
- Registrar suficiente contexto tecnico en logs del backend sin exponer datos sensibles al usuario final.

## Regla fuerte de ids para detalle

Toda UI que navegue a detalle debe usar `item.id`. No usar `ID` ni inferir nombres alternativos. Si `id` no viene, corregir el query/smartie, no agregar fallbacks.

El `id` canonico debe identificarse desde el fixture real o el OpenAPI del endpoint consumido. No se debe construir una ruta de detalle con valores `undefined`, con campos de negocio como numero/codigo/nombre, ni con cadenas de fallback sin validacion explicita del contrato.

## Convencion UI para listados

En listados, navegar al detalle con click en fila. Reservar botones solo para acciones secundarias como descargar, y cortar propagacion del click.

```tsx
<tr onClick={() => navigate(`/facturas/${item.id}`)}>
  <td>{item.FACT_NUMERO}</td>
  <td>
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        downloadFactura(item.id)
      }}
    >
      Descargar
    </button>
  </td>
</tr>
```

Antes de navegar, validar que `item.id` exista y sea del tipo documentado. Si no existe, el bug esta en el contrato consumido o en la consulta que arma el listado.

## Checklist para agentes

- [ ] Identificar campo `id` desde fixture/OpenAPI.
- [ ] No navegar con valores `undefined`.
- [ ] No usar fallbacks multiples para ids sin validacion.
- [ ] Agregar E2E que haga click en fila y verifique URL final.

## Fixtures reales de lista

Los fixtures de referencia viven en:

- `fixtures/facturas-lista.json`
- `fixtures/ordenes-compra-lista.json`
- `fixtures/ordenes-pago-lista.json`

Cada fixture conserva campos reales del OpenAPI publicado y expone `items[].id` como identidad canonica para navegacion a detalle.

## Regla simple de lint/test

Ejecutar:

```bash
npm run test:detail-navigation
```

La regla busca patrones de riesgo como `/undefined`, `item.ID`, `dataset.id` sin validacion evidente y rutas construidas con campos no documentados para navegacion de detalle. Si el chequeo falla, corregir el mapeo/query o agregar una validacion explicita antes de navegar.

## Errores frecuentes

| Codigo | Significado habitual | Accion recomendada |
| --- | --- | --- |
| `401` | token inválido, ausente o expirado | limpiar sesión local y forzar nueva autenticación |
| `403` | usuario autenticado sin permisos suficientes | informar restriccion y evitar reintentos ciegos |
| `409` | conflicto de clave unica o estado de negocio incompatible | mostrar conflicto funcional y revisar payload |
| `5xx` | error remoto en YiQi o dependencia intermedia | reintentar con criterio y registrar detalle tecnico |

## Regla de consumo de datos

Cuando una app consuma un endpoint nuevo de YiQi, se debe documentar explicitamente:

- que devuelve
- que ids aporta
- que campos consume la aplicacion
- si requiere `schemaId`, `userId` u otro contexto derivado del login

## Versionado y contratos

- Basar cambios en OpenAPI oficial y en la documentacion exportada vigente.
- Si cambia una entidad o campo, actualizar mapeos, tests y documentacion tecnica en la misma iteracion.
- No promover a produccion endpoints nuevos o mapeos nuevos sin dejar documentado el contrato consumido.
