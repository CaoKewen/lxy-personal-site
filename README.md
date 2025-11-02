# LXY's Learning Journal

This is a simple Eleventy (11ty) personal site template for LXY's Learning Journal.

Features
- Home, About, Posts listing
- Posts written in Markdown under `src/posts/`
- Netlify CMS (optional) for browser editing (`/admin/`)
- Lightweight responsive styles

Quick start (local)
1. Install Node.js (v16+ recommended).
2. In the project root:
   npm install
   npm run dev
3. Open http://localhost:8080 to preview.

Build
- npm run build
- Output will be in `_site/`.

Netlify CMS (optional)
- Admin UI available at: `https://<your-site>/.netlify/admin/`
- To enable CMS on Netlify: enable Identity and Git Gateway, or configure GitHub OAuth (Netlify docs).

Repository structure
- package.json
- .eleventy.js
- admin/config.yml
- src/
  - _includes/
    - layouts/
      - base.njk
  - static/
    - styles.css
    - uploads/ (for CMS media)
  - index.njk
  - about.md
  - posts/
    - 2025-11-02-first-post.md

If you want, I can also provide:
- A branch-ready zip of all files (you’ll need to create the repo and upload).
- Step-by-step Netlify configuration instructions.