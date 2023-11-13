import { useEffect, FunctionComponent, useState } from 'react'
import axios from 'axios'

interface Props {
	cryptoValue: string
}

export const Card: FunctionComponent<Props> = ({ cryptoValue }) => {
	const [cryptoText, setCryptoText] = useState('')

	useEffect(() => {
		async function fetchExchangeRates() {
			const value = cryptoValue

			axios
				.get(
					`https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=USD&api_key={793950bc36e2be95361fa5ab812e8fa52e2bfcbacd5d558c2c377f70be8d04f7}`
				)
				.then(response => {
					console.log(response)
					setCryptoText(response.data.USD)
				})
				.catch(error => {
					// Обработка ошибки
					console.log(error)
				})
		}
		fetchExchangeRates()
	}, [cryptoValue])

	return (
		<div>
			<h1>{cryptoValue}</h1>
			<span>{cryptoText}</span>
		</div>
	)
}
