# 07 — Persist favorites

## What happened

The state initializer reads saved IDs from `localStorage` once. An effect writes
the newest IDs after each change. A favorites-only toggle derives a smaller list
from the same catalog and shows an empty state when needed.

## Teach

- `localStorage` stores strings, so arrays need JSON serialization.
- A lazy state initializer avoids reading storage on every render.
- `useEffect` synchronizes React state with an external system.
- `try/catch` protects the app from malformed saved data.
- Empty UI is a normal product state, not an error.

## Try it

Favorite two films, refresh, and inspect the saved value in DevTools under
Application → Local Storage.

## Done when

Favorites survive refresh and the favorites-only view handles both populated
and empty lists.
