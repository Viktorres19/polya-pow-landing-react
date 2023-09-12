import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>
      <p className='copyright'>
        &copy; Polya Pow
        <span id='date'>{new Date().getFullYear()}</span>. <a href="http://viktor-l-portfolio.zzz.com.ua/" target="_blank">Produced by Viktorres</a>
      </p>
    </footer>
  )
}
export default Footer
