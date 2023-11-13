import { Card } from './Card'
import './CardList.css'

export const CardsList = () => {
	return (
		<div className='cards-list-content'>
			<Card
				cryptoValue={'BTC'}
				cryptoTitle={'Биткоин'}
				cryptoImg={'/btc.png'}
			/>
			<Card
				cryptoValue={'ETH'}
				cryptoTitle={'Эфириум'}
				cryptoImg={'/eth.png'}
			/>
			<Card cryptoValue={'BNB'} cryptoTitle={'BNB'} cryptoImg={'/bnb.png'} />
			<Card
				cryptoValue={'DOGE'}
				cryptoTitle={'DogeCoin'}
				cryptoImg={'/doge.png'}
			/>
			<Card
				cryptoValue={'FIL'}
				cryptoTitle={'Filecoin'}
				cryptoImg={'/fil.png'}
			/>
			<Card cryptoValue={'TRX'} cryptoTitle={'TRON'} cryptoImg={'/trx.png'} />
			<Card cryptoValue={'OKB'} cryptoTitle={'OKB'} cryptoImg={'/okb.png'} />
		</div>
	)
}
