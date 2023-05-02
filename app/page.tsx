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
		data: "Top 10 Most Picturesque Gardens in the US; Butchart Gardens, Washington: Located in a lush forest of the Pacific Northwest, Butchart Gardens is a magnificent floral paradise with a large array of plants, trees and shrubs from around the world; Filoli, California: Filoli is an 18th-century estate with an exquisite English Renaissance-style mansion overlooking six gardens that feature a variety of seasonal plants and spectacular views; Powell Gardens, Missouri: Enjoy an outdoor museum dedicated to the preservation of Midwestern plants. Highlights include gardens of wildflowers, meadows and a spectacular wild bluffside garden; Longwood Gardens, Pennsylvania: Inspired by the European style of formal gardens, Longwood Gardens offers a variety of gardening styles, and a floral conservatory with a year-round calendar of seasonal and exotic plants; San Antonio Botanical Garden, Texas: Explore tropical gardens, an authentic Japanese garden, and a children's garden featuring interactive exhibits and butterfly haven; Na Aina Kai Botanical Gardens, Hawaii: Na Aina Kai is a magnificent 200-acre botanical garden on the island of Kauai; Lewis Ginter Botanical Garden, Virginia: Stroll through this stunning botanical garden and explore a variety of gardens, including the famous Sunken garden, Rose garden, and Medicinal plant garden; Coastal Maine Botanical Gardens, Maine: Explore a landscape of woodlands, ponds, wetlands, and formal gardens with a variety of species from the coastal environment; Paine Botanical Gardens, Georgia: Spanning 12 acres, this botanical garden features plants from around the world, as well as historical buildings and sculptures; Fruitlands Museum, Massachusetts: Enjoy a 19th-century agricultural museum and its surrounding gardens with a variety of native and exotic plants & Top 10 Most Loved Hot Air Balloon Festivals in the US; Albuquerque International Balloon Fiesta, New Mexico: Held annually since 1972, the Albuquerque International Balloon Fiesta is the world's largest hot air balloon event, featuring over 500 colorful balloons that fill the skies to the delight of thousands of spectators; QuickChek New Jersey Festival of Ballooning, New Jersey: One of the largest summertime hot air balloon and music festivals in North America, the QuickChek Festival of Ballooning takes place annually at Solberg Airport and features over 100 hot air balloons, free concerts, fireworks and more; Bristol Balloon Fiesta, Tennessee: Celebrate the sky with the Bristol Balloon Fiesta, featuring over 50 hot air balloons, nightly fireworks and beautiful skylines; Great Mississippi Balloon Race, Mississippi: Celebrate Mississippi in the sky with this hot air balloon race in which pilots compete for point-to-point speed races and most creative balloon designs; Hot Air Balloon Fest, Wisconsin: Take part in this hot air balloon festival held every summer and enjoy balloon glows, evening shows, a car show and live music; International Hot Air Balloon Festival, Michigan: Take part in this two-day event that features colorful hot air balloons, a car show, live entertainment and family activities; Town of Lady Lake Hot-Air Balloon Festival, Florida: Enjoy this hot air balloon event that features nighttime balloon glows, live entertainment, vendors, and activities for kids; Field of Dreams Hot Air Balloon Festival, New York: Celebrate summer in the sky with this one-of-a-kind festival that features colorful hot air balloons, live music and entertainment; Great Texas Balloon Race, Texas: Take part in the oldest hot air balloon race in the United States, which includes a variety of fun activities and a mass ascension with 100 hot air balloons; Great Alabama Balloon Rally, Alabama: Enjoy a weekend of hot air balloon rides, nightly balloon glows, and activities such as a 5K race and craft festival; Great Falls Balloon Festival, Montana: Take part in Montana's largest hot air balloon event and enjoy a wide variety of activities, hot air balloon rides and dazzling night glows& Top 10 Most Popular Ski Destinations in the US;Snowmass, Colorado: Home to Aspen Snowmass, Snowmass is one of Colorado's premier ski resorts and offers over 3,300 acres of ski-able terrain, plus a variety of restaurants, shops and hotel accommodations; Vail, Colorado: With over 5,200 acres of ski-able terrain and a variety of restaurants, shops, and hotels, Vail is one of the most popular ski destinations in the United States; Lake Tahoe, California: Lake Tahoe is the largest alpine lake in North America and features 12 ski resorts with terrain for every skill level and a variety of apres ski activities; Park City, Utah: Park City offers over 7,300 acres of skiable terrain, plus a variety of restaurants, shops and hotel accommodations; Whistler Blackcomb, British Columbia: One of the most visited ski resorts in the world, Whistler Blackcomb is home to two of the biggest ski mountains in North America; Jackson Hole, Wyoming:",
	}

	const trimmed = lists.data.replace(/(\r\n|\n|\r|\+)/gm, '')
	const splits = trimmed.split('&')

	return (
		<main className='flex flex-col m-auto py-8 gap-12 max-w-[50%]'>
			{splits.map((list, idx) => (
				<List key={idx} list={list.split(';').slice(0, 10)} />
			))}
		</main>
	)
}
