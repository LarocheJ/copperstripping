import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'

function App() {

	return (
		<>
			<main className="section-dark overlay">
				<Header />
				<Hero />
			</main>
			<Steps />
			{/* <Prices />
			<ChooseUs />
			<Faq />
			<Contact />
			<Footer /> */}
		</>
	)
}

export default App
