---
name: self-critique
description: Automatically critique and refine any output before delivering it. Use this skill whenever high-quality output matters — writing, analysis, plans, code, strategy, or creative work. Trigger when the user wants something polished, when the stakes are high, or when you sense the first draft might not be good enough. Even if not explicitly asked, run a self-critique pass before finalizing any substantial response. This skill makes Claude meaningfully better by catching its own blind spots before the user sees them.
---

# Self-Critique

This skill wraps any task in a critique-and-refine loop. The goal is to catch problems before the user sees them — missing logic, weak reasoning, unclear writing, wrong assumptions, incomplete answers.

## When to run this

Run the full loop on any output that is high-stakes, client-facing, complex, or where the first draft might not be good enough. Skip for routine lookups and simple factual questions.

## The Loop

### Step 1: Generate

Complete the task as requested. Produce a full first draft.

### Step 2: Critique

Immediately after generating, run this internal critique. Don't show it to the user — just do it:

Ask yourself:
- **Completeness:** Did I actually answer what was asked? Is anything missing?
- **Accuracy:** Are my facts, assumptions, and logic correct?
- **Clarity:** Would the user understand this immediately, or does it require re-reading?
- **Relevance:** Is everything in here earning its place, or is some of it filler?
- **Fit:** Does this match the user's voice, style, and actual situation?
- **Blind spots:** What would a skeptic immediately push back on?

### Step 3: Refine

If the critique surfaces real issues — fix them. Rewrite sections, cut filler, add missing logic.

If the critique confirms the draft is solid — deliver it without changes.

### Step 4: Deliver

Deliver the refined output. No need to mention the critique process unless the user asks. Just give them the better version.

## What this is NOT

- Don't turn this into a committee exercise. One focused critique pass, then decide and move.
- Don't add a "here's what I changed" section unless asked. The user wants the result, not the process.
- Don't over-hedge or add disclaimers as a result of the critique. Fix problems, don't just flag them.

## Example

**Task:** Write a TikTok caption for a process video.

**First draft:** "Painting today! Love this pattern. #folkart #painting"

**Self-critique:** Too generic. No hook. Doesn't reflect voice. Missing the core angle. Hashtags are weak.

**Refined:** "800-year-old embroidery pattern, bold black outline, see what happens. #folkpainting #slavicart #modernslavic #paintingprocess"

**Deliver the refined version.**
