import React from 'react'
import styles from './Paywall.module.css'


const Paywall = () => {

	return (
		<div className={styles.Paywall} aria-labelledby="paywall">
			<div id="paywall" className={styles.PaywallTitle}>Looks like you've enjoyed this story!</div>
			<div className={styles.PaywallText}>
				We all hate paywalls. But we have to pay the bills. Subscribe to read more content.
			</div>
			<button aria-label="Subscribe" className={styles.PaywallButton}>
				<span className={styles.visible}>Subscribe</span>
				<span className={styles.invisible}>Only $1</span>
			</button>
		</div>
	)
}

export default Paywall