import { Card } from './Card'

export const CardsList = () => {
	return (
		<div>
			<Card cryptoValue={'BTC'} />
			<Card cryptoValue={'ETH'} />
			<Card cryptoValue={'BNB'} />
			<Card cryptoValue={'DOGE'} />
			<Card cryptoValue={'SOL'} />
			<Card cryptoValue={'TRX'} />
			<Card cryptoValue={'TON'} />
		</div>
	)
}
