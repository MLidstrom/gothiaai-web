import {
  Header,
  Hero,
  Products,
  HowItWorks,
  Integration,
  Pricing,
  Trust,
  FAQ,
  Footer,
} from './components'

function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <HowItWorks />
        <Integration />
        <Pricing />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export default App
