# Project Spec: Freelance Agent 2026

## 1. Goal
[cite_start]Create a full-stack platform to automate freelance workflows using AI agents, serving as a professional portfolio[cite: 365].

## 2. Tech Stack (Senior Architecture)
- [cite_start]**Backend:** Node.js + Fastify (High performance)[cite: 301, 307].
- **Frontend:** React + TailwindCSS.
- [cite_start]**Database:** PostgreSQL 16 (Dockerized)[cite: 307].
- [cite_start]**Infrastructure:** Docker + DigitalOcean VPS[cite: 450].
- [cite_start]**AI Engine:** Gemini 1.5 Pro (via Google Cloud API)[cite: 267].

## 3. Core Modules (Phase 1)
- [cite_start]**Auth:** JWT-based secure login [CRITICAL TEST][cite: 307, 308].
- [cite_start]**Spec Gen:** Agent that converts natural language into technical specs[cite: 382].
- [cite_start]**Deployment:** GitHub Actions to VPS (CI/CD)[cite: 403].

## 4. Quality Guardrails
- [cite_start]**Critical Path:** 100% test coverage for Auth and Business Logic[cite: 365].
- [cite_start]**Security:** OWASP Top 10 compliance[cite: 284].
- [cite_start]**Human Role:** Architect and Orchestrator (The human is responsible, not the AI)[cite: 22, 136].