import { useEffect, useState } from 'react'
import { News } from './News'
import './NewsList.css'

export const NewsList = () => {
	const [dataNews, setDataNews] = useState<any>([])
	useEffect(() => {
		const newsApi = async () => {
			fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
				.then(res => res.json())
				.then(data => setDataNews(data.Data.slice(0, 9)))
				.catch(err => console.log(err))
		}
		newsApi()
	}, [])
	console.log(dataNews)
	return (
		<div>
			<ul>
				{dataNews.map(item => (
					<li key={item.id}>
						<News
							title={item.title}
							text={item.body}
							img={item.imageurl}
							link={item.guid}
							categories={item.categories}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
