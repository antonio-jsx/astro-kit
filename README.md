# Astro Kit

`astro-kit` es un proyecto base de Astro para crear webs con:

- Astro 7
- React 19
- Tailwind CSS 4
- MDX
- Node.js standalone server
- Autenticación con `better-auth`

## 📌 Características

- `astro.config.mjs`: salida de servidor con `@astrojs/node`, integración de React y MDX, y plugin Tailwind CSS.
- `src/pages/[...slug].astro`: renderiza contenido dinámico desde `src/contents/`.
- `src/content.config.ts`: define la colección `contents` para archivos Markdown y MDX.
- `src/pages/api/auth/[...all].ts`: expone la API de autenticación para `better-auth`.
- `src/lib/auth.ts`: configura `better-auth` traducciones en español.
- `src/lib/auth-client.ts`: cliente para React que consume la sesión de usuario.
- `src/middleware.ts`: protege la ruta `/dashboard` y agrega `user` y `session` a `Astro.locals`.

## 🚀 Uso

Desde la raíz del proyecto:

```bash
pnpm install
pnpm dev
```

Luego abre `http://localhost:3000`.

## 🧪 Scripts disponibles

| Comando          | Acción                                               |
| :--------------- | :--------------------------------------------------- |
| `pnpm install`   | Instala las dependencias                             |
| `pnpm dev`       | Inicia el servidor de desarrollo en `localhost:3000` |
| `pnpm build`     | Genera la versión de producción                      |
| `pnpm preview`   | Previsualiza el build local                          |
| `pnpm astro ...` | Ejecuta comandos CLI de Astro                        |
| `pnpm lint`      | Ejecuta ESLint sobre `src/`                          |
| `pnpm lint:fix`  | Ejecuta ESLint y corrige problemas automáticos       |
| `pnpm format`    | Formatea el proyecto con Prettier y aplica ESLint    |

## 🔐 Autenticación

- La ruta `/dashboard` sólo es accesible si el usuario tiene sesión activa.

## 📄 Añadir contenido

Para crear una nueva página de contenido:

1. Crea un archivo `.md` o `.mdx` dentro de `src/contents/`.
2. Añade frontmatter con al menos `title`.
3. Usa la ruta basada en el nombre del archivo.

Ejemplo:

```md
---
title: Mi página de prueba
---

Contenido de ejemplo.
```

Accede a la página en `http://localhost:3000/mi-pagina-de-prueba`.

## 🧩 Requisitos

- Node.js >= 22.12.0
- `pnpm`

## 💡 Notas

- La base de datos SQLite local `auth.db` debe ignorarse en el control de versiones; `.gitignore` incluye `*.db`.
- `better-sqlite3` requiere herramientas de compilación nativas en el entorno donde se ejecuta `pnpm install`.
