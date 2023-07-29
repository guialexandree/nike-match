import cron from 'node-cron'
import env from '@/main/config/env'
import { Scheduler } from '@/data/protocols'
import { UpdateProduct } from '@/domain/usecases'

export class NodeScheduleAdapter implements Scheduler {
	constructor(private readonly updateProduct: UpdateProduct) {}
	
	schedule (params: Scheduler.Params): void {
		const seconds = `*/${params.seconds || env.secondsProductUpdated} * * * * *`
		cron.schedule(seconds, () => {this.updateProduct.update({ url: params.url }); console.log(global.products)})
	}
}

