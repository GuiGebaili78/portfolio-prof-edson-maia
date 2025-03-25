import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br />
            <span>Guilherme Gebaili</span> <br />
            Dev Full Stack
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className='img-home'src="/img-in-the-office.svg" alt='Imagem de Home' />

        </figure>

      </section>
      <Footer />

    </>
  )
}

export default App
