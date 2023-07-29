import { type Express, Router } from 'express'
import env from './env'

export default (app: Express) => {
	const router = Router()
  app.use(`/api/${env.apiVersion}`, router)
	app.get('/', (req, res) => res.json({ message: 'Ok '}))
}
