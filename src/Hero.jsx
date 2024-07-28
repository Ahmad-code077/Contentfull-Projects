import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>ContentFull CMS</h1>
          <p>
            My project showcase includes a variety of applications that
            highlight my diverse skills in web development. Among them are a
            Grocery Bud Application, a Color Shades Generator for creating
            dynamic color palettes, my personal portfolio site, an Unsplash
            Images site for browsing high-quality photos, and a Shopping Cart
            application. These projects, along with many others, demonstrate my
            ability to build practical and interactive web solutions.
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
