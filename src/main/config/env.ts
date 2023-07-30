// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

export default {
	apiVersion: process.env.API_VERSION || 'v1',
	port: 3000,
	secondsProductUpdated: process.env.SECONDS_PRODUCT_UPDATED || 5,
	urlNike: 'https://www.nike.com.br',
	urlProductNike: process.env.URL_PRODUCT_NIKE || 'https://www.nike.com.br/_next/data/v10-228-0'
}
