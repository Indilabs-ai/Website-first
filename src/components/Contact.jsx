import React from 'react'
import '../App.css';
const Contact = () => {
  return (
    <>
        <div className='contact-wrapper'>
            <div className='contact-container'>
                <div className='contact-content'>
                  <p className='contact-heading'>Get in touch with us</p>
                  <p>Please enter your email address and we shall get back to you. We promise not to spam you!</p>
                </div>
                <div className='contact-form'>
                  <form action="">
                    <div>
                      <input type="text" placeholder='Enter email address'/>
                      <button>Continue</button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact