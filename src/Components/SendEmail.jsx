import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactUs = (e) => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('gmail', 'template_hhkdsoa', e.target, 'Fgn1AlsB0gD0INeiN')
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div className='formContainer'>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <div className='formGroup'>
            <input
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
            />
          </div>
          <div className='formGroup'>
            <input
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
            />
          </div>
          <div className='formGroup'>
            <input
              type='text'
              className='form-control'
              placeholder='Subject'
              name='subject'
            />
          </div>
          <div className='formGroup'>
            <input
              type='text'
              className='form-control'
              placeholder='Your message'
              name='message'
            />
          </div>
          <div className='formGroup'>
            <input
              type='submit'
              className='form-control'
              value='Send Message'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUs
