import { BsCoin, BsLightning, BsClock, BsMegaphone } from 'react-icons/bs'
import { GrShield, GrEmptyCircle } from 'react-icons/gr'
import { TbTelescope, TbSettings, TbHelp } from 'react-icons/tb'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {
	RiFileList3Line,
	RiAccountCircleLine,
	RiArrowDownSLine,
	RiArrowUpSLine,
} from 'react-icons/ri'
import './Navigation.css'
import useMenuToggler from '../../hooks/useMenuToggler'

const Navigation = () => {
	const [termsOpen] = useMenuToggler('#terms-btn')
	const [navOpen] = useMenuToggler('#nav-btn', '#nav')

	return (
		<nav id="nav" className={`nav__container ${navOpen ? 'active' : ''}`}>
			<ul className="nav__list">
				<li>
					<a href="/" className="nav__item">
						<BsCoin size="20px" />
						<span>Coins</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<GrShield size="20px" />
						<span>Premium</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<BsLightning size="20px" />
						<span>Powerups</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<GrEmptyCircle size="20px" />
						<span>Talk</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<BsClock size="20px" />
						<span>Recent Communities</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<TbTelescope size="20px" />
						<span>Explore</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<TbSettings size="20px" />
						<span>Settings</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<BsMegaphone size="20px" />
						<span>Advertise on Reddit</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<TbHelp size="20px" />
						<span>Help Center</span>
					</a>
				</li>
				<li>
					<a href="/" className="nav__item">
						<AiOutlineInfoCircle size="20px" />
						<span>More</span>
					</a>
				</li>
				<li>
					<button id="terms-btn" className="nav__item">
						<RiFileList3Line size="20px" />
						<span>Terms &amp; Policies</span>
						<RiArrowDownSLine
							className={`nav__arrow ${!termsOpen ? 'active' : ''}`}
							size="20px"
						/>
						<RiArrowUpSLine
							className={`nav__arrow ${termsOpen ? 'active' : ''}`}
							size="20px"
						/>
					</button>
				</li>

				<ul className={`terms ${termsOpen ? 'active' : ''}`}>
					<li>
						<a href="/" className={`nav__item`}>
							<span>User Agreement</span>
						</a>
					</li>
					<li>
						<a href="/" className={`nav__item`}>
							<span>Privacy Policy</span>
						</a>
					</li>
					<li>
						<a href="/" className={`nav__item`}>
							<span>Content Policy</span>
						</a>
					</li>
					<li>
						<a href="/" className={`nav__item`}>
							<span>Moderator Guidelines</span>
						</a>
					</li>
					<hr className={`nav__hr`} />
				</ul>
				<li>
					<a href="/" className="nav__item">
						<RiAccountCircleLine size="20px" />
						<span>Sign Up or Log In</span>
					</a>
				</li>
				<li className="nav__footer">
					<p>© {new Date().getFullYear()} Reddit, Inc. All rights reserved</p>
				</li>
			</ul>
		</nav>
	)
}
export default Navigation
