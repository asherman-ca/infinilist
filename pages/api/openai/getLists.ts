// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '@/app/lib/queryApi'

type Data = {
	data: string
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const response = (await query(
		"create 3 random top 10 lists. Each list item should have a title and a long description. The first sentence should be the title of the list. Separate the list title and list items using semi-colons. Seperate the lists using an & symbol. Seperate the list items from their descriptions using colons. Don't put numbers in front of the list items or lists. Put the entire reponse in one line. No punctuation except for the & symbols, semicolons and colons used for separation. only include the list sentence in the response - nothing like 'sure...' or 'OK...'"
	)) as string

	res.status(200).json({ data: response })
}
