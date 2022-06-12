import { Header } from './components/header'
import { Navigation } from './components/navigation'
import { Trending } from './container/trending'
import { Popular } from './components/popular'
import { Posts } from './container/posts'
const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Trending />
			<Popular />
			<Posts />
		</>
	)
}
export default Home
