# 02 — Render movie data

## What happened

Movie information lives in `src/data/movies.js`. The component uses
`curatedMovies.map(...)` to turn every object into an article. React's `key`
helps it identify each item between renders.

## Teach

- Arrays hold repeated data.
- Objects group related values such as title, year, and rating.
- `map` transforms data into JSX.
- A list key must be stable and unique; an IMDb ID is better than an array index.

## Try it

Add one movie object to the data file. The page should gain a card without any
new JSX.

## Done when

Eight distinct cards render from one `map` expression.
