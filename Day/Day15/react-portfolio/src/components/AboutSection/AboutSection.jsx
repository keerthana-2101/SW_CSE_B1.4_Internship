import './AboutSection.css';


function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='G. Keerthana Reddy' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
          <p>Hi! I'm G. Keerthana Reddy, a B.Tech CSE student passionate about cloud computing, web development, and building practical technology projects.</p>
        </div>
      </div>
    </section>
  );
}


export default AboutSection;