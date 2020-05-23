import React from 'react'
import styles from './HomePage.module.css'
import data from './mock'

import Title from '../../components/Title/Title'

const HomePage = () => {
	console.log(data)
	return (
		<div>
			<Title />
			{data.map(anArticle => {
				return <h1 key={anArticle.created_date}>{anArticle.title}</h1>
			})}
		</div>
	)
}

export default HomePage