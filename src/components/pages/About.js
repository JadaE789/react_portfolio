import './About.css';

export default function About() {
  return (
    <section className='flex flex-col md:flex-row'>
      {/* md:self-center */}
      <div className='flex flex-col justify-center items-center md:w-1/2 p-6'>
        <h3 className=''> About </h3>
        <p className=''>
            In December 2019 I received my Associates degree in Information Technology. 
            While I was in school I took Intro to Technology, Programming Logic 
            and Design, Microsoft Access and Excel, A+ Hardware, Networking, and Project Management. 
            I got a lot of experience and knowledge in almost all 
            fields of IT. I took coding in high school for 
            two years and I really did enjoy doing that because there's
            a lot of room for creativity and allows my work to really show/reflect who I am.
        </p>
        <p className=''>
          I'm looking forward to solving challenging problems in the technology
          sector, all while feeding my passion for learning and understanding
          how products and services are designed, built, and maintained.
        </p>
      </div>
      <div className='bg-landing bg-cover bg-center bg-no-repeat h-full md:w-1/2'></div>
    </section>
  );
}