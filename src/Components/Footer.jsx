import linkedIn from '../Assets/icons8-linkedin-circled-100.png'
import github from '../Assets/icons8-github-100.png'

const Footer = () => {
  return (
    <div className='footer'>
      <a
        href='https://www.linkedin.com/in/margarita-poole/'
        rel='noreferrer'
        target='_blank'
      >
        <img src={linkedIn} alt='linkedIn' className='footer-LinkedIn_icon'/>
      </a>
      <a
        href='https://github.com/margarita-poole'
        rel='noreferrer'
        target='_blank'
      >
        <img src={github} alt='github' className='footer-GitHub_icon'/>
      </a>
    </div>
  )
}

export default Footer;