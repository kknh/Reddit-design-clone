import './Premium.css'
import { GiCheckedShield } from 'react-icons/gi'

const Premium = () => {
	return (
		<article className="premium__container">
			<div className="premium__body">
				<GiCheckedShield size={30} />
				<div className="premium__text">
					<h4>Reddit Premium</h4>
					<p>The best Reddit experience, with monthly Coins</p>
				</div>
			</div>
			<button className="btn-primary premium__try-btn">Try Now</button>
		</article>
	)
}
export default Premium
