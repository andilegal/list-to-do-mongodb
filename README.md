This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

API RESTful com Node.js, MongoDB e Next.js
Este projeto é uma API RESTful desenvolvida com Node.js, MongoDB (Atlas) e integrada ao framework Next.js, permitindo o uso tanto como back-end quanto como base para futuras integrações front-end. A API gerencia uma lista de itens com operações de CRUD (Create, Read, Update, Delete).

🔧 Tecnologias utilizadas:
Node.js

Next.js (API Routes)

MongoDB Atlas (Database)

Mongoose (ORM)

Dotenv

🚀 Funcionalidades:
📄 Listar todos os itens

➕ Criar novo item

📝 Atualizar item existente

❌ Deletar item

📂 Organização das rotas:
GET /api/items — Lista todos os itens

POST /api/items — Cria um novo item

GET /api/items/:id — Busca item por ID

PUT /api/items/:id — Atualiza item por ID

DELETE /api/items/:id — Remove item por ID
