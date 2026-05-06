# Leaving Cert Course Discovery Platform — Project Specification

**Document status:** Draft v0.1  
**Purpose:** Long-term product, architecture, and AI-agent context document  
**Primary use:** Keep project direction clear and give useful context to LLMs/coding agents  
**Last updated:** 2026-05-06

---

## 1. Project Summary

This project is a web application for students in Ireland who are preparing for, or have completed, the Leaving Certificate and want to explore third-level course options.

The product will provide a clear, modern, searchable course discovery experience for CAO-related college courses in Ireland. It should help students quickly understand:

- What courses are available
- Which institution offers each course
- Information about a course they are intersted in, and career prospects from this course. 
- What CAO points were previously required
- What NFQ level the course is
- What subject or grade requirements may apply
- Where to find the official course page
- How their expected Leaving Cert points compare with course points

The product should not replace official sources such as CAO or institution websites. It should act as a clearer, easier-to-use discovery layer, that shows them all the inforamtion they need, in one easy to use place - that links users back to official information.

---

## 2. Product Goal

The goal is to build a student-friendly platform that makes Irish third-level course discovery easier, faster, and clearer than browsing many separate college websites.

The product should:

1. Bring course information into one central place.
2. Present course information in a clean and understandable way.
3. Let students search and filter courses by practical criteria, easily.
4. Help students estimate their Leaving Cert points.
5. Link every course back to the official source.
6. Give the user a very good ux experience that allows them to see all the options that are availible to them course wise,
    and look into courses they they think they might be interested in more.
7. Give the user a breakdown of how points have increased and descreased over the last few years (could display this on a graph). This allows them to plan if they are going to have enough points to do this course.
8. Show users the most visited course pages.
9. Provide a foundation for future features such as subject hubs, article content, popularity insights, and AI-assisted study resources.

---

## 3. Target Users

### 3.1 Primary User: Leaving Cert Student

A student wants to explore courses they may apply for through the CAO.

They may want to answer questions such as:

- What courses can I do with around 450 points?
- What courses would allow me to have a career in ...
- Which colleges offer computer science?
- What courses require Higher Level Maths?
- What Level 8 courses are available?
- What is the official page for this course?
- What points should I aim for?

### 3.2 Secondary User: Parent or Guardian

A parent or guardian may use the site to help a student understand course choices.

They need:

- Clear explanations on what courses are composed of.
- What are the career aspirations after these courses
- Trustworthy links
- Simple navigation
- No overly technical language

### 3.3 Secondary User: Guidance Counsellor

A guidance counsellor may use the site as a quick reference tool.

They need:

- Fast search
- Accurate course metadata
- Clear official-source links
- Easy comparison between courses
- A ui that is easy for them to get all the inforation that they need to show themselves, a class ect. 

---

## 4. Product Principles

### 4.1 Clarity Over Complexity

The user should be able to understand a course page quickly. Avoid overwhelming the screen with unnecessary information.

### 4.2 Official Sources Must Remain Visible

Every course page should link to the official institution or CAO-related source where possible.

The app must not imply that it is the official source of admissions truth.

### 4.3 Accuracy Is More Important Than Feature Volume

Incorrect course points or requirements can seriously mislead users. It is better to have fewer, better-verified courses than many uncertain records.

### 4.4 Mobile-First User Experience

Many students will use the site on phones. Core flows must work well on mobile.

### 4.5 Build Slowly and Understandably

The project is being built with AI assistance. Code should be simple, explainable, and easy for a beginner/intermediate developer to understand.

### 4.6 Avoid Premature Complexity

Do not add accounts, payments, microservices, advanced AI features, or complex infrastructure before the core course discovery product works.
We have decided in our plan to get the front end ui and ux lookign good and working well. We can use fake data until the front end is working well and we are happy with it. We can then move on to the back end.

---

## 5. Product Scope

## 5.1 v0 Scope — Static Frontend Prototype

The v0 version is a frontend-only prototype using mock data.

The purpose of v0 is to validate the user experience, page structure, component structure, and learning workflow before introducing backend and database complexity.

### v0 Includes

- Home page
- Course search/listing page
- Course detail page
- Mock course data stored in frontend files
- Basic filtering by course name
- Basic filtering by NFQ level
- Basic filtering by institution
- Basic filtering by points range
- Basic filtering by career (but this is hard to know how it would be implemented)
- Responsive layout
- Reusable course card component
- Reusable badges for CAO code, NFQ level, and points , required subjects
- Clear official-link placeholder on course pages
- Empty states for no search results

