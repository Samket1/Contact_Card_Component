import { useState, useEffect } from 'react'
import './App.css'
import Contact from './Contact'
function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])
  return (
    <div>
      <h1>Contact List</h1>
      <div className='cards-grid'>
        {contacts.map((user) => (
          <Contact
            key={user.id}
            name={user.name}
            phone={user.phone}
            email={user.email}
            pfp={`https://i.pravatar.cc/150?u=${user.id}`}
          />

        ))}

      </div>
    </div>
  )
}

export default App
