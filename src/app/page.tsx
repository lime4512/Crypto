'use client'

import { Header } from '@/components/header/Header'
import style from './page.module.css'
import { CardsList } from '@/components/cards/CardsList'

export default function Home() {
	return (
		<main>
			<Header />
			<CardsList />
			<div className={style.container}></div>
		</main>
	)
}
