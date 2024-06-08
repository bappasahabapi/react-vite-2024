import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../../data";
import Header from "../components/Header";
import CoreConcept from "../components/CoreConcept";
import TabButton from "../components/TabButton";


function HomePage() {

  const [seletedTopic, setSelectedTopic]=useState();
  // const [seletedTopic, setSelectedTopic]=useState('Please click a tab');


  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }


  let tabContent =<p>Please Select a tab topic</p>
  if(seletedTopic){
    tabContent = <div id="tab-content">
    <h3 style={{color:'yellow'}}>{EXAMPLES[seletedTopic]?.title}</h3>
    <p>{EXAMPLES[seletedTopic]?.description}</p>
    <pre>
      <code>
          {EXAMPLES[seletedTopic]?.code}
      </code>
    </pre>
  </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
           <ul>
            {CORE_CONCEPTS.map((item)=> <CoreConcept {...item}  key={item.title}/>)}
          </ul>
          <hr /> <br />
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul>
         
         
        </section>
        <section id="examples">
          <h2>Tab Buttons</h2>
          <menu>
            <TabButton isSelected={seletedTopic==='components'} onSelect={()=>handleSelect('components')}>Components-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='props'} onSelect={()=>handleSelect('props')}>Props-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='state'} onSelect={()=>handleSelect('state') }>State-Btn</TabButton>
            {/* <TabButton onSelect={handleSelect }>State-Btn</TabButton> */}
          </menu>
          <b>useState hook</b> for Dynamic Content showing. <br /> 
          <span> {seletedTopic} </span> tab is selected <br /><br />
          {tabContent}
        
        </section>
      </main>
    </div>
  );
}

export default HomePage;
