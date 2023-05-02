import Image from 'next/image'

const List = ({ list }: { list: string[] }) => {
	const title = list.splice(0, 1)

	return (
		<div className='flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<h2 className='text-4xl font-bold'>{title}</h2>
				<span>The Ultimate Guide to the {title[0].split('0')[1]}</span>
				<div className='flex gap-2 items-center'>
					<Image
						src={'/ChatGPT_logo.svg.png'}
						className='h-12 w-12 rounded-full'
						height={200}
						width={200}
						alt={'logo'}
					/>
					<div className='text-sm'>
						<div>
							By <span className='font-bold underline'>Generist</span>
						</div>
						<div>Generist Staff</div>
					</div>
				</div>
			</div>
			<ul className='flex flex-col gap-4'>
				{list.map((item, idx) => {
					let itemArr = item.trim().split(':')
					return (
						<li key={`${title} ${idx}`} className='flex flex-col'>
							<h3 className='font-bold text-2xl'>
								{idx + 1}. {itemArr[0]}
							</h3>
							<p className='text-lg'>{itemArr[1]}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default List
