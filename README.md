# Astro Kit

## 🚀 Project Structure

Astro looks for `.astro` or `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Place any static pages in the `src/contents` directory. Each page is exposed as a route based on its file name. (más directa, típica de documentación)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |
| `pnpm lint`      | Check error with eslint                          |
| `pnpm format`    | Clean code with prettier and eslint fix          |
