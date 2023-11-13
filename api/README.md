# Cloudflare Workers / Cockroach DB / Prisma Demo Application

This is a demo application that showcases the use of Prisma, Prisma Accelerate, CockroachDB, and Cloudflare Workers. The application can be run locally or deployed to Cloudflare Workers.

## Uses

### Prisma

Prisma is a modern database toolkit that makes it easy to work with databases in your application. It provides a type-safe and intuitive API for building scalable and performant database queries.

### Prisma Accelerate

Prisma Accelerate is a set of tools and best practices that help you optimize the performance of your Prisma-based applications. It includes features like query batching, caching, and automatic schema generation.

### CockroachDB

CockroachDB is a distributed SQL database that provides high availability, scalability, and fault tolerance. It is designed to handle large-scale, mission-critical workloads.

### Cloudflare Workers

Cloudflare Workers is a serverless platform that allows you to run JavaScript code at the edge of the network. It provides a fast and secure way to deploy and scale your applications.

## Getting Started

To get started with the demo application, follow these steps:

1. Install the dependencies by running `npm install`.
2. Create a CockroachDB database in the UI and add the database URL to the `.env` file as the `DIRECT_URL` value.
3. Create an Prisma Accelerate instance in the UI and add the connection string to the `.env` file as the `DATABASE_URL` value.
4. In the Prisma Accelerate settings UI, add the CockroachDB connection string and save.
5. Run `npx prisma migrate dev --name init` to create the initial database schema.
6. Run `npx prisma generate --no-engine` to generate the Prisma client.
7. Run `npm run dev` to run the application locally.
8. Run `npm run deploy` to deploy the application to Cloudflare Workers.
