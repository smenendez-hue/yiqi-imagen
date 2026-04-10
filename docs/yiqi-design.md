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
