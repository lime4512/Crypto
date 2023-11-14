import { Card } from './Card'
import './CardList.css'
import Marquee from 'react-fast-marquee'

export const CardsList = () => {
	return (
		<div className='cards-list-content'>
			<Marquee>
				<div className='ticker-item'>
					<Card
						cryptoValue={'BTC'}
						cryptoTitle={'Биткоин'}
						cryptoImg={'/btc.png'}
					/>
				</div>
				<div className='ticker-item'>
					<Card
						cryptoValue={'ETH'}
						cryptoTitle={'Эфириум'}
						cryptoImg={'/eth.png'}
					/>
				</div>
				<div className='ticker-item'>
					<Card
						cryptoValue={'BNB'}
						cryptoTitle={'BNB'}
						cryptoImg={'/bnb.png'}
					/>
				</div>
				<div className='ticker-item'>
					<Card
						cryptoValue={'DOGE'}
						cryptoTitle={'DogeCoin'}
						cryptoImg={'/doge.png'}
					/>
				</div>
				<div className='ticker-item'>
					<Card
						cryptoValue={'FIL'}
						cryptoTitle={'Filecoin'}
						cryptoImg={'/fil.png'}
					/>
				</div>
				<div className='ticker-item'>
					<Card
						cryptoValue={'TRX'}
						cryptoTitle={'TRON'}
						cryptoImg={'/trx.png'}
					/>
				</div>
			</Marquee>
		</div>
	)
}
