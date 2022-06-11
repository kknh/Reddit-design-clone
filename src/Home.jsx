import { Header } from './components/header'
import { Navigation } from './components/navigation'
import { Trending } from './container/trending'
const Home = () => {
	return (
		<>
			<Header />
			<Navigation />
			<Trending />
		</>
	)
}
export default Home
