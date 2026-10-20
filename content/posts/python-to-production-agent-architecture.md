---
title: "From Script to System: Structuring Python LLM Applications"
date: "2026-01-20"
tags: ["PYTHON", "ARCHITECTURE", "FASTAPI"]
readTime: "7 min read"
excerpt: "Practical lessons on moving from messy Jupyter notebooks and raw API calls to clean, testable agent pipelines in production."
category: "BACKEND ARCHITECTURE"
---

Almost every interesting AI experiment begins in a Jupyter notebook. You import `openai`, prototype a few prompts, run a loop, and marvel at the results.

Then comes Monday morning: you need to turn that script into a reliable backend service with streaming responses, error retries, rate limiting, and observability. Suddenly, the conversational magic crashes into the harsh realities of distributed software engineering.

## The Flaws of "Prompt Spaghetti"

The most prevalent architectural smell in early-stage LLM applications is **prompt spaghetti**—raw prompt strings interpolated with business logic scattered across route handlers:

```python
# Anti-pattern: Business logic and prompt templates tightly coupled
@app.post("/analyze")
async def analyze(text: str):
    prompt = f"Analyze this tone: {text}..."
    res = client.chat.completions.create(...)
    return parse_json(res.choices[0].message.content)
```

This breaks down quickly:
* You cannot unit-test prompting logic without invoking live, expensive API calls.
* Edge cases (malformed JSON, token limits, model timeouts) require defensive boilerplate in every endpoint.
* Swapping underlying model providers or testing fine-tuned weights requires refactoring routing layers.

## The Layered Agent Pattern

To build resilient AI backends in Python (typically with FastAPI and Pydantic), we divide the system into four strict layers:

```
┌──────────────────────────────────────────────┐
│  1. API & Transport (FastAPI, WebSockets)    │
└──────────────────────┬───────────────────────┘
                       ▼
┌──────────────────────────────────────────────┐
│  2. Agent Orchestration (State Graphs, RAG)  │
└──────────────────────┬───────────────────────┘
                       ▼
┌──────────────────────────────────────────────┐
│  3. Model Client Gateway (Retries, Fallback) │
└──────────────────────┬───────────────────────┘
                       ▼
┌──────────────────────────────────────────────┐
│  4. Tooling & Vector Store (DB, APIs, Cache) │
└──────────────────────────────────────────────┘
```

### 1. Pydantic Structured Outputs as Contracts

Never ask an LLM for free-form text if downstream code needs to consume it. Enforcing structured output contracts using Pydantic guarantees predictable schemas:

```python
from pydantic import BaseModel, Field

class SentimentReport(BaseModel):
    dominant_emotion: str = Field(description="Primary detected emotion")
    confidence_score: float = Field(ge=0.0, le=1.0)
    key_triggers: list[str] = Field(default_factory=list)
```

### 2. State Graphs over Linear Chains

Complex tasks rarely follow linear step-by-step executions. When building conversational agents or autonomous problem-solvers, modeling the system as a **State Graph** (such as with LangGraph) allows:
* **Conditional Branching:** Routing queries to specialized sub-agents based on intent classification.
* **Human-in-the-Loop:** Pausing execution state to await user confirmation before triggering high-consequence tools.
* **Self-Correction Loops:** If an agent tool fails or returns invalid parameters, the graph routes the error back to the model for automated retry.

## Final Word

AI models may be non-deterministic, but the systems wrapping them must be rock-solid. Clear separation of concerns, strict type validation, and robust error recovery turn experimental prompts into dependable engineering.
