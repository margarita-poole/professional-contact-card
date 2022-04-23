import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import emailjs from '@emailjs/browser'

const ContactMe = (props) => {
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
    props.onClick()
  }

  return ReactDOM.createPortal(
    <div className='formContainer' onClick={props.onClick}>
      <div
        className='formBody'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button type='button' onClick={props.onClick}>
          X
        </button>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
          />

          <input
            type='email'
            className='form-control'
            placeholder='Email'
            name='email'
          />

          <input
            type='text'
            className='form-control'
            placeholder='Subject'
            name='subject'
          />

          <textarea
            type='text'
            className='form-control'
            placeholder='Your message'
            name='message'
          />

          <input type='submit' className='form-control-button' value='Send Message' />
        </form>
      </div>
    </div>,
    document.body
  )
}

export default ContactMe
