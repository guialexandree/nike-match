import { LoadProduct, CheckProductAvailability } from '@/domain/usecases'

export class RemoteCheckProductAvailability implements CheckProductAvailability {
	constructor(
		private readonly remoteLoadProduct: LoadProduct,
		private readonly filterSizes: string[]
	) {}

	async checkAvailability (params: CheckProductAvailability.Params): CheckProductAvailability.Result {
		const productResult = await this.remoteLoadProduct.load({ url: params.url })

		const hasProductFilter = productResult.sizes.some(size => this.filterSizes.includes(size));
		if (hasProductFilter) {
			console.log('DISPONÍVEL', productResult)
			global.whatsApp.sendMessage('teste')
		} else {
			const dateFormat = new Intl.DateTimeFormat('pt-BR', {
				day: '2-digit',
				month: '2-digit',
				year: 'numeric',
				hour: '2-digit',
				minute: '2-digit',
				second: '2-digit',
			})
			const result = `${dateFormat.format(new Date())} - ${productResult.id}-${productResult.name} INDISPONÍVEL`
			console.log(result)
			global.whatsApp.sendMessage(result)
		}
	}
}
