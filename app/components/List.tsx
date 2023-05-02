'use client'

const List = ({ list }: { list: string[] }) => {
	const title = list.splice(0, 1)

	return (
		<div>
			<h2>{title}</h2>
			<ul>
				{list.map((item, idx) => {
					item = item.trim()
					return <li key={`${title} ${idx}`}>{item}</li>
				})}
			</ul>
		</div>
	)
}

export default List
