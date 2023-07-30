import { ProductModel } from '@/domain/models'
import { LoadProduct, CheckProductAvailability } from '@/domain/usecases'
import { WhatsAppAdapter } from '@/infra/senders'

export class RemoteCheckProductAvailability implements CheckProductAvailability {
	constructor(
		private readonly remoteLoadProduct: LoadProduct,
		private readonly filterSizes: string[],
		private readonly whatsAppAdapter: WhatsAppAdapter
	) {}

	async checkAvailability (params: CheckProductAvailability.Params): CheckProductAvailability.Result {
		const productResult = await this.remoteLoadProduct.load({ url: params.url })
		
		const hasProductFilter = productResult.sizes
			.some(size => this.filterSizes.includes(size))

		const message = this.format(hasProductFilter, productResult)
		if (hasProductFilter) {
			await this.whatsAppAdapter.isAvailable(message)
		} else {
			await this.whatsAppAdapter.isNotAvailable(message)
		}
	}

	format (isAvailable: boolean, product: ProductModel): string {
		const dateFormat = new Intl.DateTimeFormat('pt-BR', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		})

		if (isAvailable) {
			return `${product.url}
DISPONÍVEL ${dateFormat.format(new Date())}
Valor ${product.valueDescription}
Tamanhos ${JSON.stringify(product.sizes)}

`
		} else {
			return `${product.url}
INDISPONÍVEL ${dateFormat.format(new Date())}
${product.name}
Tamanhos ${JSON.stringify(product.sizes)}

`
		}
	}
}