### v0 Does Not Include

- Real backend
- Real database
- Real CAO/course data import
- User accounts
- Authentication
- Payments
- AI-generated notes
- Admin dashboard
- Production scraping
- Analytics
- Public popularity rankings

---

## 5.2 v1 Scope — First Real MVP

The v1 version should turn the prototype into a functional MVP with real backend and database support.

### v1 Includes

- Next.js frontend connected to Spring Boot backend
- PostgreSQL database
- Course listing API
- Course detail API
- Institution data
- Course points data
- Subject/course requirements display
- Official course links
- Last verified date per course
- Points calculator
- Basic course search and filtering
- Seed/import process for course data
- Clear trust/disclaimer messaging
- Production deployment
- Basic testing and validation

### v1 Should Still Avoid

- User accounts
- Saved courses requiring login
- Payments
- AI-generated paid notes
- Fully automated scraping across all colleges
- Public ranking system based on popularity
- Complex recommendation engine
- Microservices
- Dedicated search infrastructure unless PostgreSQL search is insufficient

---

## 5.3 Future Scope Ideas

These are possible future features, but they should not distract from v0/v1.

### v2 Possibilities

- Saved courses using browser local storage
- Course comparison page
- Popular or trending courses
- Subject hub pages
- Past paper links
- Past paper breakdowns
- Article/editorial section
- Guidance content for students
- Simple admin dashboard
- CSV import/review workflow

### v3 Possibilities

- AI-assisted study notes
- AI-generated subject summaries
- Premium study resources
- User accounts
- Saved profiles
- Personalised course suggestions
- Email reminders
- More advanced analytics
- Dedicated search service such as Meilisearch, Typesense, or Elasticsearch

---

## 6. Core User Journeys

### 6.1 Search for a Course by Name

1. Student opens the home page.
2. Student searches for a course, such as "computer science".
3. Student is taken to the course listing page.
4. Matching courses are displayed as cards.
5. Student opens a course detail page.
6. Student sees CAO code, institution, points, level, requirements, and official link.

### 6.2 Find Courses Around Expected Points

1. Student estimates they may get around 450 points.
2. Student opens the course search page.
3. Student sets max or target points.
4. Student sees courses around that points range.
5. Student can filter further by institution, course area, or NFQ level.

### 6.3 Use Points Calculator (This will more then likely be a later feature as it will be easier to implement)

1. Student opens the points calculator.
2. Student enters Leaving Cert subjects.
3. Student selects expected grades.
4. App calculates estimated CAO points.
5. App may suggest searching courses near that points total.

### 6.4 View Course Details

1. Student clicks a course from search results.
2. Student lands on a dedicated course page.
3. Student sees a clean summary of the course, with all the useful information about the course.
4. Student sees official source link.
5. Student sees warning that official sources should be checked before applying.

---

## 7. Core Pages

### 7.1 Home Page

Purpose:

- Explain the product quickly.
- Provide a prominent course search entry point.
- Link to the course browser.
- Link to the points calculator.
- Possibly show popular categories or example course areas later.

Important sections:

- Hero section
- Main search box
- Quick links
- Featured course areas
- Trust/disclaimer note

---

### 7.2 Course Search Page

Purpose:

- Let users browse, search, and filter courses.

Features:

- Search input
- Course result cards
- Filters
  - Institution
  - NFQ level
  - Points range
  - Course category
  - Career category
  - Subject requirement later
- Result count
- Empty state
- Mobile filter drawer

---

### 7.3 Course Detail Page

Purpose:

- Display all relevant information for one course.

Should include:

- Course title
- CAO code
- Institution
- Campus, if applicable
- NFQ level
- Award type
- Duration
- Latest known points
- Points history
- Subject requirements
- General entry requirements
- Course summary
- Official course URL
- Last verified date
- Disclaimer/warning

---

### 7.4 Points Calculator Page

Purpose:

- Help students estimate Leaving Cert points.

Features:

- Add/select subjects
- Select level where relevant
- Select expected grade
- Calculate best six subjects
- Apply Higher Level Maths bonus if applicable
- Show total estimated points
- Link to course search using estimated points

Important note:

- Calculator results should be presented as an estimate only.

