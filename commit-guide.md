# Conventional Commits Guide (React / Vite)

This repository follows the **Conventional Commits 1.0.0** specification to keep commit history clean, readable, consistent, and machine-readable. It works seamlessly with **Semantic Versioning (SemVer)** and supports automated changelogs and releases.

## Commit Message Format

type(scope): short description

[optional body]

[optional footer(s)]

Example:
feat(ui): add accordion component

Rules:
- type is required
- scope is optional but recommended
- description must be short, imperative, and lowercase
- do not end the description with a period

## Commit Types (Recommended Order)

### feat — New features (MINOR)
Adds new functionality.
feat(auth): add login form with validation  
feat(ui): implement dark mode toggle  
feat(router): add protected routes  

### fix — Bug fixes (PATCH)
Fixes incorrect behavior.
fix(nav): mobile menu not closing on route change  
fix(button): prevent double submit on click  
fix(vite): resolve production build error  

### refactor — Code changes without behavior change
Improves structure or readability only.
refactor(header): simplify navigation logic  
refactor(utils): extract cn helper  

### perf — Performance improvements
Improves speed or efficiency.
perf(images): lazy load hero images  
perf(state): memoize expensive selectors  

### style — Formatting only (no logic change)
Whitespace, formatting, linting.
style: format code with prettier  
style(css): reorder tailwind classes  

### docs — Documentation
README, guides, comments.
docs: update setup instructions  
docs(contributing): add commit guidelines  

### test — Tests
Adding or updating tests.
test(auth): add login form tests  
test: configure vitest  

### build — Build system / bundler
Vite, dependencies, build tools.
build(vite): optimize production config  
build: enable code splitting  

### chore — Maintenance tasks
No app logic changes.
chore: update dependencies  
chore(vite): configure path aliases  
chore(eslint): add react-hooks rules  

### ci — CI/CD
Continuous integration and deployment.
ci: add GitHub Actions workflow  
ci: cache node_modules  

### revert — Revert commits
Reverting previous changes.
revert: remove experimental checkout flow  

Refs: a215868, 676104e

## Common Scopes (React / Vite)

ui, components, pages, hooks, auth, router, api, vite, config

Examples:
feat(components): add reusable modal  
fix(hooks): correct dependency array  

## Breaking Changes (MAJOR)

Breaking changes can be introduced in any commit type.

Option 1 — ! in header (recommended):
feat(api)!: change auth response format  

Option 2 — Footer:
feat(api): change auth response format  

BREAKING CHANGE: authentication response schema has changed

Option 3 — Both (allowed):
chore!: drop Node 16 support  

BREAKING CHANGE: Node 18 is now required

## Commit Body (Optional)

- starts one blank line after description
- explains why, not what
- may contain multiple paragraphs

Example:
fix: prevent request race condition  

Introduce request IDs to track latest request.  
Ignore outdated responses.

## Footer Rules

- start one blank line after body
- format: Token: value
- tokens use hyphens instead of spaces
- BREAKING CHANGE must be uppercase

Examples:
BREAKING CHANGE: config format updated  
Refs: #123  
Reviewed-by: Jane Doe  

## Semantic Versioning Mapping

fix → PATCH  
feat → MINOR  
BREAKING CHANGE → MAJOR  

## Rules Summary

- one commit = one logical change
- use feat and fix correctly
- use ! or BREAKING CHANGE for breaking changes
- prefer meaningful scopes
- keep commits small and clear

## License

Creative Commons — CC BY 3.0
