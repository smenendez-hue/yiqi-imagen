# Agent/ - AI agent instructions

title: Agent entrypoint
tags: agent, llm, routing, context
description: Minimal operating instructions for AI agents working in this repository.

This directory is for Claude, Copilot, and other agents. It is intentionally
short: read this file, then route through `INDEX.md`. Do not load the whole
repository documentation by default.

## Golden rule

Before acting, decide what kind of task this is and read the matching route in
`INDEX.md`. Do not ignore this directory. Do not read everything either.

For every task, the agent must answer these four questions before editing:

1. What is the task type?
2. Which routed docs apply?
3. Which routed docs explicitly do not apply?
4. What checklist, summary, tool, or error-memory step will be needed at the end?

If the answer is "none", say why in plain language before closing the task.

This rule is meant to help both the human user and the LLM. The human can see
what context was used; the LLM avoids guessing, skipping required guidance, or
loading too much documentation.

## Repository role

This repository is the **canonical source** of the YiQi Design System (since
2026-06-11). DS tokens, components, catalog, and docs are edited **here**; see
`../LEEME-FUENTE-DS.md`. The website repo `diguardia/www.yiqi` **consumes** the DS
(loads the published `styles.css` from the CDN) and receives synced artifacts via
`../scripts/sync-to-www.mjs` (`npm run sync`).

## Minimal rules

1. Classify the task before reading more; see `INDEX.md`.
2. For a trivial change or in a file already named by the user, read only that
   file plus any directly required route.
3. For a task touching auth, API, deploy, data contracts, scripts, generated
   files, agent memory, project rules, or recurring errors, read the matching
   routed document before editing.
4. Use `../docs/convenciones-documentacion.md` for UTF-8 and LF rules.
5. Write the brand as **YiQi**.
6. Do not invent history or store secrets, credentials, tokens, or passwords.
7. For derived projects and active app work, apply the matching checklist at the
   end of every task. In this DS packaging repo, apply it when the task has real
   implementation impact or reusable knowledge.
8. Tell the user, in plain language, which checklist was used, what was verified,
   and what remains risky or unverified.
9. In derived projects and active apps, when a task touches a relevant page,
   flow, component group, or topic, create or update a short internal summary in
   `summaries/` so future agents do not need to reread the same code from
   scratch.
10. In derived projects, keep project-specific constraints in `project-rules.md`
   when they exist: allowed schemas, environments, test credentials policy,
   external API limits, and actions that require explicit user approval.
11. For recurring errors, start with `error-memory/errors/INDEX.md`. Do not read
    every error file by default.
12. In derived projects, import the relevant `error-memory/` index and category
    files at project setup so recurring mistakes are available before work
    starts. Keep only root causes and fixes; never import secrets or raw logs.
13. When a routed template exists in `../template/`, copy/paste it as the
    legitimate starting point and adapt it to the project. Do not redesign the
    same component from scratch unless the route says not to use the template or
    the user gives a project-specific reason.

## Next step

Open `INDEX.md` and read only the rows that match your task.
