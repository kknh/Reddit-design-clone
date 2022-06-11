import { Header } from './components/header'
import { Navigation } from './components/navigation'
import { Trending } from './container/trending'
import { Popular } from './components/popular'
const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Trending />
			<Popular />
		</>
	)
}
export default Home
