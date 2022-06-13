import './Category.css'
import { RiArrowDownSLine } from 'react-icons/ri'

const Category = () => {
	return (
		<article className="category__container">
			<div className="category__item">
				<span>popular communities</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>gaming</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>sports</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>tv</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>travel</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>health &amp; fitness</span>
				<RiArrowDownSLine size={25} />
			</div>
			<div className="category__item">
				<span>fashion</span>
				<RiArrowDownSLine size={25} />
			</div>
		</article>
	)
}
export default Category
