
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [notes, setNotes] = useState([])
  const getData = () => {

    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  };


  useEffect(getData, [])

  console.log('render', notes.length, 'notes')

  return (
    <div className="App">
      {
        notes.map(note => {
          const { id, content } = note
          return <div key={id}>{content}</div>
        }
        )}
    </div>
  );
}

export default App;
