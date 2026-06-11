# Project rules template

title: Project-specific operating rules
tags: agent, constraints, credentials, environments, api
description: Template for constraints that must be explicit in derived projects and active apps.

Read this when:
- A derived project has allowed schemas, environments, users, credentials, API limits, or operational restrictions.
- A task needs to know what the agent may verify, query, or change.

Do not read this when:
- This repository is only being used as design-system packaging documentation.
- The task is a trivial edit unrelated to runtime behavior.

## Purpose

Use this file in derived projects to store project-specific operating constraints.
Do not put private credentials or production secrets here.

## Recommended sections for derived projects

```md
## Allowed environments

## Allowed schema ids or tenants

## Test credential policy

## API query limits and safe probes

## Actions requiring user approval

## Local verification commands

## Known risky areas
```

## Rules

- Store only non-secret rules and allowed ranges.
- Do not store passwords, tokens, API keys, refresh tokens, or production customer data.
- If credentials are needed, document how to configure them locally instead of writing values.
- If a schema, tenant, or environment is restricted, state it clearly.
- If an external API should not be probed broadly, state the safe read-only checks.
- Update this file when the project constraints change.
