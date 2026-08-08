# HostPilot AI

AI infrastructure for modern hotels and hostels.

## Sprint 1 foundation

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4
- ESLint + Prettier
- Husky + lint-staged
- Docker + PostgreSQL Compose setup
- GitHub Actions CI
- Prisma persistence foundation

## Development

```bash
npm install
npm run dev
```

For local PostgreSQL:

```bash
docker compose up db -d
npm run db:generate
npm run db:push
```

Quality checks:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run build
```

## Sprint 1 roadmap

1. Project foundation
2. Design system
3. Authentication
4. Database
5. Landing page
6. Dashboard shell
