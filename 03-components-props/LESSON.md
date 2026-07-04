# 03 — Extract a reusable component

## What happened

The card markup moved from `App.jsx` into `MovieCard.jsx`. `App` passes each
movie down through a prop. The parent owns the list and the child presents one
item.

## Teach

- Props are inputs passed from parent to child.
- Destructuring `{ movie }` names the prop we need.
- Components reduce repetition and create clear responsibilities.
- Data flows down the component tree.

## Try it

Add a `showRating` prop and conditionally hide the rating row.

## Done when

React DevTools shows one `App` with eight `MovieCard` children.

## Tailwind focus

Utility classes move with `MovieCard`, keeping a component's markup, behavior,
and presentation together without a separate card stylesheet.