---

### 7.5 Subject Hub Pages

Not required in v1, but planned for later.

Purpose:

- Provide subject-specific information, past paper links, and study resources.

Possible content:

- Subject overview
- Past paper links
- Common exam themes
- Study tips
- AI-assisted summary content with disclaimers

---

## 8. Course Data Requirements

A course record should eventually support the following fields.

```ts
type Course = {
  id: string;
  caoCode: string;
  slug: string;
  title: string;
  institutionName: string;
  institutionSlug: string;
  campus?: string;
  nfqLevel: number;
  awardType?: string;
  duration?: string;
  latestPoints?: number | null;
  pointsHistory?: CoursePointsRecord[];
  summary?: string;
  requirementsText?: string;
  subjectRequirements?: SubjectRequirement[];
  officialUrl: string;
  lastVerifiedAt?: string;
};
```

### Field Notes

- `id`: Internal unique identifier.
- `caoCode`: CAO code, such as a course code.
- `slug`: URL-friendly identifier.
- `title`: Course name.
- `institutionName`: Name of college/university.
- `institutionSlug`: URL-friendly institution identifier.
- `campus`: Campus name if relevant.
- `nfqLevel`: NFQ level, such as 6, 7, or 8.
- `awardType`: Award type, such as honours degree, ordinary degree, or certificate.
- `duration`: Course duration.
- `latestPoints`: Most recent known points where available.
- `pointsHistory`: Historical points by year/round.
- `summary`: Short human-readable summary.
- `requirementsText`: Human-readable requirements copied or summarised carefully from verified sources.
- `subjectRequirements`: Structured requirements used for filtering later.
- `officialUrl`: Link to official course page.
- `lastVerifiedAt`: Date the course information was last checked.

---

## 9. Points Calculator Rules (dont need to worry about this yet ans this will be implemented later)

The points calculator should support Leaving Cert CAO points estimation.

Core requirements:

- Allow students to enter multiple subjects.
- Calculate points from selected grades.
- Use best six subjects for total calculation.
- Support Higher Level and Ordinary Level grade mappings.
- Support Higher Level Maths bonus where applicable.
- Clearly explain that the result is an estimate.

The points logic should be separated from UI components.

Example folder:

```text
src/features/points-calculator/logic/calculate-points.ts
```

Reason:

- UI should display the calculator.
- Logic should calculate the result.
- Keeping them separate makes the code easier to test and understand.

---

## 10. Trust, Accuracy, and Disclaimer Requirements

The app must clearly communicate that it is an independent guide, not the official admissions authority.

### Required Trust Features

Each course page should aim to include:

- Official course link
- Last verified date
- Clear source note
- Historical points disclaimer
- Subject requirement warning where needed

### Example Disclaimer

```text
This platform is an independent course discovery tool. Course points, requirements, and details can change. Always confirm information on the official CAO or institution website before applying.
```

### Historical Points Disclaimer

```text
Past points are shown for guidance only and do not guarantee future entry requirements.
```

---

## 11. Recommended Technical Architecture

The decided architecture is:

```text
Next.js frontend
        |
        | REST API calls
        v
Spring Boot backend
        |
        v
PostgreSQL database
```

### 11.1 Frontend

Recommended stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI primitives
- TanStack Query only where needed

Frontend responsibilities:

- Render public pages
- Provide search/filter UI
- Display course data
- Display points calculator
- Provide responsive/mobile-friendly layout
- Handle client-side interactions
- Call backend APIs

### 11.2 Backend

Recommended stack:

- Spring Boot
- Java
- REST API
- Spring Data JPA
- PostgreSQL
- OpenAPI documentation
- Flyway or Liquibase for database migrations

Backend responsibilities:

- Course API
- Institution API
- Points calculation API or points rules API
- Search/filter logic
- Data validation
- Import/seed process
- Data source tracking
- Future admin workflows

### 11.3 Database

Recommended database:

- PostgreSQL

Reason:

- Course data is relational.
- Institutions have many courses.
- Courses have points history.
- Courses have requirements.
- PostgreSQL works well with structured data.
- PostgreSQL can support full-text search for MVP needs.

---

## 12. Local Development Architecture

Local development should eventually run three main services:

```text
Frontend: http://localhost:3000
Backend:  http://localhost:8080
Database: localhost:5432
```

Recommended local setup:

