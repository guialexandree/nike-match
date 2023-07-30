require('module-alias/register')
import { Sqlite3Helper } from '@/infra/db'
import { setupApp } from '@/main/config/app'
import env from '@/main/config/env'

try {
	Sqlite3Helper.connect()
	Sqlite3Helper.seeds()
	
	const app = setupApp()

	app.listen(env.port, () => {
		console.log(`Server running at port ${env.port}`)
	})
	
} catch (error) {
	console.error(error)
}
