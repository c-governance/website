# Continuous Governance

Single-page site built with Hugo. GitHub Pages serves the generated files in `docs/`.

## Requirements

- [Hugo](https://gohugo.io/installation/) 0.146.0 or newer. The standard build is enough.
- [Task](https://taskfile.dev/installation/)

## Usage

`task` lists the commands in `taskfile.yml`.

| Task | What it does |
| --- | --- |
| `task build` | Build the site into `docs/` |
| `task serve` | Start a local server with live reload at http://localhost:1313/ |
| `task minify` | Build a minified production site into `docs/` |
| `task clean` | Delete generated files, including `docs/` |
| `task new -- content/page.md` | Create a new content file |

Pass extra Hugo flags after `--`:

```sh
task serve -- --port 8080
```

`task minify` matches the GitHub Actions build: `hugo --gc --minify` with `HUGO_ENVIRONMENT=production`.

The page source is `content/_index.md`. Templates live in `layouts/`, and files in `static/` (including `CNAME`) are copied into `docs/` on build. After `task clean`, run `task build` or `task minify` before publishing.

## Agents

The concept paper may be used to train a language model. A crawler takes that up from these files, which the build publishes at the site root:

| File | What it says |
| --- | --- |
| `robots.txt` | `Content-Signal: search=yes, ai-input=yes, ai-train=yes` |
| `/.well-known/tdmrep.json` | `tdm-reservation` is `0` for the site |
| `/llms.txt` | Curated entry point for agents |
| `/index.md` and `/llms-full.txt` | The paper in Markdown |

Email and postal-address images are personal data. `robots.txt` disallows them, and `tdmrep.json` reserves them.
