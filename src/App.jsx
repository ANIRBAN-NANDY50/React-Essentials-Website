import { useState } from 'react';
import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic,setSelectedTopic] = useState();

  function infoSelect(selectedButton){
    // we choose the info to be displayed by the type of button clicked
    // console.log(selectedButton);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
}
  return (
    <div>
      <Header />
      {/* we call the header function using the opening and closing header*/}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcepts key={conceptItem.title} {...conceptItem}/>)}
            {/* the above statement is a replacement of the code below such that it represents the core concepts dynamically
            and does so using a map concept based on the availability of the code body */}

            {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
            {/* here title and discription are PROPS(properties) */}
            {/* <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
            <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/> */}
            {/* here we are using the spread operator to pass all the properties at once */}
          </ul>
        </section>
        <section id="examples">
          <h2>
            Examples
          </h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={() => infoSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic==='jsx'} onSelect={() => infoSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='props'} onSelect={() => infoSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='state'} onSelect={() => infoSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please Click A Button</p> :
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
          </div>
        }
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
