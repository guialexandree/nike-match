// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config()

export default {
	apiVersion: process.env.API_VERSION || "v1",
	port: process.env.API_PORT || 3000
}
