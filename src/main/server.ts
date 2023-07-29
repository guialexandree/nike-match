require('module-alias/register')
import { setupApp } from '@/main/config/app'
import env from '@/main/config/env'

try {
	setupApp()
	.listen(env.port, () => {
		console.log(`Server running at port ${env.port}`)
	})
} catch (error) {
	console.error(error)
}
