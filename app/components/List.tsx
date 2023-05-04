import Image from 'next/image'

import { createClient } from 'pexels'
const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY!)

const List = async ({ list }: { list: string[] }) => {
	const title = list.splice(0, 1)

	const filledItems = async () =>
		await Promise.all(
			list.map(async (item, idx) => {
				let itemArr = item.trim().split('!')
				let image
				try {
					image = await client.photos.search({
						query: itemArr[0],
						per_page: 1,
					})
				} catch (err) {
					console.log(err)
				}

				return (
					<li key={`${title} ${idx}`} className='flex flex-col gap-4'>
						{image && (
							// <img
							// 	src={image?.photos[0].src.landscape}
							// 	alt=''
							// 	// height={'100px'}
							// 	// width={'100px'}
							// 	className='h-lg w-auto rounded-md'
							// />
							<Image
								src={image?.photos[0]?.src?.landscape}
								alt='image'
								height={200}
								width={200}
								className='h-lg w-auto'
							/>
						)}
						<h3 className='font-bold text-2xl'>
							{idx + 1}. {itemArr[0]}
						</h3>
						<p className='text-lg'>{itemArr[1]}</p>
					</li>
				)
			})
		)

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
				{await filledItems()}
				{/* {list.map((item, idx) => {
					let itemArr = item.trim().split('!')
					return (
						<li key={`${title} ${idx}`} className='flex flex-col'>
							<h3 className='font-bold text-2xl'>
								{idx + 1}. {itemArr[0]}
							</h3>
							<p className='text-lg'>{itemArr[1]}</p>
						</li>
					)
				})} */}
			</ul>
		</div>
	)
}

export default List
