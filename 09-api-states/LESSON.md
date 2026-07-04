# 09 — Fetch data and model every state

## What happened

Submitting the form calls the asynchronous OMDb service. The UI explicitly
models `loading`, `ready`, and `error`; an empty result is handled separately.
The service adapts OMDb's field names into the movie shape the UI already knows.

## Teach

- `async/await` pauses this function, not the browser.
- Network work can succeed, fail, or return no matching data.
- `try/catch` turns rejected promises into honest UI.
- Service boundaries keep API-specific data out of components.
- Environment variables configure optional external services.

## Try it

Use DevTools to throttle or block the request. Confirm that the spinner appears
and an error never leaves the app permanently loading.

## Done when

The curated catalog works without a key, and live search shows loading, success,
empty, and error states with a key.
