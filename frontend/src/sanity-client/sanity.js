import { createClient } from '@sanity/client'

const client = createClient({
	projectId: 's7b2vwyo',
	dataset: 'dashboard',
	apiVersion: '2024-01-01',
	useCdn: false,
})

export default client
