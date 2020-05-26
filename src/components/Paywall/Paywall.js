import React from 'react'
import styles from './Paywall.module.css'


const Paywall = () => {

	return (
		<div className={styles.Paywall}>
			<div className={styles.PaywallTitle}>Looks like you've enjoyed this story!</div>
			<div className={styles.PaywallText}>
				We all hate paywalls. We also hate bad design. Subscribe to get our latest tips and tricks.
			</div>
			<button className={styles.PaywallButton}>
				<span className={styles.visible}>Subscribe</span>
				<span className={styles.invisible}>Only $1</span>
			</button>
		</div>
	)
}

export default Paywall