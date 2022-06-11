import './Popular.css'
import { FaFire } from 'react-icons/fa'
import { RiArrowDownSLine } from 'react-icons/ri'
import { TiStarburstOutline } from 'react-icons/ti'
import { GoGraph } from 'react-icons/go'
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineViewStream } from 'react-icons/md'

const Popular = () => {
	return (
		<section className="popular__container">
			<div className="popular__wrapper">
				<h2 className="popular__heading">Popular posts</h2>
				<div className="popular__bar">
					<button className="popular__hot btn-gray">
						<FaFire size={20} /> Hot
					</button>
					<button className="popular__everywhere btn-gray">
						Everywhere <RiArrowDownSLine size={20} />
					</button>
					<button className="btn-gray popular__new">
						<TiStarburstOutline size={20} /> New
					</button>
					<button className="btn-gray popular__top">
						<GoGraph size={20} /> Top
					</button>
					<button className="btn-gray popular__more">
						<BsThreeDots size={20} />
					</button>

					<button className="btn-gray popular__view">
						<MdOutlineViewStream size={20} />
						<RiArrowDownSLine size={20} />
					</button>
				</div>
			</div>
		</section>
	)
}
export default Popular
