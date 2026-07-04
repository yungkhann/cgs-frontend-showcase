# CineScope showcase

A finished, portfolio-ready React movie discovery app. It works immediately with an offline curated catalog. If an OMDb key is present, submitted title searches use live API results.

## Run

From the repository root:

```bash
npm install
npm run dev:showcase
```

Open `http://localhost:5174`.

## Optional live OMDb search

Copy the example file:

```bash
cp movie-search-showcase/.env.example movie-search-showcase/.env.local
```

Add your OMDb key and restart the development server. `.env.local` must not be committed. A Vite client variable is visible in browser code, so use a server proxy if the provider treats its key as a production secret.

## Included

- responsive editorial design with plain CSS;
- searchable, filterable, and sortable catalog;
- favorites persisted in local storage;
- favorites-only view;
- accessible movie details modal with Escape and focus restoration;
- loading, error, and empty states;
- optional OMDb integration;
- no UI framework and no TypeScript.
