# M3L Shop Client

React frontend for the M3L Shop ecommerce project.

## Prerequisites

- Node.js 18+
- Backend API running locally (default: `http://localhost:5000`)

## Setup

```bash
npm install
npm start
```

By default the client uses CRA proxy configured in `package.json`:

- `proxy: http://localhost:5000`

## Scripts

- `npm start` - Run development server
- `npm test -- --watchAll=false` - Run tests once
- `npm run build` - Production build

## Notes

If you deploy frontend/backend separately, update API handling (proxy or base URL) according to your hosting setup.
