import express, { type Express } from 'express'
import { Sqlite3Helper } from '@/infra/db'
import { WhatsAppAdapter } from '@/infra/senders'
import setupRoutes from '@/main/config/router'
import { makeCheckProductAvailabilityFactory } from '@/main/factories/usecases'
import { makeSchedulerAdapter } from '@/main/factories/adapters'

export const setupApp = (): Express => {
	const app = express()
	
	const whatsAppAdapter = new WhatsAppAdapter()
	whatsAppAdapter.on('start-get-products', () => startGetProducts(whatsAppAdapter))

	setupRoutes(app)

	return app
}

const startGetProducts = (whatsAppAdapter: WhatsAppAdapter): void => {
	const scheduler = makeSchedulerAdapter()
		const products = Sqlite3Helper.getAllProducts()
	
		setTimeout(() => {
			console.log('Iniciou o serviço de busca de produtos')
			products.map(product => {
				const updateProduct = makeCheckProductAvailabilityFactory(whatsAppAdapter)
				scheduler.schedule(() => updateProduct.checkAvailability({ url: product.url }))
			})
		}, 100)
}