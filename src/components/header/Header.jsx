import { ReactComponent as RedditLogo } from '../../assets/images/reddit_logo.svg'
import { ReactComponent as RedditLogoText } from '../../assets/images/reddit_logo_text.svg'
import { RiSearchLine, RiArrowDownSLine } from 'react-icons/ri'
import { BsPerson, BsMegaphone } from 'react-icons/bs'
import './Header.css'

const Header = () => {
	return (
		<header className="header__container">
			<div className="header">
				<a href="/" className="logo__wrapper">
					<RedditLogo className="logo__head" />
					<RedditLogoText className="logo__text" />
				</a>
				<form className="searchbar" role="search">
					<label htmlFor="searchbar" className="search-icon">
						<RiSearchLine />
					</label>
					<input
						id="searchbar"
						className="searchbar__input"
						placeholder="Search Reddit"
					/>
				</form>
				<div className="header__list">
					<div className="header__item">
						<div className="megaphone-wrapper">
							<BsMegaphone className="megaphone-icon" />
						</div>
					</div>
					<div className="header__item">
						<button className="btn-outline btn-login">Log In</button>
					</div>
					<div className="header__item">
						<button className="btn-primary btn-signup">Sign Up</button>
					</div>
					<div className="header__item" id="nav-btn">
						<button className="nav__toggle-btn">
							<BsPerson className="person-icon" />
							<RiArrowDownSLine className="arrow-down-icon" />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header
