export type ProductNikeModel = {
	pageProps: {
		product: {
			name: string
			code: string
			sizes: Array<{
				description: string
				hasStock: boolean
				isAvailable: boolean
			}>
			priceInfos: {
				price: number
				priceFormatted: string
				discount: number
			},
			images: Array<{
				order: number
				url: string
			}>
		}
	}
}
