import { useEffect, useState } from 'react'
import { News } from './News'
import axios from 'axios'

export const NewsList = () => {
	const [dataNews, setDataNews] = useState([])
	useEffect(() => {
		const newsApi = async () => {
			fetch('https://min-api.cryptocompare.com/data/v2/news/?lang=EN')
				.then(res => res.json())
				.then(data => setDataNews(data.Data))
				.catch(err => console.log(err))
		}
		newsApi()
	}, [])
	console.log(dataNews[1])
	return (
		<div>
			<News />/
		</div>
	)
}
