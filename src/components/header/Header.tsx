import './Header.css'
import Image from 'next/image'

export const Header = () => {
	return (
		<header>
			<div className='container-header'>
				<div className='header-logo'>
					<Image src='/Logo.png' alt='Картинка' height={40} width={72} />
					<h1 className='logo-title'>Logoipsm</h1>
				</div>

				<div className='header-search'>
					<input type='text' className='header-inp' placeholder='Поиск...' />
					<button className='header-search-btn'>
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
