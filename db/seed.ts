import { db, Comment, Author } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Author).values([
		{ id: 1, name: "Kasim" },
		{ id: 2, name: "Mina" }
	]);

	await db.insert(Comment).values([
		{ authorId: 1, body: 'Hope you like Astro DB' },
		{ authorId: 2, body: 'Enjoy' }
	])
}
