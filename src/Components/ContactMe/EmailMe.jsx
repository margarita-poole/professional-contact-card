import { useState } from 'react'
import ContactUs from './SendEmail'

const EmailButton = () => {
  const [isContactUs, setIsContactUs] = useState(false)

  const onClick = () => {
    setIsContactUs(!isContactUs)
  }

  return (
    <div>
      <button type='button' className='emailMeButton' onClick={onClick}>
        ✉ Email Me
      </button>
      {isContactUs && <ContactUs onClick={onClick}/>}
    </div>
  )
}

export default EmailButton
