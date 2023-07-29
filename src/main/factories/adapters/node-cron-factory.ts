import { Scheduler } from '@/data/protocols'
import { NodeScheduleAdapter } from '@/infra/adapters'
import { makeUpdateProductFactory } from '@/main/factories/usecases'

export const makeScheduler = (): Scheduler => {
	const updateProduct = makeUpdateProductFactory()
	return new NodeScheduleAdapter(updateProduct)
}
