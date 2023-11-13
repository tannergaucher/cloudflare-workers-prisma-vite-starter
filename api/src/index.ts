import { PrismaClient } from '@prisma/client/edge';

import { withAccelerate } from '@prisma/extension-accelerate';
export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, _ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		const headers = new Headers({
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		});

		if (url.pathname === '/') {
			const prisma = new PrismaClient({
				datasourceUrl: env.DATABASE_URL,
			}).$extends(withAccelerate());
			await prisma.log.create({
				data: {
					level: 'Info',
					message: `${request.method} ${request.url}`,
					meta: {
						headers: JSON.stringify(request.headers),
					},
				},
			});
			const { data, info } = await prisma.log
				.findMany({
					take: 20,
					orderBy: {
						id: 'desc',
					},
				})
				.withAccelerateInfo();
			console.log(JSON.stringify(info));
			console.log(JSON.stringify(data));

			return new Response(
				JSON.stringify({
					message: `request method: ${request.method}!`,
				}),
				{ headers }
			);
		}

		return new Response(`url not found: ${url.pathname}`, { status: 404 });
	},
};
