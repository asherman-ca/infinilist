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
		"create 3 random top 10 lists. Start each list with a title seperated by a semicolon. The list items must have a title and a long description seperated by a colon. Seperate the list items using semicolons. Seperate the lists using a @ symbol. No punctuation except for the symbols, semicolons and colons used for separation. Don't put numbers in front of the list items or lists. Put the entire reponse in one line. only include the list sentence in the response - nothing like 'sure...' or 'OK...'"
	)) as string

	res.status(200).json({ data: response })
}
