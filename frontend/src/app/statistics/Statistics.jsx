import StatisticsCard from '@/components/layouts/statistics/StatisticsCard'
import PageHeading from '@/components/ui/page-heading'

export default function Statistics() {
	return (
		<div className='bg-gray-900 h-full text-white'>
			<PageHeading title='Statistics' />
			<div className='p-10 grid grid-cols-4 gap-5'>
				<StatisticsCard title='total' value={5} />
			</div>
		</div>
	)
}
