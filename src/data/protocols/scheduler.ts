export interface Scheduler {
	schedule: (params: Scheduler.Params) => Scheduler.Result
}

export namespace Scheduler {
	export type Params =  {
		url: string
		seconds?: number
	}
	export type Result = void
}
