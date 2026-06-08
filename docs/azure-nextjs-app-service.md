# Azure App Service + Next.js

Guía de diagnóstico para apps YiQi con Next.js desplegadas en Azure App Service. Usar antes de cambiar código de aplicación cuando el servicio falla al arrancar.

## Producción sin build

Si el log muestra:

```text
Production build not found. Running next build before start...
```

Azure no recibió `.next/BUILD_ID` dentro del artifact desplegado.

En GitHub Actions con `actions/upload-artifact@v4`, los archivos y carpetas ocultas no se suben por defecto. Como `.next` es oculta, el step de artifact debe incluir:

```yaml
- name: Upload artifact for deployment job
  uses: actions/upload-artifact@v4
  with:
    name: node-app
    path: .
    include-hidden-files: true
    exclude: |
      .git
      .git/**
      .env
      .env.*
```

## Turbopack en runtime

Si el log muestra:

```text
Next.js 16.x (Turbopack)
Next.js inferred your workspace root
```

el runtime está compilando con Turbopack. En Azure App Service, forzar Webpack para el build de producción:

```json
{
  "scripts": {
    "build": "next build --webpack"
  }
}
```

Si el proyecto tiene `scripts/ensure-production-build.mjs`, el fallback también debe invocar:

```js
["build", "--webpack"]
```

El log del fallback debe ser inequívoco:

```text
Production build not found. Running next build --webpack before start...
```

## Validación local

Antes de pushear:

- `npm run build` debe mostrar `(webpack)`.
- Simular Azure sin build previo: mover temporalmente `.next`, correr `npm run prestart` y confirmar que muestra `next build --webpack` y `(webpack)`.
- Correr los tests relevantes.

Si Azure sigue mostrando `(Turbopack)` después de pushear, no seguir cambiando código: el deploy probablemente está usando un artifact o commit viejo/incompleto.
