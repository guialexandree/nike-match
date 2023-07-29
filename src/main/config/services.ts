import cron from 'node-cron'
import env from '../config/env'

export default (): void => {
	cron.schedule(`*/${env.secondsUpdated} * * * * *`, () => console.log("Executando a tarefa a cada 5 seg"))
}
