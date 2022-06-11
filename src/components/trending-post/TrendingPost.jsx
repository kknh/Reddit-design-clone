import './TrendingPost.css'

const TrendingPost = ({ keyword, desc, community, logo, image }) => {
	return (
		<div className="trending__post">
			<img className="trending__post-image" src={image} alt={keyword} />
			<div className="trending__post-text">
				<h3 className="trending__post-text-keyword">{keyword}</h3>
				<p className="trending__post-text-description">{desc}</p>
				<div className="trending__post-text-footer">
					<img
						className="trending__post-text-icon"
						src={logo}
						alt="community icon"
					/>
					<span className="trending__post-text-community">
						{community} and more
					</span>
				</div>
			</div>
		</div>
	)
}
export default TrendingPost
