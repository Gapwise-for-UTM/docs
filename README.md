<div align="center">

<img src="public/logo-mark-white.svg" width="116" alt="Gapwise deer mark" />

# Gapwise Developer Documentation

### Build on the deterministic campus-intelligence layer behind Gapwise.

**Official documentation for the Gapwise public UTM campus API, OpenAPI contract, published JavaScript/TypeScript and Python SDKs, data/provenance model, security architecture, and permissioned AI/MCP integration.**

[![Live Docs](https://img.shields.io/badge/Live_Docs-docs.gapwise.ca-111111?style=for-the-badge&logo=vercel&logoColor=white)](https://docs.gapwise.ca)
[![OpenAPI 3.1](https://img.shields.io/badge/OpenAPI-3.1-6BA539?style=for-the-badge&logo=openapiinitiative&logoColor=white)](https://api.gapwise.ca/openapi.json)

<sub>Astro · Starlight · Vercel</sub>

<br />

**[Docs](https://docs.gapwise.ca)** · **[Gapwise](https://gapwise.ca)** · **[API](https://api.gapwise.ca/v1)** · **[Data](https://data.gapwise.ca)** · **[AI](https://ai.gapwise.ca)** · **[Status](https://status.gapwise.ca)** · **[GitHub](https://github.com/Gapwise-for-UTM)**

</div>

---

## What this repository is

This repository is the canonical public developer-documentation surface for **Gapwise**, a multi-surface campus-intelligence ecosystem created and engineered by **Andrew Muratov** and owned on GitHub by the **Gapwise for UTM** organization (`Gapwise-for-UTM`).

Gapwise is not only a student timetable website. The ecosystem includes the core web/PWA product, native Android client, deterministic public API and published SDKs, open campus-data/provenance portal, permissioned OAuth/MCP AI integration, developer documentation, and an independent operational status service.

Andrew's work across the ecosystem spans **full-stack software engineering, cybersecurity and privacy engineering, platform architecture, API and SDK design, data engineering, developer infrastructure, mobile engineering, and permissioned AI integration**.

The docs follow released first-party contracts rather than inventing parallel behavior. Public campus API and SDK semantics come from [`Gapwise-for-UTM/gapwise`](https://github.com/Gapwise-for-UTM/gapwise); Android behavior comes from [`Gapwise-for-UTM/android`](https://github.com/Gapwise-for-UTM/android); AI/MCP behavior comes from [`Gapwise-for-UTM/ai`](https://github.com/Gapwise-for-UTM/ai); provenance and dataset explanations are surfaced through [`Gapwise-for-UTM/data`](https://github.com/Gapwise-for-UTM/data); operational state belongs to [`Gapwise-for-UTM/status`](https://github.com/Gapwise-for-UTM/status).

Canonical API:

```text
https://api.gapwise.ca/v1
```

Authoritative machine-readable contract:

```text
https://api.gapwise.ca/openapi.json
```

Published SDKs:

```bash
npm install @gapwise/sdk@0.1.1
# JSR: @gapwise/sdk@0.1.1
python -m pip install gapwise==0.1.0
```

The JavaScript/TypeScript package is published on npm and JSR. The Python package is published on PyPI through Trusted Publishing and was independently clean-installed and exercised against the production API.

---

## Documentation map

| Area | Covers |
| --- | --- |
| **Start** | Platform overview, architecture, and quickstart |
| **SDKs** | JavaScript/TypeScript and Python clients |
| **API** | Buildings, places, routing, gap planning, errors, envelopes, and defensive rate-limit handling |
| **Guides** | Integration recipes and common workflows |
| **Data** | Dataset identity, provenance, uncertainty, attribution, and links to Gapwise Data |
| **AI & MCP** | OAuth/delegation, live tool surface, permissions, privacy, mutation boundaries, and compatibility |
| **Security** | Trust boundaries, threat model, privacy architecture, evidence, and validation limits |
| **Platform** | Versioning, provenance, uncertainty, changelog, and source-of-truth rules |
| **Operations** | Links to the independent Gapwise Status service and incident communication |

The public API exposes campus intelligence only. It does not expose student timetables, accounts, friends, private sync state, credentials, AI delegation state, or precise live location. Private AI access exists behind a separate OAuth-protected, explicitly delegated boundary.

---

## Source-of-truth rules

- `gapwise` + OpenAPI 3.1 are authoritative for the public HTTP contract and deterministic timetable, gap, routing, campus, API, and primary student-state semantics.
- `android` consumes canonical Gapwise semantics for the native Android experience rather than creating a second timetable/routing implementation.
- `ai` is authoritative for the live MCP/OAuth tool, permission, delegation, and bounded-mutation behavior.
- `data` owns the campus-data schema, provenance, evidence, transformations, limitations, and reuse model.
- `status` owns current operational monitoring and incident-communication state.
- `docs` describes released behavior and preserves uncertainty rather than turning unknown facts into confident claims.
- Named AI clients should not be described as verified until end-to-end production evidence exists.
- Public v1 must never imply private student-data access.

The official JavaScript/TypeScript SDK is published as `@gapwise/sdk@0.1.1` on npm and JSR; the official Python SDK is published as `gapwise==0.1.0` on PyPI. Release claims in docs must remain synchronized with actual registry state.

---

## Gapwise ecosystem

| Repository | Role | Primary surface |
| --- | --- | --- |
| **[`gapwise`](https://github.com/Gapwise-for-UTM/gapwise)** | Core web/PWA, deterministic student/campus engine, public API, OpenAPI, and SDK source | [gapwise.ca](https://gapwise.ca) / [api.gapwise.ca](https://api.gapwise.ca/v1) |
| **[`android`](https://github.com/Gapwise-for-UTM/android)** | Native Kotlin + Jetpack Compose Android client | Android app |
| **[`ai`](https://github.com/Gapwise-for-UTM/ai)** | OAuth/MCP layer for explicitly delegated student context and bounded actions | [ai.gapwise.ca](https://ai.gapwise.ca) |
| **[`data`](https://github.com/Gapwise-for-UTM/data)** | Open campus-data, provenance, schema, validation, and reuse portal | [data.gapwise.ca](https://data.gapwise.ca) |
| **[`docs`](https://github.com/Gapwise-for-UTM/docs)** | Canonical developer documentation | [docs.gapwise.ca](https://docs.gapwise.ca) |
| **[`status`](https://github.com/Gapwise-for-UTM/status)** | Independent service-health monitoring and incident communication | [status.gapwise.ca](https://status.gapwise.ca) |

All six repositories form one product ecosystem with deliberate separation of concerns, consistent branding, cross-links, trust boundaries, and source-of-truth ownership.

---

## Local development

Requires Node.js 22 or newer.

```bash
git clone https://github.com/Gapwise-for-UTM/docs.git
cd docs
npm install
npm run check
npm run build
npm run dev
```

`main` is the production documentation branch and deploys to `docs.gapwise.ca`. The status service is deployed independently from [`status`](https://github.com/Gapwise-for-UTM/status); documentation should link to it rather than presenting the docs repository as the status source.

---

## Project relationship

Gapwise is an independent project created by Andrew Muratov. It is not an official University of Toronto service and is not affiliated with or endorsed by the University of Toronto.
