import EventEmitter from 'events'
import qrcode from 'qrcode-terminal'
import { Client } from 'whatsapp-web.js'

export class WhatsAppAdapter extends EventEmitter {
	client = null as unknown as Client
	readQrCodeConfirmation = false

	constructor () {
		super()
		this.client = new Client({})
		this.client.initialize()

		this.client.on('qr', (qr) => {
			if (!this.readQrCodeConfirmation) {
				qrcode.generate(qr, { small: true })
			}
		})

		this.client.on('authenticated', () => {
			console.log('QRCode lido com sucesso')
			this.emit('start-get-products')
			this.readQrCodeConfirmation = true
		})

		this.client.on('ready', () => { console.log('WhatsApp conectado') })
	}

	async isAvailable (message: string, from: string = '5545999872483@c.us'): Promise<void> {
		try {
				await this.client?.sendMessage(from, message)	
		} catch (error) {
			console.error('isAvailable', error)
		}
	}

	async isNotAvailable (message: string): Promise<void> {
		try {
				console.log(message)
		} catch (error) {
			console.error('isNotAvailable', error)
		}
	}
}
