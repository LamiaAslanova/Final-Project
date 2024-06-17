import React from 'react'
import './SignUpPage.css'

const SignUpPage = () => {
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
              <form action="#">
                <div className="field">
                  <label htmlFor="first__name">First name *</label>
                  <input type="text" id='first__name' />
                </div>
                <div className="field">
                  <label htmlFor="last__name">Last name *</label>
                  <input type="text" id='last__name' />
                </div>
                <div className="field">
                  <label htmlFor="email">Email *</label>
                  <input type="text" id='email' />
                </div>
              </form>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUpPage