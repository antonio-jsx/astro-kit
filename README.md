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

## 🧩 Requisitos

- Node.js >= 22.12.0
- `bun`

## 🚀 Uso

Desde la raíz del proyecto:

```bash
bun install
bun run dev
```

Luego abre `http://localhost:3000`.

## 🧪 Scripts disponibles

| Comando             | Acción                                               |
| :------------------ | :--------------------------------------------------- |
| `bun install`       | Instala las dependencias                             |
| `bun run dev`       | Inicia el servidor de desarrollo en `localhost:3000` |
| `bun run build`     | Genera la versión de producción                      |
| `bun run preview`   | Previsualiza el build local                          |
| `bun run astro ...` | Ejecuta comandos CLI de Astro                        |
| `bun run lint`      | Ejecuta ESLint sobre `src/`                          |
| `bun run lint:fix`  | Ejecuta ESLint y corrige problemas automáticos       |
| `bun run format`    | Formatea el proyecto con Prettier y aplica ESLint    |

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

## 🔍 SEO y Sitemap

El kit incluye soporte automático para SEO y generación de sitemap:

- **`@astrojs/sitemap`**: genera automáticamente `sitemap-index.xml` con todas tus páginas y contenido.
- **`astro-seo`**: componente `SEO` en `src/layouts/Base.astro` para gestionar meta tags, títulos y descripciones.
- **`robots.txt`**: generado dinámicamente en `src/pages/robots.txt.ts` para indicar a los buscadores dónde está el sitemap.

## 💡 Notas

- La base de datos SQLite local `auth.db` debe ignorarse en el control de versiones; `.gitignore` incluye `*.db`.
- `better-sqlite3` requiere herramientas de compilación nativas en el entorno donde se ejecuta `bun install`.
- El sitemap se genera automáticamente basándose en la URL del sitio. Para especificar una URL personalizada, configura la variable de entorno:

```bash
SITE_URL=https://tu-dominio.com
```

En `astro.config.mjs`:

```javascript
site: process.env.SITE_URL || 'http://localhost:3000',
```
