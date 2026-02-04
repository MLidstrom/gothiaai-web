# Gothia AI Website

Marketing website for Gothia AI Portal.

## Lovable Project

**Live preview:** https://gothia-portal-builder.lovable.app/

**Lovable editor:** https://lovable.dev/projects/gothia-portal-builder

## Design

- Scandinavian minimalist style
- Light color palette (off-white #FAFAFA, warm grays, orange accent)
- Mobile-first responsive design
- No AI clichés (gradients, orbs, glows)

## Features

- **DocuChat Widget**: Header includes interactive DocuChat demo that connects to Portal API
- **Product Pages**: Dedicated pages for DocuChat, TimeSlot, and Receptionist products
- **Responsive Layout**: Shared header/footer via React Router Outlet

## Sections

1. Hero – "AI för ditt företag. [random tagline]"
2. Product Network – DocuChat, TimeSlot, Receptionist
3. How It Works – 5-minute setup
4. Integration – Three publishing methods
5. Pricing – Transparent pricing with free Starter tier
6. Trust – GDPR, EU hosting, tenant isolation
7. FAQ
8. Footer

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS
- Vite
- React Router v7

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # TypeScript check + production build
```

## Environment

Copy `.env.development` for local development:

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Portal API URL | `http://localhost:5298` |

## Related

- Portal backend: `../gothiaai-portal/`
- Documentation: `../GothiaAI-docs/`
