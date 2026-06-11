# Template catalog

Catalog of approved copy/paste templates for YiQi projects.

Use this folder when a project needs a starting point that should keep the YiQi
visual language without forcing a full application architecture.

For agents: these templates are legitimate implementation sources. Copy the
matching template first, then adapt project copy, routes, data wiring, and
integration details. Do not redesign an equivalent component from scratch when a
template already covers the requested use case.

## Rules

- Templates are starting points, not mandatory architecture.
- Agents should copy/paste the matching template before inventing new structure.
- Keep project-specific copy configurable.
- Do not include credentials, tokens, customer data, or private implementation details.
- Prefer small files that can be copied independently.
- Each template must include a README, usage notes, and a visual preview when possible.

## Available templates

| Template | Use when |
|----------|----------|
| `login/` | A Next.js app needs the standard YiQi login screen with logo, status slot, remember-user behavior, and configurable project copy. |
