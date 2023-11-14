import { useEffect, FunctionComponent, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
import './Card.css'

interface Props {
	cryptoValue: string
	cryptoTitle: string
	cryptoImg: string
}

export const Card: FunctionComponent<Props> = ({
	cryptoValue,
	cryptoTitle,
	cryptoImg,
}) => {
	const [cryptoPrice, setCryptoPrice] = useState('')
	const [cryptoChange, setCryptoChange] = useState('')

	useEffect(() => {
		async function fetchExchangeRates() {
			const value = cryptoValue

			axios
				.get(
					`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${value}&tsyms=USD`
				)
				.then(response => {
					console.log(response)
					setCryptoPrice(response.data.DISPLAY[value].USD.PRICE)
					setCryptoChange(response.data.DISPLAY[value].USD.CHANGEPCT24HOUR)
				})
				.catch(error => {
					// Обработка ошибки
					console.log(error)
				})
		}
		fetchExchangeRates()
	}, [cryptoValue])

	return (
		<div className='card-item-content'>
			<div className='card-top'>
				<div className='card-total-title'>
					<div className='card-img'>
						<Image src={cryptoImg} alt='Картинка' height={24} width={24} />
					</div>
					<div className='card-text'>
						<p className='cart-name'>{cryptoTitle}</p>
						<p className='cart-reduction'>{cryptoValue}</p>
					</div>
				</div>
				{Number(cryptoChange) > 0 ? (
					<Image src='/arrow-up.png' alt='img' height={18} width={18} />
				) : (
					<Image src='/arrow-down.png' alt='img' height={18} width={18} />
				)}
			</div>
			<span className='card-price'>{cryptoPrice}</span>
			<p className={Number(cryptoChange) > 0 ? 'cart-change1' : 'cart-change2'}>
				{cryptoChange}$
			</p>
		</div>
	)
}
