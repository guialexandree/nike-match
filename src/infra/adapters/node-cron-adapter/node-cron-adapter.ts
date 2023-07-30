import cron from 'node-cron'
import { Scheduler } from '@/data/protocols'
import env from '@/main/config/env'

export class NodeScheduleAdapter implements Scheduler {
	constructor(private readonly seconds?: number) {}
	
	schedule (job: Scheduler.Params): void {
		const seconds = `*/${this.seconds || env.secondsProductUpdated} * * * * *`
		cron.schedule(seconds, () => {
			job()
		})
	}
}

