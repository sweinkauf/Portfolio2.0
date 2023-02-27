import { v4 as uuidv4 } from 'uuid';
import CodeNetImg from '../images/CodeNet.png';
import MovieTrackerImg from '../images/MovieTracker.png';
import NoteTakerImg from '../images/NoteTaker.png';
import passwordGenImg from '../images/passwordGen.png';
import oldPortfolioImg from '../images/oldPortfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Code-Net',
    link: 'https://protected-wave-25502.herokuapp.com/',
    desc:
      'Team Project: Worked with a team to create a small scale social media site geared towards coders. ',
    img: CodeNetImg,
  },
  {
    id: uuidv4(),
    name: 'Movie Traker',
    link: 'https://angel-pup.github.io/movie-vibes/',
    desc:
      'Team Project: Worked with a team to create a site were users can rank their favorite movies. ',
    img: MovieTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Note Taker',
    link: 'https://young-waters-53119.herokuapp.com/',
    desc:
      'App that allows user to write and save notes. ',
    img: NoteTakerImg,
  },
  {
    id: uuidv4(),
    name: 'Password Generator',
    link: 'https://sweinkauf.github.io/password-generator/',
    desc:
      'App the generates a unique password for the user. ',
    img: passwordGenImg,
  },
  {
    id: uuidv4(),
    name: 'Old Portfolio',
    link: 'https://sweinkauf.github.io/The_Portfolio-of-Scott-Weinkauf/',
    desc:
      'See how far I have come. This was my first Portfolio that only used Html and CSS.',
    img: oldPortfolioImg,
  },
];

export default projects;