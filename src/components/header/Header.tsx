import { FunctionComponent, useState } from 'react'

import './Header.css'
import Image from 'next/image'

interface Props {
	sendData: (data: string) => void
}

export const Header: FunctionComponent<Props> = ({ sendData }) => {
	const [inpValue, setInpValue] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInpValue(event.target.value)
	}
	const sendDataInp = () => {
		sendData(inpValue)
	}
	return (
		<header>
			<div className='container-header'>
				<div className='header-logo'>
					<Image src='/Logo.png' alt='Картинка' height={40} width={72} />
					<h1 className='logo-title'>Logoipsm</h1>
				</div>

				<div className='header-search'>
					<input
						type='text'
						className='header-inp'
						placeholder='Поиск...'
						onChange={handleInputChange}
						value={inpValue}
					/>
					<button className='header-search-btn' onClick={sendDataInp}>
						<Image
							src='/search-normal.png'
							alt='Картинка'
							height={24}
							width={24}
						/>
					</button>
				</div>
			</div>
		</header>
	)
}
