import client from '@/sanity-client/sanity'

const statisticsService = {
	getTotalTasks: async () => {
		const totalTasks = await client.fetch(`count(*[_type == 'task'])`)
		return totalTasks
	},
	getCompletedTasks: async () => {
		const completedTasks = await client.fetch(
			`count(*[_type == 'task' && is_complete == true])`
		)
		return completedTasks
	},
	getUncompletedTasks: async () => {
		const uncompletedTasks = await client.fetch(
			`count(*[_type == 'task' && is_complete == false])`
		)
		return uncompletedTasks
	},
}

export default statisticsService
