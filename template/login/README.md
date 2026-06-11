# YiQi login template for Next.js

Reusable login screen extracted from a real YiQi app and generalized for future
projects. It keeps the approved visual structure while making app-specific text
and submit behavior configurable.

![Login template preview](./assets/login-template-preview.png)

## What this includes

| File | Purpose |
|------|---------|
| `yiqi-login-template.tsx` | Client React component for the login form and states. |
| `yiqi-login-template.css` | Plain CSS for the login screen. Import it from your app layout or global CSS entry. |
| `yiqi-logo-animated.tsx` | Inline animated YiQi logo. No image asset required. |
| `preview.html` | Static preview used for visual QA. |

## When to use

- A Next.js app needs a YiQi login screen.
- The project wants the standard centered card, animated logo, status slot, and
  remember-user behavior.
- The app has its own backend or proxy for authentication.

## When not to use

- The project already has a custom auth provider and only needs minor styling.
- The screen is not a YiQi login.
- The project cannot use React client components.

## Install

Copy these files into your project, for example:

```text
components/auth/yiqi-login-template.tsx
components/auth/yiqi-logo-animated.tsx
styles/yiqi-login-template.css
```

Import the CSS once from `app/layout.tsx` or your global CSS entry:

```tsx
import '@/styles/yiqi-login-template.css'
```

Use the component in `app/page.tsx` or your login route:

```tsx
'use client'

import { useRouter } from 'next/navigation'
import { YiQiLoginTemplate } from '@/components/auth/yiqi-login-template'

export default function LoginPage() {
  const router = useRouter()

  return (
    <YiQiLoginTemplate
      appName="Mi app YiQi"
      description="Ingresa con tu usuario YiQi para abrir la aplicacion."
      onSubmit={async ({ username, password }) => {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })

        if (!response.ok) {
          return { error: 'No pudimos iniciar sesion. Revisa tus datos.' }
        }

        router.replace('/home')
        return { ok: true }
      }}
    />
  )
}
```

## Project-specific text

Change these props per project:

- `appName`
- `description`
- `forgotPasswordMessage`
- `rememberStorageKey`
- redirect logic inside `onSubmit`

The template should not mention a specific module such as pedidos, facturas, or
compras unless the project passes that copy explicitly.

## Security rules

- Never store passwords, tokens, refresh tokens, or API keys in `localStorage`.
- The remember-user option stores only the username.
- Run authentication through a backend or internal Next.js route when possible.
- User-facing errors must stay functional and avoid technical details.

## Visual QA

The preview was generated from `preview.html` with the same CSS classes used by
the template. Re-run visual QA after changing layout, spacing, logo, colors, or
state rendering.

