import { CheckProductAvailability } from '@/domain/usecases'
import { RemoteCheckProductAvailability } from '@/data/usecases'
import { makeLoadProductFactory } from './load-product-factory'
import { WhatsAppAdapter } from '@/infra/senders'

export const makeCheckProductAvailabilityFactory = (whatsAppAdapter: WhatsAppAdapter): CheckProductAvailability => {
	return new RemoteCheckProductAvailability(
		makeLoadProductFactory(),
		["41,5", "42", "42,5"],
		whatsAppAdapter
	)
}
