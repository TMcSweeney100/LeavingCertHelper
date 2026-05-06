# Prompt Templates

A small set of reusable prompts for planning, building, explaining, reviewing, and refactoring frontend features.

These templates are intended to keep development controlled, beginner-friendly, and aligned with the project structure described in `README.md` and `AGENTS.md`.

---

## Template A: Planning Prompt

Use this when you want to plan a feature before writing any code.

```text
Do not write code yet.

I want to build [feature].

Please inspect the existing structure and propose:

1. Files you would create
2. Files you would edit
3. Components needed
4. Types needed
5. Any risks or beginner traps
6. How we will test it

Follow the architecture in README.md and AGENTS.md.

Wait for my approval before coding.
```

---

## Template B: Small Implementation Prompt

Use this when you want to build one small, clearly defined feature.

```text
Build only [small feature].

Context:
[Explain current page/component]

Constraints:
- Do not add new dependencies.
- Do not change unrelated files.
- Keep code beginner-readable.
- Follow README.md and AGENTS.md.
- Use TypeScript, but avoid advanced TypeScript unless necessary.

Done when:
- [Specific visible result]
- Lint passes
- You explain the changed files
```

---

## Template C: Explanation Prompt

Use this after code has been written and you want a beginner-friendly explanation.

```text
Explain the code you just wrote in beginner-friendly terms.

Focus on:

1. What each file does
2. What each component does
3. What the TypeScript types mean
4. What props are being passed
5. What state is being used
6. What I should change if I wanted to modify this feature
```

---

## Template D: Review Prompt

Use this when you want the current implementation reviewed before making any changes.

```text
Review the current implementation.

Look for:

1. Files in the wrong folder
2. Business logic inside UI components
3. Duplicated code
4. Unclear TypeScript types
5. Any unnecessary dependency
6. Anything that goes against README.md or AGENTS.md

Do not change files yet.

Give me a review first.
```

---

## Template E: Refactor Prompt

Use this when the feature works, but you want the code made clearer without changing behaviour.

```text
Refactor this feature without changing behaviour.

Goal:
Make the code easier for a beginner to understand.

Rules:
- Do not add new features.
- Do not change the UI.
- Do not change API behaviour.
- Rename things only if it makes the code clearer.
- Explain each refactor and why it helps.
```

---

## Suggested Usage Order

A useful workflow would be:

1. Start with **Template A** to plan the feature.
2. Use **Template B** to build one small piece.
3. Use **Template C** to understand the new code.
4. Use **Template D** to review the implementation.
5. Use **Template E** only when the code is working and you want to clean it up.

This keeps each step small and reduces the chance of accidentally changing unrelated parts of the project.
