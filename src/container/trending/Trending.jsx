import data from '../../data'
import { TrendingPost } from '../../components/trending-post'
import './Trending.css'

const Trending = () => {
	const posts = data.trending
	return (
		<section className="trending__container">
			<div className="trending__wrapper">
				<h2 className="trending__heading">Trending today</h2>
				<div className="trending__posts">
					{posts.map((post) => (
						<TrendingPost key={post.id} {...post} />
					))}
				</div>
			</div>
		</section>
	)
}
export default Trending
