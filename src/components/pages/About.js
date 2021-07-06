import './About.css';

export default function About() {
  return (
    <section className='flex flex-col md:flex-row'>
      {/* md:self-center */}
      <div className='flex flex-col justify-center items-center md:w-1/2 p-6'>
        <h3 className=''> About </h3>
        <p className='aboutMe'>
        I am a web developer that has skills in both the front-end of web applications and the back-end. 
        I use my design skills to make applications look beautiful and I am also able to work on the technically challenging aspects of the application too. 
        Bringing a keen eye for details, strong ability to implement mock-ups, and understanding of great user experience design, 
        I'm looking forward to putting my abilities to work as part of a fast-paced, quality-driven team to improve web experiences. 
        </p>
      </div>
      <div className='bg-landing bg-cover bg-center bg-no-repeat h-full md:w-1/2'></div>
    </section>
  );
}