import { setupApp } from './config/app'
import env from './config/env'

try {
	setupApp()
	.listen(env.port, () => {
		console.log(`Server running at port ${env.port}`)
	})
} catch (error) {
	console.error(error)
}
