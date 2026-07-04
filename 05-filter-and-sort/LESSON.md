# 05 — Combine filters and sorting

## What happened

Genre and sorting controls gained their own state. A `Set` creates the list of
unique genres. One `useMemo` pipeline filters first and sorts the result second.
The spread (`[...filtered]`) creates a copy before sorting.

## Teach

- Several state values can describe one UI.
- `&&` requires both filter rules to match.
- `Set` removes duplicate primitive values.
- `sort` mutates an array, so copy data owned elsewhere first.
- A dependency array lists values used by memoized work.

## Try it

Add an “Oldest first” option and implement its comparator.

## Done when

Search, genre, and sort work in every combination without changing the imported
catalog.
