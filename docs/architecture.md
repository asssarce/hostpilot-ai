# Architecture

## Initial architecture

The project uses a modular Next.js application with clear boundaries between UI, application logic, persistence, and external integrations.

- `app/`: routes and server-facing application entry points
- `components/`: reusable UI
- `lib/`: domain/application utilities and integration adapters
- `prisma/`: persistence schema and migrations
- `docs/`: architecture and product decisions

## Core domain boundaries

### Guest intelligence
Property-scoped knowledge is the source of truth. AI responses should retrieve relevant property content before generating an answer. Never expose data belonging to another property.

### Pricing intelligence
Pricing should initially produce recommendations rather than silently changing rates. Inputs should be auditable: occupancy, demand, booking lead time, seasonality, local events, and configurable property rules.

### Local intelligence
Recommendations should be location-aware, time-aware, and property-aware. External data providers should sit behind adapters so providers can be changed without coupling the domain to a vendor.

## Security principles

- Tenant isolation by `propertyId`.
- Secrets only through environment variables.
- Validate all external input at API boundaries.
- Do not put provider API keys in client bundles.
- Log decisions and model/provider metadata without storing unnecessary guest PII.

## Next implementation steps

1. Authentication and property tenancy.
2. Property onboarding and knowledge management.
3. Guest Q&A API with retrieval boundary.
4. Pricing signal ingestion and recommendation engine.
5. Local places/events provider adapters.
6. Observability, evaluation, rate limits, and production deployment.
