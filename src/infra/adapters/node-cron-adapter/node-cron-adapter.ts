import cron from 'node-cron'
import env from '@/main/config/env'
import { Scheduler } from '@/data/protocols'
import { CheckProductAvailability } from '@/domain/usecases'

export class NodeScheduleAdapter implements Scheduler {
	constructor(private readonly updateProduct: CheckProductAvailability) {}
	
	schedule (params: Scheduler.Params): void {
		const seconds = `*/${params.seconds || env.secondsProductUpdated} * * * * *`
		cron.schedule(seconds, () => {
			this.updateProduct.checkAvailability({ url: params.url })
		})
	}
}

