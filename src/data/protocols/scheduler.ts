export interface Scheduler {
	schedule: (params: Scheduler.Params) => Scheduler.Result
}

export namespace Scheduler {
	export type Params = () => void
	export type Result = void
}
