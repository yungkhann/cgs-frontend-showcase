# 10 — Compose the finished showcase

## What happened

The concepts from the first nine stages are composed into the finished
CineScope app. `src/App.jsx` coordinates state and derived data while focused
files under `src/components`, `src/data`, and `src/services` each own one job.

The final app includes:

- reusable navigation, search, card, empty-state, and modal components;
- title and genre filtering plus rating/year sorting;
- favorite persistence and a favorites-only view;
- accessible dialog focus and keyboard behavior;
- optional OMDb search with loading, error, and empty states;
- responsive Tailwind CSS presentation.

## Teach

- Composition is the payoff: small ideas cooperate to make a real product.
- State remains near the components that coordinate it.
- Presentational components receive values and callbacks through props.
- Accessibility and failure states are completion criteria, not bonus polish.

## Try it

Draw the component tree and label where every piece of state lives. Then choose
one extension: fetch full OMDb details, cancel stale searches, or add tests.

## Done when

Students can explain the data flow from a search or favorite click all the way
to the next render—not merely demonstrate that it works.

## Tailwind focus

Review how theme tokens, responsive variants, state variants, arbitrary values,
and component-local utility classes compose into the complete visual system.
