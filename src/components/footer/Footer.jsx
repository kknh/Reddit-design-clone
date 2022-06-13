import './Footer.css'

const Footer = () => {
	return (
		<article className="footer__container">
			<div className="footer__top">
				<div className="footer__top-left">
					<span className="footer__item">help</span>
					<span className="footer__item">reddit coins</span>
					<span className="footer__item">reddit premium</span>
					<span className="footer__item">communities</span>
					<span className="footer__item">rereddit</span>
					<span className="footer__item">topics</span>
				</div>
				<div className="footer__top-right">
					<span className="footer__item">about</span>
					<span className="footer__item">careers</span>
					<span className="footer__item">presss</span>
					<span className="footer__item">advertise</span>
					<span className="footer__item">blog</span>
					<span className="footer__item">terms</span>
					<span className="footer__item">content policy</span>
					<span className="footer__item">privacy policy</span>
					<span className="footer__item">mod policy</span>
				</div>
			</div>
			<div className="footer__mid">
				<div className="footer__mid-left">
					<span className="footer__item">english</span>
					<span className="footer__item">Français</span>
					<span className="footer__item">Italiano</span>
				</div>
				<div className="footer__mid-right">
					<span className="footer__item">Deutsch</span>
					<span className="footer__item">Español</span>
					<span className="footer__item">Português</span>
				</div>
			</div>
			<div className="footer__bot">
				<span className="footer__item">
					Reddit Inc © {new Date().getFullYear()}. All rights reserved
				</span>
			</div>
		</article>
	)
}
export default Footer
