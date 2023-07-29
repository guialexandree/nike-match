import express, { type Express } from 'express'
import setupRoutes from '../config/router'
import env from '../config/env'

export const setupApp = async (): Promise<Express> => {
	const app = express()
	setupRoutes(app)
	app.listen(400, () => { console.log(`Server running at port ${env.port}`)})

	return app
}
