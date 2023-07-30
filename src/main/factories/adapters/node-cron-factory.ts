import { Scheduler } from '@/data/protocols'
import { NodeScheduleAdapter } from '@/infra/adapters'

export const makeSchedulerAdapter = (): Scheduler => {
	return new NodeScheduleAdapter()
}
