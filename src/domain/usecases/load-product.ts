import { ProductModel } from '@/domain/models'

export interface LoadProduct {
  load: (params: LoadProduct.Params) => Promise<ProductModel>
}

export namespace LoadProduct {
	export type Params = {
		url: string
	}
	export type Result = ProductModel
}
