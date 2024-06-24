import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/signIn', { email, password })
            .then(res => {
                console.log(res.data)
                if (res.data === 'Success') {
                    navigate('/')
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <main>
            <div className="signin__page">
                <div className="custom-container signin__page__cont">
                    <div className="row signin__page__row">
                        <div className="col-8 signin__page__col">
                            <img width='200px' src="https://emails.britishmuseum.org/files/cmi_dev/project_3562/logos/logo_black.png" alt="" />
                            <h2>Email preferences</h2>
                            <h3>Sign up to receive news, stories and offers from the British Museum</h3>
                            <p>Please enter your details to sign up to our emails.</p>
                            <span>* denotes required fields</span>
                            <form onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="text" class="form-control" id="email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <p>aə akauntun yoxdu? <Link to='/sign-up'>Sign up</Link></p>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignInPage