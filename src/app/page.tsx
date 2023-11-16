'use client'

import { Header } from '@/components/header/Header'
import style from './page.module.css'
import { CardsList } from '@/components/cards/CardsList'
import { NewsList } from '@/components/news/NewsList'
import { useState } from 'react'

export default function Home() {
	const [sInp, setSInp] = useState('')
	const handleData = (data: string) => {
		setSInp(data)
	}

	return (
		<main>
			<Header sendData={handleData} />
			<CardsList />
			<div className={style.container}>
				<NewsList inputValue={sInp} />
			</div>
		</main>
	)
}
