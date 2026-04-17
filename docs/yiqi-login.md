# Estandar de Login YiQi

## Objetivo

Definir un patron comun de autenticacion para todas las aplicaciones YiQi, de modo que el acceso, la experiencia visual y el manejo tecnico de sesion sean consistentes.

## Estructura de pantalla

- El login y la aplicacion autenticada deben ser dos pantallas distintas.
- Si la app usa una sola pagina HTML, se deben renderizar en contenedores separados y mostrar solo uno a la vez.
- No mezclar sidebar, topbar ni contenido del dashboard con la pantalla de acceso cuando no hay sesion.
- El estado visual esperado es:
  - sin sesion: solo pantalla de login
  - autenticando: login visible con estado de carga
  - con sesion: solo aplicacion autenticada

## Layout visual

- Usar una tarjeta de acceso centrada y sobria.
- Tipografia UI: Inter.
- Tipografia de datos o etiquetas tecnicas: IBM Plex Mono.
- Usar tokens YiQi existentes; evitar colores hardcodeados por pantalla.
- CTA principal con color de token primario.
- Copy en espanol neutro, breve y accionable.
- Responsive validado en `<= 980px`.

## Campos y copy base

- Titulo recomendado: `Iniciar sesion`.
- Campo usuario: label `Usuario`.
- Campo password: label `Clave`.
- Boton principal: `Entrar` o `Iniciar sesion`.
- Mensaje idle recomendado: `Ingresa con tu usuario YiQi para abrir la aplicacion.`
- Mensajes de error: claros, sin detalles tecnicos sensibles.

## Flujo tecnico

- La autenticacion debe resolverse contra el endpoint de seguridad definido en OpenAPI YiQi.
- No enviar credenciales a servicios no controlados por backend propio.
- El frontend no debe hardcodear secretos ni credenciales.
- Se recomienda backend/proxy propio para:
  - solicitar token
  - centralizar headers y errores
  - normalizar respuestas
- Si aplica, completar contexto de usuario con endpoint de login information.

## Manejo de estado

- Modelar al menos estos estados:
  - `idle`
  - `loading`
  - `success`
  - `error`
- Durante `loading`:
  - deshabilitar submit
  - evitar doble envio
  - mostrar feedback visible
- En `error`:
  - mantener visible el login
  - preservar el campo usuario si mejora la experiencia
  - mostrar mensaje accionable en espanol neutro
- En `success`:
  - ocultar completamente la pantalla de login
  - mostrar solo la aplicacion autenticada

## Implementacion sugerida

1. `services/http-client`: wrapper HTTP con timeout y error base.
2. `services/auth`: login/logout/refresh si aplica.
3. `state/auth-controller`: coordinacion de estados de autenticacion.
4. `ui/render-auth`: render de pantalla de acceso y mensajes.
5. `main`: bootstrap de sesion persistida y cambio de pantalla.

## Persistencia de sesion

- Persistir solo lo minimo necesario.
- Evitar almacenar datos sensibles innecesarios.
- Si la sesion persistida es invalida, limpiar storage y volver a login sin dejar UI intermedia inconsistente.

## Checklist minimo

- [ ] Login y app autenticada no se muestran juntas.
- [ ] Errores HTTP de login tienen mensaje de usuario claro.
- [ ] Sin secretos hardcodeados en cliente.
- [ ] Estados `idle/loading/success/error` implementados.
- [ ] Responsive del login validado.
- [ ] Copy en espanol neutro.
- [ ] Tests o validaciones del flujo de login ajustados.
