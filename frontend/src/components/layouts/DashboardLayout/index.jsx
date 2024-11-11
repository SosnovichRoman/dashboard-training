import { ChartLine, LayoutDashboard, ListTodo } from 'lucide-react'
import Link from 'next/link'

export default function DashboardLayout({ children }) {
	return (
		<div className='grid grid-cols-[1fr_2.5fr]'>
			<div className='bg-gray-700 text-white min-h-screen border-r-2 border-gray-500'>
				<div className='px-5 py-8 border-b-2 border-gray-500 flex items-center gap-5'>
					<LayoutDashboard className='w-8 h-8' />
					<h1 className='font-bold text-2xl '>Dashboard</h1>
				</div>
				<div className='flex flex-col gap-5 text-lg px-5 py-8'>
					<Link
						className='hover:underline flex items-center gap-3 font-medium'
						href='/statistics'
					>
						<ChartLine />
						Statistics
					</Link>
					<Link
						className='hover:underline flex items-center gap-3 font-medium'
						href='/tasks'
					>
						<ListTodo />
						Tasks
					</Link>
				</div>
			</div>
			<div className='h-full flex justify-center items-center'>{children}</div>
		</div>
	)
}
