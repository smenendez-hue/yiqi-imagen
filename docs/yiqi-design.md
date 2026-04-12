# Lineamientos de Diseno Estandar YiQi

## Tokens

Usar variables CSS del sistema en lugar de colores hardcodeados.

Ejemplo base:

```css
:root {
  --cyan: #00ccff;
  --bg: #0a0e27;
  --accent-blue: #1a5299;
  --accent-green: #10b981;
}
```

## Tipografias

- UI general: Inter
- Datos, tablas tecnicas y codigo: IBM Plex Mono

## Responsive

- Breakpoint principal: `max-width: 980px`
- Todo componente nuevo debe contemplar mobile first o fallback mobile.

## Consistencia visual

- Reusar estilos y componentes existentes.
- Mantener contraste y legibilidad.
- CTA principales con color de token primario.

## Copy

- Espanol neutro
- Mensajes claros, accionables y breves

## Login

- El acceso debe verse como una pantalla independiente de la aplicacion autenticada.
- Reusar el patron definido en `docs/yiqi-login.md` para estructura, copy y estados.

## Tema Dark / Light (Obligatorio)

Todas las aplicaciones YiQi con dominio `*.yiqi.com.ar` deben incluir selector visible de tema (Dark / Light) y respetar el mismo comportamiento.

Reglas obligatorias:

- Mostrar el selector en la zona superior derecha de la aplicacion autenticada.
- Aplicar tema mediante atributo global (`data-theme="dark|light"`) en `html`.
- Persistir preferencia en cookie compartida con `domain=.yiqi.com.ar`, `path=/`, `max-age=31536000`, `samesite=lax`.
- Mantener fallback en `localStorage` para entornos locales o dominios no `yiqi.com.ar`.
- Si no hay preferencia guardada, usar `prefers-color-scheme` del sistema operativo.
- El cambio de tema debe aplicar inmediatamente sin recargar la pagina.

Implementacion de referencia:

```js
const THEME_COOKIE_KEY = "yiqi_theme";

function setThemePreference(theme) {
  const isYiqiDomain = window.location.hostname.endsWith("yiqi.com.ar");
  const domainPart = isYiqiDomain ? "; domain=.yiqi.com.ar" : "";
  document.cookie = `${THEME_COOKIE_KEY}=${theme}; path=/; max-age=31536000; samesite=lax${domainPart}`;
  localStorage.setItem("yiqi-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}
```
