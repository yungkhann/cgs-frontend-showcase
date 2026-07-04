# 01 — Build the page shell

## What happened

We replaced the empty Vite screen with one React component containing the
semantic regions of the page: `header`, `nav`, `main`, `section`, and `footer`.
JSX looks like HTML, but it lives inside JavaScript and must return one parent
element.

## Teach

- A component is a function that returns UI.
- Semantic elements describe the purpose of content.
- `className` is used instead of HTML's `class` attribute.
- A React component must start with a capital letter.

## Try it

Change the heading and add a second paragraph. Then inspect the page in browser
DevTools and find each semantic region.

## Done when

The navigation, hero, empty collection heading, and footer all render.

## Tailwind focus

Read utility classes from left to right: layout, spacing, color, then responsive
variants such as `md:px-10`. Theme tokens live in `src/styles.css`.