- Run frontend with Next.js dev server.
- Run backend with Spring Boot.
- Run PostgreSQL using Docker Compose.

Example local service structure:

```text
apps/web      -> Next.js frontend
apps/api      -> Spring Boot backend
infra         -> Docker Compose and infrastructure files
docs          -> project documentation
```

---

## 13. Recommended Repository Structure

```text
leaving-cert-course-platform/
  apps/
    web/
      src/
        app/
        components/
        features/
        lib/
        styles/

    api/
      src/main/java/
      src/main/resources/

  docs/
    project-spec.md
    architecture.md
    build-plan.md
    api-contract.md
    data-model.md

  infra/
    docker-compose.yml

  AGENTS.md
  README.md
```

---

## 14. Frontend Structure

Recommended frontend folder structure:

```text
apps/web/src/
  app/
    page.tsx
    courses/
      page.tsx
      [slug]/
        page.tsx
    points-calculator/
      page.tsx
    subjects/
      page.tsx

  components/
    ui/
    layout/

  features/
    courses/
      components/
      api/
      data/
      logic/
      types/

    points-calculator/
      components/
      logic/
      types/

    subjects/
      components/
      types/

  lib/
    api-client.ts
    config.ts
    formatters.ts

  styles/
    globals.css
```

### Frontend Rules

- Route files belong in `src/app`.
- Reusable generic UI belongs in `src/components/ui`.
- Header/footer/navigation belong in `src/components/layout`.
- Course-specific code belongs in `src/features/courses`.
- Points calculator code belongs in `src/features/points-calculator`.
- Business logic should not be buried directly inside page files.
- API calls should not be placed inside purely visual components like `CourseCard`.

---

## 15. Backend Structure

Recommended backend package structure:

```text
ie.coursefinder/
  courses/
    CourseController.java
    CourseService.java
    CourseRepository.java
    Course.java
    CourseDto.java

  institutions/
    InstitutionController.java
    InstitutionService.java
    InstitutionRepository.java
    Institution.java

  points/
    PointsCalculatorController.java
    PointsCalculatorService.java
    LeavingCertPointsRules.java

  search/
    CourseSearchService.java
    CourseSearchCriteria.java

  popularity/
    CourseViewController.java
    CoursePopularityService.java

  imports/
    CourseImportService.java
    SourceRecord.java

  common/
    ApiError.java
    PageResponse.java
```

### Backend Rules

- Controllers expose REST endpoints.
- Services contain business logic.
- Repositories handle database access.
- DTOs define what the API sends/receives.
- Do not expose database entities directly to the frontend unless deliberately approved.
- Keep points calculation logic testable.
- Keep data import logic separate from public API logic.

---

## 16. API Design

Initial API endpoints may include:

```text
GET  /api/v1/courses
GET  /api/v1/courses/{caoCode}
GET  /api/v1/institutions
GET  /api/v1/subjects
GET  /api/v1/points-rules
POST /api/v1/points/calculate
POST /api/v1/course-views
```

Example course search:

```text
GET /api/v1/courses?query=computer&level=8&maxPoints=500&page=0&size=20
```

Example response shape:

```json
{
  "items": [
    {
      "caoCode": "LM121",
      "title": "Computer Science",
      "institutionName": "University of Limerick",
      "nfqLevel": 8,
      "points": 500,
      "slug": "computer-science-university-of-limerick-lm121"
    }
  ],
  "page": 0,
  "size": 20,
  "totalItems": 1
}
```

API contracts should be documented and kept stable where possible.

---

## 17. Initial Database Model

Initial tables may include:

```text
institutions
courses
course_points
course_requirements
subject_requirements
course_categories
course_category_links
course_view_daily_stats
```

### Example Tables

```text
institutions
- id
- name
- short_name
- slug
- website_url

courses
- id
- cao_code
- slug
- title
- institution_id
- campus
- nfq_level
- award_type
- duration
- summary
- requirements_text
- official_url
- last_verified_at

course_points
- id
- course_id
- year
- round
- points

subject_requirements
- id
- course_id
- subject_name
- level_required
- grade_required

course_categories
- id
- name
- slug
```

---

## 18. AI/Codex Development Guidance

This project will be developed with AI assistance, but the human developer must remain in control of architecture and understanding.

### Codex Should Be Asked To

