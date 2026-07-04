# 06 — Lift favorite state

## What happened

`App` stores an array of favorite movie IDs because every card and the header
need the same truth. Each card receives `isFavorite` plus a callback for
reporting the user's intent back to the parent.

## Teach

- Shared state belongs in the closest shared parent.
- Props move data down; callback props move intent up.
- Functional state updates safely use the current value.
- `filter` removes an ID; spread creates a new array when adding one.
- `aria-pressed` communicates toggle state to assistive technology.

## Try it

Explain why storing whole movie objects would duplicate data. Then add a button
that clears the ID array.

## Done when

Every heart toggles independently and the header count is always accurate.

## Tailwind focus

Choose complete utility strings for each state. The favorite button switches
between inactive border utilities and active acid-background utilities.
