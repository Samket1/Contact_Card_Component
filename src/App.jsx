import './App.css'
import Contact from './Contact'
function App() {
  return (
    <div>
      <h1>Contact List</h1>
      <div className='cards-grid'>

        <Contact
          name="Random Person"
          phone="09-12-34-56-78"
          email="randomP@gmail.com"
          pfp="https://cdn-icons-png.flaticon.com/512/9706/9706577.png"
        />

        <Contact
          name="Random Person 2"
          phone="09-12-34-56-79"
          email="randomP2@gmail.com"
          pfp="https://cdn-icons-png.flaticon.com/512/9706/9706577.png"
        />
        <Contact
          name="Random Person 3"
          phone="09-12-34-56-80"
          email="randomP3@gmail.com"
          pfp="https://cdn-icons-png.flaticon.com/512/9706/9706577.png"
        />
        <Contact
          name="Random Person 4"
          phone="09-12-34-56-81"
          email="randomP4@gmail.com"
          pfp="https://cdn-icons-png.flaticon.com/512/9706/9706577.png"
        />
      </div>
    </div>

  )
}

export default App
