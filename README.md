# CineScope: ten independent Vite projects

Every numbered folder is a complete, standalone Vite project. Students can
open one folder in their editor, install it, run it, and inspect its entire
source tree without relying on code from another step.

| Step | Folder | Main idea |
| --- | --- | --- |
| 01 | `01-page-shell` | JSX and semantic page structure |
| 02 | `02-render-data` | arrays, objects, `map`, and keys |
| 03 | `03-components-props` | components and props |
| 04 | `04-controlled-search` | state, events, and filtering |
| 05 | `05-filter-and-sort` | combined derived data |
| 06 | `06-favorites` | lifted state and callbacks |
| 07 | `07-persistence` | effects and local storage |
| 08 | `08-accessible-modal` | lifecycle, refs, and dialogs |
| 09 | `09-api-states` | async requests and UI states |
| 10 | `10-final-showcase` | final composition and polish |

## Run any step

From the repository root:

```bash
npm install
npm run dev --workspace cinescope-step-01
```

Replace `01` with any step through `10`. You can also run a project directly:

```bash
cd movie-search-showcase/04-controlled-search
npm install
npm run dev
```

Each folder contains its own:

```text
index.html
package.json
vite.config.js
eslint.config.js
LESSON.md
src/
├── main.jsx
├── App.jsx
├── styles.css
└── supporting data, components, or services used in that step
```

Every project uses Tailwind CSS v4 through `@tailwindcss/vite`. The small
`styles.css` file imports Tailwind and defines the shared color/font tokens;
layout, spacing, responsive behavior, states, and component styling are visible
as utility classes directly in the JSX.

## Suggested classroom rhythm

1. Open the current snapshot and predict its behavior.
2. Read its `LESSON.md` together.
3. Recreate the change from the previous snapshot in small pieces.
4. Test keyboard behavior and a narrow viewport.
5. Complete the “Try it” task before advancing.

## Optional live OMDb search

Steps 09 and 10 support live search. In that project's folder, copy the example:

```bash
cp .env.example .env.local
```

Add your OMDb key and restart the development server. `.env.local` must not be committed. A Vite client variable is visible in browser code, so use a server proxy if the provider treats its key as a production secret.

## The finished project includes

- responsive editorial design with Tailwind CSS;
- searchable, filterable, and sortable catalog;
- favorites persisted in local storage;
- favorites-only view;
- accessible movie details modal with Escape and focus restoration;
- loading, error, and empty states;
- optional OMDb integration;
- no UI framework and no TypeScript.
