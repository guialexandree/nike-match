import { LoadProduct } from '@/domain/usecases'
import { ProductModel, ProductNikeModel } from '@/domain/models'
import { HttpClient, HttpRequest, HttpStatusCode } from '@/data/protocols'

export class RemoteLoadProduct implements LoadProduct {
	constructor(
		private readonly urlBase: string,
		private readonly httpClient: HttpClient<ProductNikeModel>
		) {}

	async load (params: LoadProduct.Params): Promise<ProductModel> {
		const request: HttpRequest = {
			method: 'get',
			url: `${this.urlBase}/${params.url}`
		}

		const { statusCode, body } = await this.httpClient.request(request)

		switch(statusCode){
			case HttpStatusCode.ok:
				return this.mapToModel(body)
			default:
				throw new Error('Não implementado')
		}
	}

	mapToModel (productNike: ProductNikeModel): ProductModel {
		const productNikeResult = productNike.pageProps.product
		const sizesAvailables = productNikeResult.sizes
			.filter(size => size.hasStock && size.isAvailable)
			.map(size => size.description)
		const images = productNikeResult.images.sort((a, b) => a.order - b.order).map(image => image.url) || []

		const product = {
			id: productNikeResult.code,
			name: productNikeResult.name,
			sizes: sizesAvailables,
			value: productNikeResult.priceInfos.price,
			valueDescription: productNikeResult.priceInfos.priceFormatted,
			discount: productNikeResult.priceInfos.discount || 0,
			images: images || []
		}
		console.log(product)

		return product
	}
}
