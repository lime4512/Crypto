import './News.css'
import Image from 'next/image'
import { FunctionComponent } from 'react'

interface Props {
	title: string
	text: string
	img: string
	link: string
	categories: string
}

export const News: FunctionComponent<Props> = ({
	title,
	text,
	img,
	link,
	categories,
}) => {
	return (
		<div className='news-card'>
			<Image
				className='news-img'
				loader={() => `${img}`}
				src={img}
				alt='Картинка'
				width={300}
				height={300}
			/>
			<div className='news-card-text'>
				<div className='news-text'>
					<h1 className='news-title'>{title}</h1>
					<p className='news-total-text'>{text}</p>

					<a className='news-link' href={link}>
						Read more...
					</a>
				</div>
				<div>
					<span className='news-categories'>
						Categories:{' '}
						<span className='news-categories-color'>{categories}</span>
					</span>
				</div>
			</div>
		</div>
	)
}
