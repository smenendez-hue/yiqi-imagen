# Uso rapido del Design System YiQi

Esta guia es para quien solo necesita consumir el Design System desde una app.
No hace falta leer la documentacion completa del repositorio para este caso.

## 1. Incorporar estilos al proyecto

```html
<link rel="stylesheet" href="https://diguardia.github.io/yiqi-imagen/styles.css">

<!-- Evitar copiar el contenido localmente -->
```

## 2. Activar tema

```html
<!-- El tema por defecto es "system" (sigue la preferencia del OS) -->
<body data-theme="system">

<!-- Forzar dark o light -->
<body data-theme="dark">
<body data-theme="light">
```

El toggle tiene 3 estados: `"dark"` -> `"system"` -> `"light"`.

## 3. Fondos

**Dashboards y apps**: solo radiales, sin grilla.

```html
<body data-theme="system">
  <!-- El fondo radial se aplica automaticamente desde styles.css -->
```

**Marketing y landing**: radiales + grilla 52x52px.

```css
body::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 52px 52px;
}
```
