# Cloudflare Workers, Cockroach DB, Prisma, Vite, Typescript Starter

This is a demo application that showcases the use of Prisma, Prisma Accelerate, CockroachDB, Cloudflare Workers, Vite and TypeScript. The application can be run locally or deployed to Cloudflare Workers.

## Uses

### Prisma

Prisma is a modern database toolkit that makes it easy to work with databases in your application. It provides a type-safe and intuitive API for building scalable and performant database queries.

### Prisma Accelerate

Prisma Accelerate is a set of tools and best practices that help you optimize the performance of your Prisma-based applications. It includes features like query batching, caching, and automatic schema generation.

### CockroachDB

CockroachDB is a distributed SQL database that provides high availability, scalability, and fault tolerance. It is designed to handle large-scale, mission-critical workloads.

### Cloudflare Workers

Cloudflare Workers is a serverless platform that allows you to run JavaScript code at the edge of the network. It provides a fast and secure way to deploy and scale your applications.

### Vite

Vite is a fast and lightweight development server for modern web applications. It provides a zero-config setup for building and serving your application locally.

### TypeScript

TypeScript is a superset of JavaScript that adds static typing and other features to the language. It helps you catch errors early and write more maintainable code.

## Getting Started

To get started with the demo application, follow these steps:

1. Install the dependencies by running `npm install` in the root and api directories.
2. Create a CockroachDB database in the UI and add the database URL to the `.env` file as the `DIRECT_URL` value of the api directory.
3. Create an Prisma Accelerate instance in the UI and add the connection string to the `.env` file as the `DATABASE_URL` value.
4. In the Prisma Accelerate settings UI, add the CockroachDB connection string and save in the api directory .env file.
5. In the Api run `npx prisma migrate dev --name init` to create the initial database schema in.
6. Then run `npx prisma generate --no-engine` to generate the Prisma client.
7. Run `npm run dev` to run the application locally.
8. Run `npm run deploy` to deploy the application to Cloudflare Workers.