- Work on small tasks.
- Explain each change.
- Follow this specification.
- Follow `README.md`.
- Follow `AGENTS.md`.
- Avoid unrelated changes.
- Avoid adding dependencies unless approved.
- Keep code beginner-readable.
- Explain TypeScript syntax when adding it.
- Explain Next.js concepts when using them.

### Codex Should Not Be Asked To

- Build the whole app at once.
- Add large features without planning.
- Invent new architecture.
- Add Redux unless explicitly approved.
- Add authentication in v0/v1 unless explicitly approved.
- Add payments.
- Add AI notes early.
- Add scraping pipelines before the data strategy is agreed.

### Recommended Prompt Pattern

```text
Goal:
[Small feature to build]

Context:
This is a Next.js App Router + TypeScript frontend with Spring Boot backend planned.
Follow docs/project-spec.md, README.md, and AGENTS.md.

Constraints:
Do not add new dependencies.
Do not change unrelated files.
Do not build backend code unless requested.
Keep code beginner-readable.

Implementation:
[Specific files or feature behaviour]

Learning:
Explain each file changed and any TypeScript/Next.js syntax used.

Done when:
[Specific visible result]
Lint passes.
No TypeScript errors remain.
```

---

## 19. Build Plan

Recommended early build order:

```text
1. Create repository.
2. Add README.md.
3. Add docs/project-spec.md.
4. Add AGENTS.md.
5. Create Next.js app with TypeScript.
6. Add Tailwind CSS and shadcn/ui.
7. Create frontend folder structure.
8. Build site header and footer.
9. Build home page shell.
10. Define Course type.
11. Add mock course data.
12. Build CourseCard.
13. Build /courses page using mock data.
14. Add search by course title.
15. Add NFQ level filter.
16. Add points filter.
17. Add course detail page.
18. Build points calculator shell.
19. Add points calculation logic.
20. Review v0 frontend before backend work.
```

---

## 20. Definition of Done

A task is not complete until:

- The feature works in the browser.
- The code matches the agreed architecture.
- The changed files are understood.
- TypeScript has no errors.
- Lint passes where configured.
- No unrelated files were changed.
- Any new behaviour is manually tested.
- The change is committed to Git.

---

## 21. Open Questions

These questions should be answered over time.

### Product Questions

- What should the final product name be?
- Should Level 9/postgraduate courses be included or excluded?
- Should the site focus only on CAO undergraduate courses at first?
- Should popularity be shown publicly?
- Should users be able to save courses without accounts?
- Should subject hubs be part of v1 or later?

### Data Questions

- What is the first trusted source of real course data?
- Will v1 data be entered manually, imported from CSV, or collected another way?
- How often should course data be verified?
- How should uncertain requirements be displayed?
- How should discontinued courses be handled?

### Technical Questions

- Should points calculation happen only in frontend, only in backend, or both?
- Should OpenAPI-generated frontend types be added in v1?
- Should the backend and frontend stay in a monorepo long-term?
- Which hosting provider should be used first?
- When should PostgreSQL full-text search be replaced by a dedicated search service, if ever?

---

## 22. Key Decisions Already Made

These are the current working decisions.

```text
Frontend framework: Next.js App Router
UI library: React
Language: TypeScript
Styling: Tailwind CSS
Component system: shadcn/ui + Radix UI primitives
Backend: Spring Boot
API style: REST
Database: PostgreSQL
Architecture: Separate frontend and backend
Initial repo style: Monorepo
v0 data: Mock frontend data
v1 data: Real database-backed course data
Search v1: PostgreSQL search
Accounts in v1: No
Payments in v1: No
AI notes in v1: No
Microservices in v1: No
```

---

## 23. Summary for AI Assistants

This project is a student-focused Irish Leaving Cert and CAO course discovery platform.

The immediate goal is to build a clean, modern, mobile-friendly course discovery website where students can search for courses, filter by points/NFQ level/institution, view course details, and use a Leaving Cert points calculator.

The agreed technical direction is:

```text
Next.js App Router + React + TypeScript + Tailwind CSS + shadcn/ui + Radix UI
Spring Boot REST API
PostgreSQL database
```

The project should be built slowly in small, understandable steps. The developer is learning Next.js and TypeScript, so generated code must be beginner-readable and explained clearly. Avoid large uncontrolled code generation. Avoid premature features like accounts, payments, scraping, AI notes, microservices, or complex analytics until the v0/v1 foundations are complete.
