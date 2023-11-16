import { FunctionComponent, useEffect, useState } from 'react'
import { News } from './News'
import './NewsList.css'

interface Props {
	inputValue: string
}

export const NewsList: FunctionComponent<Props> = ({ inputValue }) => {
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
	const [search, setSearch] = useState('')
	useEffect(() => {
		setSearch(inputValue)
	}, [inputValue])

	const searchTitleCrypto = dataNews.filter(news => {
		return news.title.toLowerCase().includes(search.toLowerCase())
	})
	return (
		<div>
			<ul>
				{searchTitleCrypto.map(item => (
					<li key={item.id}>
						<News
							title={item.title}
							text={item.body.substring(0, 476)}
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
