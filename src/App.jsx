import './App.css'
import Margarita from './Assets/margarita.jpg'
import AboutMe from './Components/AboutMe'
import EmailButton from './Components/EmailMe'
import Footer from './Components/Footer'
import HeaderInfo from './Components/HeaderInfo'

function App() {
  return (
    <div className='App'>
      <div className='cardContainer'>
        <img
          src={Margarita}
          alt='profile_picture'
          width='300px'
          height='250px'
        ></img>
        <main className='mainInfo'>
          <HeaderInfo />
          <EmailButton />
          <AboutMe />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
