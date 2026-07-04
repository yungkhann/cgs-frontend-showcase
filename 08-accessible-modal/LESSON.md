# 08 — Build an accessible modal

## What happened

Clicking a card stores its movie object as `selectedMovie`. That truthy value
conditionally mounts the modal. The modal focuses its close button, listens for
Escape, locks page scrolling, and cleans everything up when it unmounts.

## Teach

- `null` can represent “nothing is selected.”
- Conditional rendering mounts and unmounts UI.
- `useRef` holds a DOM element without causing a render.
- Effects must undo event listeners and global class changes.
- Dialog roles, labels, focus, and keyboard behavior are part of the feature.

## Try it

Open a modal with the keyboard, press Escape, and confirm focus returns to the
card that opened it.

## Done when

The modal closes via its button, Escape, and backdrop; clicking inside it does
not close it.
