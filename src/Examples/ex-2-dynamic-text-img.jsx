import logo from '../../src/assets/react-core-concepts.png'
import logo1 from '../assets/bappa1.png';
import logo2 from '../assets/favicon.png';

const reactImg =[
    logo,
    logo1,
    logo2
]

const reactDescription = [
    'Dynamic Content',
    'Fundamentals',
    'Core'
];

function genRanddomIndex(max){
    return Math.floor(Math.random() *(max+1));
}

export default function Header(){

    const dynamicDescription = reactDescription[genRanddomIndex(2)];
    const dynamicimg =reactImg[genRanddomIndex(2)]
    return(
      <header>
        <img src={dynamicimg} alt="bappa" />
        {/* <img src={logo} alt="bappa" /> */}
        {/* <img src="../src/assets/react-core-concepts.png" alt="bappa" /> */}
        <h1>React Essentials v18.2</h1>
        <p>
          <span>{dynamicDescription} </span> React Concept need for every app | component, jsx, props, state
        </p>
        {/* <p>
          <span>{reactDescription[genRanddomIndex(3)]} </span> React Concept need for every app | component, jsx, props, state
        </p> */}
      </header>
    )
  }