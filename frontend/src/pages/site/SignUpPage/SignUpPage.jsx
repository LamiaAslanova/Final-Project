import React, { useState } from 'react'
import './SignUpPage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUpPage = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    generateUsername(e.target.value, lastName);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    generateUsername(firstName, e.target.value);
  };

  const generateUsername = (first, last) => {
    if (first && last) {
      setUserName(first + last);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/signUp', { firstName, lastName, userName, email, password })
      .then(res => {
        console.log(res.data)
        navigate('/sign-in')
      })
      .catch(error => console.log(error))
  };

  return (
    <main>
      <div className="signup__page">
        <div className="custom-container signup__page__cont">
          <div className="row signup__page__row">
            <div className="col-8 signup__page__col">
              <img src="https://emails.britishmuseum.org/files/cmi_dev/project_3562/logos/logo_black.png" alt="" />
              <h2>Email preferences</h2>
              <h3>Sign up to receive news, stories and offers from the British Museum</h3>
              <p>Please enter your details to sign up to our emails.</p>
              <span>* denotes required fields</span>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="first__name" class="form-label">First name *</label>
                  <input type="text" class="form-control" id="first__name" value={firstName} onChange={handleFirstNameChange} />
                </div>
                <div class="mb-3">
                  <label for="last__name" class="form-label">Last name *</label>
                  <input type="text" class="form-control" id="last__name" value={lastName} onChange={handleLastNameChange} />
                </div>
                <div class="mb-3">
                  <label for="user__name" class="form-label">User Name</label>
                  <input type="text" class="form-control" id="user__name" value={userName} readOnly />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email *</label>
                  <input type="text" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password *</label>
                  <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <p>Have you been account? <Link to='/sign-in'>Sign in</Link></p>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage