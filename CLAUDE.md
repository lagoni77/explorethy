# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `"C:/Program Files/nodejs/node.exe" serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Node.js is at `C:/Program Files/nodejs/node.exe`. Puppeteer is installed in the project `node_modules/`. Chrome cache is at `C:/Users/VUC/.cache/puppeteer/`.
- **Always screenshot from localhost:** `"C:/Program Files/nodejs/node.exe" screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `"C:/Program Files/nodejs/node.exe" screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## InsForge MCP Integration

The project uses InsForge as its backend. The InsForge MCP server is registered in `.mcp.json` and gives Claude Code direct access to backend tools — no dashboard required.

### MCP tools available once API key is set
- `init` — Initialize project, retrieve `BACKEND_URL` and anon JWT
- `execute_sql` — Run raw SQL (create tables, query data, etc.)
- `create_function` / `update_function` / `delete_function` — Manage Deno edge functions
- `list_buckets` / `create_bucket` — File storage management

### Current status
- **Phase 1 ✅** — `.mcp.json`, `thy-assistant.js`, `newsletter.js` built. Backend URL and anon key wired in.
- **Phase 2 — NEXT** — Run MCP tools to create DB tables and deploy edge functions (see schema below).
- **Phase 3** — Add widget script tags to HTML pages, build `/plan/` itinerary page.

### Phase 2 checklist (run via InsForge MCP tools)
1. `execute_sql` — Create `conversations` table:
```sql
CREATE TABLE conversations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id text NOT NULL,
  role text NOT NULL CHECK (role IN ('user', 'assistant')),
  content text NOT NULL,
  language text DEFAULT 'da',
  token_count int,
  created_at timestamptz DEFAULT now()
);
CREATE INDEX ON conversations (session_id, created_at DESC);
```
2. `execute_sql` — Create `newsletter_subscribers` table:
```sql
CREATE TABLE newsletter_subscribers (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  language text DEFAULT 'da',
  source_page text,
  confirmed_at timestamptz,
  created_at timestamptz DEFAULT now()
);
```
3. `execute_sql` — Create `itineraries` table:
```sql
CREATE TABLE itineraries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  share_token text UNIQUE NOT NULL DEFAULT substr(md5(random()::text), 1, 8),
  days int NOT NULL CHECK (days BETWEEN 1 AND 7),
  party_type text NOT NULL,
  interests text[] NOT NULL,
  season text NOT NULL,
  language text DEFAULT 'da',
  content jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);
CREATE INDEX ON itineraries (share_token);
```
4. `execute_sql` — Create `rate_limits` table:
```sql
CREATE TABLE rate_limits (
  ip_hash text NOT NULL,
  window_start timestamptz NOT NULL DEFAULT date_trunc('hour', now()),
  count int DEFAULT 1,
  PRIMARY KEY (ip_hash, window_start)
);
```
5. Set RLS: anon INSERT-only on `conversations` and `newsletter_subscribers`. Anon INSERT + SELECT-by-token on `itineraries`.
6. Deploy `chat-with-thy` edge function (Deno) — chat handler with rate limiting, last-10-turns context, Model Gateway (claude-haiku-4-5-20251001).
7. Deploy `create-itinerary` edge function — structured itinerary generator (claude-sonnet-4-6), returns share_token.
8. Deploy `get-itinerary` edge function — GET by share_token, returns itinerary content.

### Backend features
- **AI Travel Assistant** — `chat-with-thy` edge function, bilingual (da/de/en)
- **Trip Itinerary Planner** — `create-itinerary` + `get-itinerary`, shareable via `/plan/?id=<token>`
- **Newsletter capture** — `newsletter_subscribers` table, anon JWT

### Language support
The AI assistant and itinerary planner respond in the visitor's language (da/de/en) based on `<html lang>`. English is UX-only — no hardcoded English HTML pages.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
