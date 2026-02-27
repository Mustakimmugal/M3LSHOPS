# M3L Shop Backend

Express + MongoDB API for M3L Shop ecommerce app.

## Prerequisites

- Node.js 18+
- MongoDB connection string

## Environment variables

Create `backend/.env`:

```env
PORT=5000
DEV_MODE=development
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
CORS_ORIGINS=http://localhost:3000
BT_MERCHANT_ID=<braintree_merchant_id>
BT_PUBLIC_KEY=<braintree_public_key>
BT_PRIVATE_KEY=<braintree_private_key>
```

## Install & run

```bash
npm install
npm run server
```

For fullstack local development from the backend folder:

```bash
npm run dev
```

## Main API base

`/api/v1`

- Auth routes: `/auth`
- Category routes: `/category`
- Product routes: `/product`
