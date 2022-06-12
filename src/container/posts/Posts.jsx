import './Posts.css'
import data from '../../data'
import { Post } from '../../components/post'
const Posts = () => {
	const posts = data.posts
	return (
		<section className="posts">
			{posts?.map((post) => (
				<Post key={post.id} {...post} />
			))}
		</section>
	)
}
export default Posts
