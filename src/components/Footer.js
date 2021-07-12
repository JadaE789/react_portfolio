import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './css'

export default function Footer() {
  const iconLinks = [
    {
      Icon: FaLinkedin,
      link: 'www.linkedin.com/in/jada-desormeaux',
    },
    { Icon: FaGithub, link: 'https://github.com/JadaE789' },
    { Icon: FaEnvelope, link: 'mailto:JadaE789@gmail.com' },
  ];

  return (
    <footer className='flex flex-col space-y-4 p-4 bg-gray-700'>
      <div className='flex justify-center space-x-4'>
        {iconLinks.map((iconLink, index) => (
          <IconLink key={index} Icon={iconLink.Icon} link={iconLink.link} />
        ))}
      </div>
      <p className='text-center text-gray-200'>© 2021 Jada Desormeaux</p>
    </footer>
  );
}

function IconLink({ Icon, link }) {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      className='text-gray-200 hover:text-gray-100 hover:bg-gray-500 p-2 rounded'
    >
      <Icon size='20px' />
    </a>
  );
}