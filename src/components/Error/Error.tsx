import React from 'react'
import styles from './Error.module.css'
import errorImage from '../../img/error500.png'


const Error: React.FC = () => {

	return (
		<div className={styles.Error} data-testid="errorPage">
			<h3 className={styles.errorTitle}>Uh Oh!</h3>
			<div className={styles.errorSubtext}>Something went wrong on our end.</div>
			<div className={styles.errorSubtext}>Don't worry, it's not you - it's us. Sorry about that.</div>
			<img className={styles.errorImage} src={errorImage} alt="network error" />
		</div>
	)
}

export default Error