import React from 'react'
import styles from './ArticlePage.module.css'
import { useLocation } from 'react-router-dom'

const ArticlePage = () => {
	const location = useLocation()
	console.log('Article Page: ', location.state.article)

	return (
		<div>
			ArticlePage Page
		</div>
	)
}

export default ArticlePage