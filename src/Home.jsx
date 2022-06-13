import { Header } from './components/header'
import { Navigation } from './components/navigation'
import { Trending } from './container/trending'
import { Popular } from './components/popular'
import { Posts } from './container/posts'
import { Communities } from './components/communities'
import { Premium } from './components/premium'
import { Category } from './components/category'
import { Footer } from './components/footer'
import { Layout } from './container/layout'
const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Trending />
			<Layout>
				<div className="layout__left">
					<Popular />
					<Posts />
				</div>
				<div className="layout__right">
					<Communities />
					<Premium />
					<Category />
					<Footer />
				</div>
			</Layout>
		</>
	)
}
export default Home
