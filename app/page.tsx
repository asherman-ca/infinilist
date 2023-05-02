import Image from 'next/image'
import List from './components/List'

export const revalidate = 1

const fetchLists = async () => {
	const res = await fetch('http://localhost:3000/api/openai/getLists')
	const data = await res.json()
	return data
}

export default async function Home() {
	// const lists = await fetchLists()
	// console.log(lists)

	const lists = {
		data: 'Top 10 Rock Instruments; Electric Guitar-An electric guitar is a type of guitar that uses magnetic pickups to convert the vibration of its strings into electrical signals that can then be amplified to create sound; Bass-The electric bass guitar is a stringed instrument played primarily with the fingers or thumb, by plucking, slapping, popping, strumming, tapping, thumping, or picking with a plectrum; Drums-The drum is a member of the percussion group of musical instruments, as opposed to string instruments, wind instruments, and horn instruments; Acoustic Guitar-An acoustic guitar is a type of guitar that utilizes acoustical techniques such as resonance and sound projection to make the instrument louder without relying on electronic amplification; Keyboards-A keyboard instrument is an instrument played using a keyboard, a row of levers which are pressed by the fingers; Saxophone-The saxophone is a family of woodwind instruments usually made of brass and played with a single-reed mouthpiece; Violin-The violin is a bowed string instrument with four strings tuned in perfect fifths; Clarinet-The clarinet is a single-reed woodwind instrument that is used in jazz, classical, popular music and other genres of music across the world; Electric Bass-An electric bass guitar is an electric stringed instrument similar in design to an electric guitar, but with a longer neck and scale length, and four, five, or six strings; Trumpet-The trumpet is a brass instrument commonly used in classical and jazz ensembles; &Top 10 Unique Plumbing Fixtures; Smart Toilet-Smart toilets are computerized toilets that use an array of sensors and actuators to provide extra features and functions beyond a typical toilet; Waterfall Tub-A waterfall tub is an advanced shower fixture that drains water from the tub in a unique pattern; Sensor Faucet-Sensor faucets are automatic faucets that use a sensor to detect when someone is standing at the sink; Wall Mounted Toilet-Wall mounted toilets are toilets that are mounted directly on the wall, instead of being mounted on the floor; Rain Shower Heads-Rain shower heads are a modern shower fixture that releases water in a rain-like pattern; Handheld Shower Heads-Handheld shower heads are shower heads with a long hose attached, which can be used to direct water to different areas of the body; Bidet-A bidet is a sanitary fixture used to clean oneself after using the toilet; Dual Shower Head-A dual shower head is a shower head with two nozzles, one on either side, which can be used to direct water to different areas of the body; Clawfoot Tub-A clawfoot tub is an antique style of bathtub that has a large, deep tub and four legs; Soaking Tub-A soaking tub is a large, deep bathtub, typically made of cast iron or acrylic, and designed for long, leisurely baths; &Top 10 Alternative Energy Sources; Solar-Solar power is the direct conversion of sunlight into electricity, either directly using photovoltaics, or indirectly using concentrated solar power; Wind-Wind power is the use of air flow through turbines to generate electricity; Geothermal-Geothermal energy is thermal energy generated and stored in the Earth; Biomass-Biomass is organic material derived from animals and plants that can be used as fuel or to produce electricity; Hydropower-Hydropower is a type of renewable energy that utilizes the power of falling water to generate electricity; Tidal-Tidal power, also known as tidal energy, is a form of hydropower that converts the energy of the tides into electricity or other useful forms of power; Wave-Wave power is the capture of energy of wind waves to do useful work, such as electricity generation, water desalination, or pumping water; Fuel Cells-A fuel cell is an electrochemical energy converter that produces electricity from a fuel, such as hydrogen or other non-renewable fuels; Biofuel-Biofuel is a type of fuel that is derived from biomass, such as plant matter, animal fat, and food waste; Nuclear-Nuclear power is the use of sustained nuclear fission to generate heat and electricity;',
	}

	const trimmed = lists.data.replace(/(\r\n|\n|\r)/gm, '')
	const splits = trimmed.split('&')
	// const ListOne = splits[0].split(';')
	// const ListTwo = splits[1].split(';')
	// const ListThree = splits[3].split(';')

	return (
		<main>
			{splits.map((list, idx) => (
				<List key={idx} list={list.split(';').slice(0, 10)} />
			))}
		</main>
	)
}
