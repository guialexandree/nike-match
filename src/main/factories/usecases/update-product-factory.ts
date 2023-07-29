import { UpdateProduct } from '@/domain/usecases'
import { RemoteUpdateProduct } from '@/data/usecases'
import { makeLoadProductFactory } from './load-product-factory'

export const makeUpdateProductFactory = (): UpdateProduct => {
	return new RemoteUpdateProduct(makeLoadProductFactory())
}
