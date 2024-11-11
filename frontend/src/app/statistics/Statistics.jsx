'use client'
import StatisticsCard from '@/components/layouts/statistics/StatisticsCard'
import PageHeading from '@/components/ui/page-heading'
import useStatistics from '@/hooks/useStatistics'

export default function Statistics() {
	const { data, isLoading, isError } = useStatistics()
	if (isLoading) return <p>Loading.....</p>
	if (isError) return <p>Error</p>
	return (
		<div className='bg-gray-900 h-full text-white'>
			<PageHeading title='Statistics' />
			<div className='p-10 grid grid-cols-4 gap-5'>
				{data.map((statistic) => (
					<StatisticsCard
						key={statistic.title}
						title={statistic.title}
						value={statistic.value}
					/>
				))}
			</div>
		</div>
	)
}
