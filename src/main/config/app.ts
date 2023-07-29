import express, { type Express } from 'express'
import setupRoutes from '../config/router'
import setupServices from '../config/services'

export const setupApp = (): Express => {
	const app = express()
	setupRoutes(app)
	setupServices()
	return app
}
