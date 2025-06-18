import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Prices from './components/Prices'
import ChooseUs from './components/ChooseUs'
import Faq from './components/Faq'
import Footer from './components/Footer'

function App() {

	return (
		<>
			<main className="section-dark overlay">
				<Header />
				<Hero />
			</main>
			<Steps />
			 <Prices />
			<ChooseUs />
			<Faq />
			<Footer />
		</>
	)
}

export default App
