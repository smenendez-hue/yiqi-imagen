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

## Contraste AA (Obligatorio)

- Todo texto e icono funcional debe cumplir contraste minimo WCAG 2.1 AA:
  - texto normal: 4.5:1
  - texto grande (>= 24px o 18px bold): 3:1
  - componentes de UI y bordes activos: 3:1
- No usar color hardcodeado en componentes para resolver contraste puntual.
- Definir y usar tokens por estado para componentes interactivos:
  - base
  - hover
  - active
  - focus
- En componentes de navegacion lateral, el estandar minimo incluye tokens separados por tema:
  - `--nav-item-text`
  - `--nav-item-bg`
  - `--nav-item-border`
  - `--nav-item-hover-text`
  - `--nav-item-hover-bg`
  - `--nav-item-hover-border`
  - `--nav-item-active-text`
  - `--nav-item-active-bg`
  - `--nav-item-active-border`

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
