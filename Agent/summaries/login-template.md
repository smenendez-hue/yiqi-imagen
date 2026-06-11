# Login template

title: YiQi login template
tags: login, template, nextjs, auth-ui
description: Internal summary for the reusable Next.js login template.

Read this when:
- A task changes `template/login/`.
- A project needs the standard YiQi login screen.

Do not read this when:
- The task is about backend authentication contracts only.
- The task is unrelated to login UI templates.

## Current behavior

`template/login/` provides a copy/paste Next.js client login screen with an
animated inline YiQi logo, status slot without reflow, username/password fields,
show password button, remember-user checkbox, submit state, forgot-password
message, and footer link.

The template is intentionally UI-only. The consuming project must wire
`onSubmit` to its own backend or internal Next.js auth route.

## Main files

- `template/login/yiqi-login-template.tsx`
- `template/login/yiqi-login-template.css`
- `template/login/yiqi-logo-animated.tsx`
- `template/login/README.md`
- `template/login/preview.html`

## Contracts and assumptions

- Do not store passwords, tokens, refresh tokens, API keys, or credentials.
- Remember-user stores only the username under a configurable storage key.
- Project-specific copy must be passed through props such as `appName` and
  `description`.
- The template must not mention a business module such as pedidos unless the
  consuming project passes that copy.

## Risks and regressions

- Visual drift from the source login screen.
- Accidental coupling to a specific app auth provider or route.
- CSS dependency on Tailwind or shadcn. The template should stay plain CSS.

## Verification

- Run repo tests.
- Run visual QA from `template/login/preview.html`.
- Search for credentials or project-specific copy before publishing.

## Last reviewed

2026-06-11
