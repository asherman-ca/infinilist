import openai from './chatgpt'

const query = async (prompt: string) => {
	console.log('prompt', prompt)
	const res = openai
		.createCompletion({
			model: 'text-davinci-003',
			prompt,
			temperature: 1,
			max_tokens: 2500,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		})
		.then((res) => res.data.choices[0].text)
		.catch(
			(err) =>
				`ChatGPT was unable to find an answer for that! (Error: ${err.message})`
		)

	return res
}

export default query
