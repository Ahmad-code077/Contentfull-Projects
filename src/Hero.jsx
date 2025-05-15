import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Projects</h1>
          <p>
            Explore my top projects, including a modern Dating App (Love
            Finder), the Trust Your Surgeon platform, a full-featured E-Commerce
            site, and an Instagram Video Downloader. These applications showcase
            my expertise in building real-world, scalable web solutions using
            the latest technologies. Check out these and more in my portfolio
            below.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='Women with the browser' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
