import { type Express, Router } from 'express'
import env from './env'

export default (app: Express): void => {
	const router = Router()
  app.use(`/api/${env.apiVersion}`, router)
}
