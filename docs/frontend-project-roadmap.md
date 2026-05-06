# Frontend Project Roadmap

This document outlines the planned frontend build phases for the project. The goal is to start with a clean project structure, then gradually add layout, fake data, course listing, filtering, and course detail pages before beginning any backend work.

---

## Phase 0: Project Setup

### Goal

Set up the frontend project structure only. No real features should be built in this phase.

### Tasks

- Create the Next.js app.
- Use the Next.js App Router.
- Use TypeScript.
- Install and configure Tailwind CSS.
- Install and configure `shadcn/ui`.
- Create the initial folder structure.
- Create `README.md`.
- Create `AGENTS.md`.

### Folder Structure

Create the following folders:

```text
src/app
src/components/ui
src/components/layout
src/features/courses
src/features/points-calculator
src/lib
```

### Rules

- Do not build pages yet.
- Do not add backend code.
- Do not fetch data from an API.
- Focus only on setup and structure.

### Explanation Required

After setup, explain what each folder is for in beginner-friendly terms.

---

## Phase 1: Static Layout

### Goal

Create the basic visual shell for the application.

### Tasks

- Create a homepage shell.
- Add a header.
- Add a footer.
- Add basic navigation.
- Create a simple responsive layout that works on desktop and smaller screens.

### Rules

- Keep the page static for now.
- Do not add real course data yet.
- Do not add backend code.

---

## Phase 2: Fake Course Data and Course Cards

### Goal

Create the first course listing using fake data. This phase is mainly about getting the course structure, card layout, and rendering logic in place before using real data later.

### Files to Create

```text
src/features/courses/types/course-types.ts
src/features/courses/data/mock-courses.ts
src/features/courses/components/CourseCard.tsx
src/app/courses/page.tsx
```

### Tasks

- Define a `Course` type.
- Create mock course data.
- Create a reusable `CourseCard` component.
- Display multiple course cards on the courses page.

### Rules

- Use TypeScript.
- Do not fetch from an API.
- Use fake/mock data only.
- Keep the structure clean so it can be replaced with real data later.

### Explanation Required

Explain:

- What the `Course` type is for.
- What props the `CourseCard` component receives.
- How `map()` renders multiple cards from the mock course list.

---

## Phase 3: Search and Filter UI

### Goal

Add a basic search and filtering interface for the course listing.

### Initial Filter Ideas

- Search text.
- NFQ level filter.
- Points filter.

### Possible Additional Filters to Consider

The filtering idea is good, but it may need more thought before implementation. Other useful filters could include:

- Course area or subject area.
- Tags.
- Topics.
- Institution.
- Location.
- Course type.
- Full-time or part-time.
- Undergraduate or postgraduate.

### Notes

This phase should focus on building a useful UI and UX for finding courses. The exact filters can be refined once the course card and course data shape are clearer.

---

## Phase 4: Course Detail Page

### Goal

Create a dynamic course detail page for individual courses.

The idea for this phase is strong, but the exact content shown on the card and detail page may need more refinement as the UI develops.

### Route to Create

```text
/courses/[slug]
```

### Tasks

- Create a dynamic course detail page at `/courses/[slug]`.
- Use mock course data.
- Make each `CourseCard` link to its course detail page.
- Find the matching course using the course `slug`.

### Detail Page Content

Show:

- Course title.
- Institution.
- CAO code.
- NFQ level.
- Points.
- Requirements placeholder.
- Official URL placeholder.

### Rules

- Use mock course data only.
- Do not fetch from an API.
- Do not add backend code.

### Explanation Required

Explain:

- What `[slug]` means in Next.js.
- How the detail page finds the matching course.
- How clicking a course card navigates to the detail page.

---

## Phase 5: Backend Planning

### Goal

Do not start backend development until the frontend UI and UX feel clear and useful.

### Notes

The backend should begin only after the main frontend structure, layouts, course listing, filters, and course detail pages are in a good place.

There will probably be frontend details that are missing at the start. That is okay. As the project moves through the phases, the structure and missing pieces should become clearer.

The important thing is to start with a clean foundation and improve it phase by phase.

---

## Overall Approach

The project should be built gradually:

1. Set up the project structure.
2. Build the static layout.
3. Add fake data.
4. Display course cards.
5. Add search and filtering.
6. Add course detail pages.
7. Refine the UI and UX.
8. Begin backend work only when the frontend direction is clear.

