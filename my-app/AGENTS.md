<!-- BEGIN:nextjs-agent-rules -->
# This Is Not Necessarily The Next.js You Know

This project uses a current Next.js version. APIs, conventions, and file structure may differ from older examples or training data. Before changing routing, data fetching, metadata, layouts, or build configuration, read the relevant guide in `node_modules/next/dist/docs/` and heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Guide

## Project Purpose

This is a frontend-first course search and CAO points helper application for students exploring Irish third-level courses.

The goal is to help users:

- Browse and search courses.
- Understand course information clearly.
- Compare course options.
- See useful course metadata such as institution, CAO code, NFQ level, requirements, and points.
- Eventually estimate or compare Leaving Cert points.

The app should be built step by step. Do not try to build the whole product at once.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Feature-based frontend folder structure

This is currently a frontend-first project. Backend work should not begin until the frontend structure, user experience, and mock-data flows make sense.

## Main Folder Rules

Use these folders for the following responsibilities:

- `src/app`
  - Next.js routes, pages, layouts, loading states, and route-specific files.
  - Route files belong here, but feature logic should usually live outside this folder.

- `src/components/ui`
  - Reusable low-level UI components.
  - shadcn/ui components belong here.
  - Keep these generic. They should not know about courses, CAO points, or business rules.

- `src/components/layout`
  - Layout components shared across pages.
  - Examples: `Header`, `Footer`, `Navigation`, page shells, and responsive layout wrappers.

- `src/features/courses`
  - Course-related code.
  - Examples: course types, mock course data, course cards, course listing UI, filters, and course detail helpers.

- `src/features/points-calculator`
  - Future Leaving Cert points calculator code.
  - Keep calculator UI, types, and calculation logic grouped here when that phase starts.

- `src/lib`
  - Shared helper functions and utilities used across multiple features.
  - Examples: formatting helpers, config helpers, and general utility functions.

## Development Rules

- Make small, focused changes.
- Do not change unrelated files.
- Do not add new dependencies unless they are clearly needed and explained.
- Do not add backend code yet.
- Do not fetch from APIs until the backend phase begins.
- Prefer mock data during the early frontend phases.
- Keep components beginner-readable.
- Use clear names for files, components, props, and types.
- Avoid overly clever TypeScript.
- Keep business logic out of reusable UI components where possible.
- Prefer simple, local decisions over broad abstractions in early phases.

## Component Rules

- Layout components belong in `src/components/layout`.
- Generic reusable UI components belong in `src/components/ui`.
- Feature-specific components belong inside their feature folder.
- Course-specific components should live in `src/features/courses/components`.
- Points calculator components should live in `src/features/points-calculator/components` when that phase starts.
- If a component only makes sense for one feature, keep it inside that feature folder.
- If a component is reused across unrelated features, consider moving it to `src/components/ui` or `src/components/layout`, depending on its purpose.

## TypeScript Rules

- Create clear types for data shapes.
- Course-related types should go in `src/features/courses/types`.
- Points calculator types should go in `src/features/points-calculator/types` when needed.
- Avoid `any` unless there is a clear reason.
- Prefer simple readable types over advanced TypeScript patterns.
- Name types after the real thing they represent, such as `Course`, `CourseRequirement`, or `PointsTotal`.

## Styling Rules

- Use Tailwind CSS for styling.
- Use shadcn/ui where it makes sense.
- Keep the UI clean, simple, responsive, and readable.
- Do not over-design early phases.
- Make mobile layouts readable and not overcrowded.
- Avoid styling choices that make course information harder to scan.
- Use consistent spacing, headings, and card patterns as the UI develops.

## Phase-Based Development

Respect the current phase of the project.

- Phase 0: Project setup only.
  - Do not build real pages or features.

- Phase 1: Static layout, header, footer, navigation, responsive shell.
  - Do not build course cards or course data yet.

- Phase 2: Fake course data, course cards, course listing page.
  - Use mock course data only.
  - Do not fetch from APIs.

- Phase 3: Search and filter UI.
  - Focus on client-side search and filtering using mock data.
  - Do not add backend search.

- Phase 4: Course detail page using mock data.
  - Use mock data for course details.
  - Do not add real database or API calls.

- Phase 5: Backend begins later.
  - Do not start backend work until explicitly asked.

When unsure which phase applies, ask or inspect the current roadmap before making changes.

## Explanation Rule

After making changes, explain:

- Which files changed.
- Why each file changed.
- What the new code or document sections do.
- Any beginner traps to watch out for.

Keep explanations practical and beginner-friendly.

## Testing And Checking

Only run commands that exist in `package.json`.

Recommended checks:

- `npm run lint`
- `npm run build` when the change could affect app compilation, routing, imports, or rendering.

If a check cannot be run, explain why.

## Safety Rules

- Do not delete existing useful work without explaining why.
- Do not rename files or folders unless necessary.
- Do not make broad refactors during small feature tasks.
- Ask before changing the project direction.
- Avoid large uncontrolled code generation.
- Keep changes aligned with `docs/project-spec.md` and `docs/frontend-project-roadmap.md`.
