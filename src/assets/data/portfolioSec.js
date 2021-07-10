import { projectImages } from '../img/projects';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

export const projects = [
  {
    title: 'Sneaker Hype',
    notes: [
      'Full stack web application that allows user to search and review a shoe',
      'This app requires real user log-in authentication inorder to view other reviews and to write a review',
      'Users able to leave a 1-5 star review rating',
    ],
    link: 'https://sneakerhype.herokuapp.com/',
    source: 'https://github.com/jorozco4/SneakerHype',
  },
  {
    title: 'Workout Tracker',
    notes: [
      'Full stack web application that allows user to track and record their workouts',
      'App views served as static HTML from server with associated JavaScript to handle UI changes. Server runs on Express.js with connection to Mongo database hosted on Mongo Atlas, using mongoose ODM for workout data CRUD operations.',
    ],
    link: 'https://workout-tracker19.herokuapp.com/',
    source: 'https://github.com/JadaE789/Workout_tracker19',
  },
  {
    title: 'Work Day Scheduler',
    notes: [
      'This is a simple calendar application that allows the user to save events for each hour of the day',
      'This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery',
      'This app is using API moment.js',
    ],
    link: 'https://jadae789.github.io/dailyCalendar_hw5/',
    source: 'https://github.com/JadaE789/dailyCalendar_hw5',
  },
  {
    title: 'City Search Weather Dashboard',
    notes: [
      'Consumes OpenWeather API to create a city weather search dashboard',
      'API consumption performed using asynchronous JS using promises and async/await',
      'Recent searches saved to browser local storage for data persistence and retrieval',
    ],
    link: 'https://jadae789.github.io/weather_board_hw6/',
    source: 'https://github.com/JadaE789/weather_board_hw6',
  },
  {
    title: 'Food and Fitness Tracker',
    notes: [
      'Single page client-side web app to allow app users to record completed exercises and meals prepared',
      'Foundation CSS framework for front end styling in combination with select custom CSS and JavaScript for dynamic front end UI changes',
      'Saves selected completed exercises and meal recipes to browser local storage for data persistence',
    ],
    link: 'https://spfave.github.io/fitness-exercise-food-selector/',
    source: 'https://github.com/spfave/fitness-exercise-food-selector',
  },
];

export const skills = {
  frontEnd: {
    title: 'Front End',
    notes: [
      'HTML',
      'CSS',
      'JavaScript',
      'JQuery',
      'Bootstrap',
      'React',
    ],
  },
  backEnd: {
    title: 'Back End',
    notes: [
      'Node.js',
      'Express',
      'REST API design',
      'GraphQL',
      'MySQL and Sequelize',
      'MongoDB and Mongoose',
    ],
  },
  devTools: {
    title: 'Dev Tools',
    notes: ['GitHub', 'VS Code', 'NPM'],
  },
};

export const iconLinks = [
  {
    Icon: FaLinkedin,
    link: 'www.linkedin.com/in/jada-desormeaux',
  },
  { Icon: FaGithub, link: 'https://github.com/JadaE789' },
  { Icon: FaEnvelope, link: 'mailto:JadaE789@gmail.com' },
];