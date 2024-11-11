export default function StatisticsCard({ title, value }) {
	return (
		<div className='p-5 bg-gray-700 border-gray-500 border-2 rounded-xl text-center'>
			<h3 className='text-xl text-gray-300'>{title}</h3>
			<p className='text-3xl font-bold mt-3'>{value}</p>
		</div>
	)
}
