import './App.css'
import Margarita from './Assets/margarita.jpg'

function App() {
  return (
    <div className='App'>
      <div className='cardContainer' >
        <div className='card-header'>
          <img src={Margarita} alt='profile_picture' width='400px' height='300px'></img>
        </div>
        <main>
          <header>
            <h3>Margarita Poole</h3>
            <h4>Front End React Developer</h4>
            <p>portfolio site link goes here</p>
          </header>
          <div>
            <button type='button'>Email</button>
            <button type='button'>LinkedIn</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
