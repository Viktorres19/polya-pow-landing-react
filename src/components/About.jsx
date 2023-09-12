import aboutImg from '../images/about.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='me' />

      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div>
        <article className='about-info'>
          <h3>A little about me.</h3>
          <p>
            I am a Ukrainian girl Polya Pow. My real name is Polina Lukyanchenkova.
            I have been dancing for several years, and now I am doing acrobatics.
            Let`s get acquainted!
          </p>
          <p>
            I am beautiful in the gymnastic bar, I perform various tricks. I study perfectly.
            I also like to draw, skate, rollerblade and make exiting videos!
          </p>
          <a href='#' className='btn'>
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
