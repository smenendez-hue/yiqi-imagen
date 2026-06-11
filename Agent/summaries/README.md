# Agent/summaries - Internal summaries

title: Internal summaries index
tags: agent, summaries, context, memory
description: Stores short internal summaries for pages, flows, component groups, and recurring topics.

Read this when:
- A task touches a page, flow, component group, or topic that future agents may revisit.
- You need a quick context refresh without rereading the full source or full docs.

Do not read this when:
- The task is a trivial edit in one named file.
- The summary is not related to the current task.

## Purpose

Internal summaries reduce repeated context loading. They do not replace source code,
tests, or public documentation. They are a fast map for future agents and reviewers.

This is mainly for derived projects and active apps built from this documentation.
In this DS packaging repo, create summaries only for real recurring topics.

## Required when

Create or update a summary when a task changes or investigates:

- a page or screen;
- a login, API, deploy, or data flow;
- a component group or design pattern;
- a repeated error or regression area;
- a script or tool that future agents will use.

## Do not store

- Secrets, tokens, passwords, credentials, or API keys.
- Production customer data.
- Raw logs with sensitive data.
- Large copied code blocks.

## Summary template

```md
# Topic name

title:
tags:
description:

Read this when:
- ...

Do not read this when:
- ...

## Current behavior

## Main files

## Contracts and assumptions

## Risks and regressions

## Verification

## Last reviewed
```

## Writing rules

- Keep summaries short.
- Use ASCII for operational summaries.
- Link to files instead of copying long code.
- Update the summary when behavior, structure, contracts, risks, or verification steps change.
