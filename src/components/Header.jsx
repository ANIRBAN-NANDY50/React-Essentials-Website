import reactImg from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

export default function Header(){
    const discriptions = reactDescriptions[genRandomInt(2)];
    // storing the dynamic value in a const value 
      return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          {/* optimally extracting the image from assets folder using dynamic curly brackets */}
          <h1>React Essentials</h1>
          <p>
            {discriptions} React concepts you will need for almost any app you are
            going to build!
            {/* curly braces help to display dynamic values instead of hardcoded value */}
          </p>
      </header>)
  
  }