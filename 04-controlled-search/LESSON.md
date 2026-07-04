# 04 — Add controlled search

## What happened

`useState` remembers the search text. The input displays that state and updates
it on every change, making it a controlled input. `filter` derives the visible
movies from the original catalog and current query.

## Teach

- State is a component's changing memory.
- An event handler receives a browser event.
- Derived values usually do not need their own state.
- Normalizing both strings makes search case-insensitive.

## Trace the data

`input event → setQuery → render → filter → visible cards`

## Try it

Remove one call to `toLowerCase()` and predict which searches will fail.

## Done when

Typing filters immediately, clearing the field restores all movies, and the
result count stays correct.
