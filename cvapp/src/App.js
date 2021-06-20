import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  function handleChange(e) {
    
    const key = e.target.id
    setFormData({
      ...formData, 
      [key]: e.target.value
    })
  }

  function Output() {
      return (
      <div>
        <div id="name-submission">Name: {formData.name}</div>
        <div id="email-submission">Email: {formData.email}</div>
        <div id="phone-submission">Phone:{formData.phone}</div>
      </div>
      )
    }

  return (
    <div className="App">
      <div className="container">
        <div className="form-wrapper">
          <form>
            <div className="input-wrapper">
              <label>Name:</label>
              <input id="name" type="text" onChange={handleChange} value={formData.name}></input>
            </div>
            <div className="input-wrapper">
              <label>Email:</label>
              <input id="email" type="text" onChange={handleChange} value={formData.email}></input>
            </div>
            <div className="input-wrapper">
              <label>Phone:</label>
              <input id="phone" type="text" onChange={handleChange} value={formData.phone}></input>
            </div>
          </form>
        </div>

        <Output/>
      </div>
    </div>
  );
}

export default App;
