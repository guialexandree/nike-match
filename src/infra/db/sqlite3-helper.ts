import sqlite3, { Database } from 'sqlite3'
import { ProductModel } from '@/domain/models'

export const Sqlite3Helper = {
	db: null as unknown as Database,

	connect (): void {
		this.db = new sqlite3.Database('./src/main/config/database.db')
		console.log('SQLite conectado com sucesso')
	},

	seeds (): void {
		this.db.serialize(() => {
			this.db.exec(`
				CREATE TABLE IF NOT EXISTS products(id varchar(20), url_nike varchar(255))
			`)

			this.db.run('DELETE FROM products')

			const products = [
				{
					id: "024329",
					url_nike: 'tenis-air-jordan-1-low-se-masculino-024329.html.json?cor=ID'
				},
				{
					id: "024673",
					url_nike: 'tenis-air-jordan-1-low-se-masculino-024673.html.json?cor=51'
				}
			]

			for (const product of products) {
				this.db.run('INSERT INTO products(id, url_nike) VALUES ($id, $url_nike)', {
					$id: product.id,
					$url_nike: product.url_nike
				})
			}
		})
	},

	getAllProducts() : ProductModel[] {
		const result = []

		this.db.all('SELECT id, url_nike as url FROM products', (_, rows) => {
			result.push(...rows)
		})

		return result
	}
}
