import './App.css'
import Margarita from './Assets/margarita.jpg'

function App() {
  return (
    <div className='App'>
      <div className='cardContainer' >
        <div className='card-header'>
          <img src={Margarita} alt='profile_picture' width='400px' height='300px'></img>
        </div>
        <main className='mainInfo'>
          <header>
            <h1>Margarita Poole</h1>
            <h3>Front End React Developer</h3>
            <p>portfolio site link goes here</p>
          </header>
          <div>
            <button type='button'>Email</button>
            <button type='button'>LinkedIn</button>
          </div>
          <div>
            <title>About</title>
            <p>about me info goes here</p>
            <title>Interests</title>
            <p>fun facts goes here</p>
          </div>
        </main>
        <footer className='footer'>
          social tags go here
        </footer>
      </div>
    </div>
  )
}

export default App
