import { LoadProduct } from '@/domain/usecases'
import { RemoteLoadProduct } from '@/data/usecases'
import { makeAxiosHttpClient } from '@/main/factories/http'
import env from '@/main/config/env'

export const makeLoadProductFactory = (): LoadProduct => {
	const httpClient = makeAxiosHttpClient()
	return new RemoteLoadProduct(env.urlProductNike, httpClient)
}
