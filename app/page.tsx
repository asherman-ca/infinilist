import List from './components/List'

// export const revalidate = 1

const fetchLists = async () => {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_HOST_URL}/api/openai/getLists`
		)
		const data = await res.json()
		return data
	} catch (err) {
		return {
			data: [],
		}
		console.log(err)
	}
}

export default async function Home() {
	const lists = await fetchLists()

	const trimmed = lists.data.replace(/(\r\n|\n|\r|\+)/gm, '')

	return (
		<main className='flex flex-col m-auto py-8 gap-12 max-w-[50%]'>
			{trimmed.split('@').map((list: string, idx: number) => (
				<List key={idx} list={list.split(';').slice(0, 11)} />
			))}
		</main>
	)
}
