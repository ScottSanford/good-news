import React from 'react'
import styles from './Paywall.module.css'


const Paywall = ({ menu }) => {

	return (
		<div className={styles.Paywall}>
			<div className={styles.PaywallTitle}>Looks like you've enjoyed this story!</div>
			<div className={styles.PaywallText}>
				We are unwavering in our commitment to bring the best storytelling in sports to our readers.
			</div>
			<button className={styles.PaywallButton}>
				<span className={styles.visible}>Subscribe</span>
				<span className={styles.invisible}>Only $1</span>
			</button>
		</div>
	)
}

export default Paywall