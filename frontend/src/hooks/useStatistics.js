import statisticsService from '@/services/statistics.service'
import { useQuery } from '@tanstack/react-query'

export default function useStatistics() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['statistics'],
		queryFn: async () => {
			const totalTasks = await statisticsService.getTotalTasks()
			const completedTasks = await statisticsService.getCompletedTasks()
			const uncompletedTasks = await statisticsService.getUncompletedTasks()
			return [
				{ title: 'Total Tasks', value: totalTasks },
				{ title: 'Completed Tasks', value: completedTasks },
				{ title: 'Uncompleted Tasks', value: uncompletedTasks },
			]
		},
	})

	return { data, isLoading, isError }
}
