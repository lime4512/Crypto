'use client'

import { Header } from '@/components/header/Header'
import style from './page.module.css'
import { CardsList } from '@/components/cards/CardsList'
import { NewsList } from '@/components/news/NewsList'

export default function Home() {
	return (
		<main>
			<Header />
			<CardsList />
			<div className={style.container}>
				<NewsList />
			</div>
		</main>
	)
}
