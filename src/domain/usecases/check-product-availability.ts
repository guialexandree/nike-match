export interface CheckProductAvailability {
  checkAvailability: (params: CheckProductAvailability.Params) => CheckProductAvailability.Result
}

export namespace CheckProductAvailability {
	export type Params = {
		url: string
	}
	export type Result = Promise<void>
}
