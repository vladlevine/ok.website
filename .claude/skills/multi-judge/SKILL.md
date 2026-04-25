---
name: multi-judge
description: Run a multi-angle internal review on high-stakes outputs before delivering them. Use this when the cost of being wrong is real — strategic decisions, client-facing content, financial estimates, complex plans, or anything the user will act on. Three internal judges evaluate from different angles, then synthesize into a better final output. Trigger automatically when you sense the stakes are high, even if not explicitly asked.
---

# Multi-Judge Review

For high-stakes outputs, a single pass isn't enough. This skill runs three internal judges — each evaluating from a different perspective — then synthesizes their feedback into the best possible final version.

The core insight: a single model asking "is this good?" is biased toward confirming its own work. Three distinct evaluation angles catch more.

## When to use this (not every task — reserve for high stakes)

- Strategic recommendations the user will act on
- Client-facing deliverables
- Content going live publicly (where it represents the user's brand)
- Financial estimates or business decisions
- Any plan where being wrong costs real time or money
- Complex analyses where assumptions could be wrong

## The Three Judges

Run all three internally. No need to show the user the judge outputs — just the improved final version.

### Judge 1: The Domain Expert
*"Is this actually correct?"*
- Are the facts right?
- Is the logic sound?
- Are there assumptions that should be stated explicitly?
- Would an expert in this area push back on anything?
- Score this dimension: PASS / CONCERN / FAIL

### Judge 2: The User
*"Does this actually answer what was asked?"*
- Does this match the user's voice, tone, and communication style?
- Is this what they actually need, or what they literally asked for? (Sometimes different)
- Is the format right for how they'll use this?
- Would they read this and feel like it understood their situation?
- Score this dimension: PASS / CONCERN / FAIL

### Judge 3: The Skeptic
*"What breaks this?"*
- What are the edge cases or failure modes?
- What's the strongest counterargument?
- What's missing that a critical reader would immediately notice?
- If this turned out to be wrong, what's the most likely reason why?
- Score this dimension: PASS / CONCERN / FAIL

## Synthesis (majority voting)

After all three judges weigh in internally:

1. **Majority vote first:** If 2+ judges score PASS on a dimension, it stands. If 2+ score CONCERN or FAIL, it needs fixing.
2. **Fix only real concerns** — items where 2+ judges flagged issues.
3. **Discard minority concerns** — one judge worried but the other two are fine? Leave it alone. Over-hedging makes outputs worse.
4. **If all three judges FAIL on the same dimension** — stop and rethink the approach entirely before delivering.

## Always internal passes — no subagents

Run all three judges as internal reasoning passes. Do NOT spawn subagents for judging. Internal passes with deliberately distinct prompts get 90% of the benefit at near-zero extra cost.

## Output format

Deliver the final output cleanly. No need to expose the judge process unless the user asks. If the judges caught something significant, a one-line note is fine: "Worth noting: [key caveat]." Keep it minimal.

## Example

**Task:** Recommend whether the user should hire a video editor.

**Judge 1 (Expert):** CONCERN — Cost analysis is missing. On a Manhattan salary this matters.

**Judge 2 (User):** PASS — Energy budget over grinding. Hiring frees energy for the actual goal.

**Judge 3 (Skeptic):** CONCERN — Finding a good editor is itself a time/energy cost. Cheap editors create revision loops. What's the break-even?

**Majority vote:** 2/3 flagged concerns on completeness. Fix: add cost range, vetting approach, and alternatives. Judge 2's PASS on tone/fit confirmed — don't change the framing.

**Deliver refined version with cost context included.**
