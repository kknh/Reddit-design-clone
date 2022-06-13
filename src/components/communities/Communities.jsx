import './Communities.css'
import { RiArrowUpSLine } from 'react-icons/ri'

const Communities = () => {
	return (
		<article className="comm__container">
			<div className="comm__head">
				<h2 className="comm__heading">Today's Top Growing Communities</h2>
			</div>
			<div className="comm__body">
				<div className="comm__body-item">
					<span>1</span>
					<RiArrowUpSLine className="comm__arrow-icon" size={20} />
					<img
						src="./images/community_icons/community_icon_6.png"
						alt="community icon"
					/>
					<span>r/oddlyterrifying</span>
					<button className="btn-primary">Join</button>
				</div>

				<div className="comm__body-item">
					<span>2</span>
					<RiArrowUpSLine className="comm__arrow-icon" size={20} />

					<img
						src="./images/community_icons/community_icon_5.png"
						alt="community icon"
					/>
					<span>r/TooAfraidToAsk</span>
					<button className="btn-primary">Join</button>
				</div>

				<div className="comm__body-item">
					<span>3</span>
					<RiArrowUpSLine className="comm__arrow-icon" size={20} />

					<img
						src="./images/community_icons/community_icon_4.png"
						alt="community icon"
					/>
					<span>r/AskMen</span>
					<button className="btn-primary">Join</button>
				</div>

				<div className="comm__body-item">
					<span>4</span>
					<RiArrowUpSLine className="comm__arrow-icon" size={20} />

					<img
						src="./images/community_icons/community_icon_3.png"
						alt="community icon"
					/>
					<span>r/Funnymemes</span>
					<button className="btn-primary">Join</button>
				</div>

				<div className="comm__body-item">
					<span>5</span>
					<RiArrowUpSLine className="comm__arrow-icon" size={20} />

					<img
						src="./images/community_icons/community_icon_1.jpg"
						alt="community icon"
					/>
					<span>r/iamverybadass</span>
					<button className="btn-primary">Join</button>
				</div>
			</div>
			<button className="btn-primary comm__view-btn">View All</button>
			<div className="comm__foot">
				<button className="btn-gray">Near You</button>
				<button className="btn-gray">Sports</button>
				<button className="btn-gray">News</button>
				<button className="btn-gray">Gaming</button>
			</div>
		</article>
	)
}
export default Communities
