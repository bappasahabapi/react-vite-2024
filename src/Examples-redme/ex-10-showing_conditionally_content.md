
- Conditionally showing dynmic content [1st way]
```javascript
          {!seletedTopic ? <p>Please select a topic</p>:null}
          {seletedTopic ?<div id="tab-content">
            <h3>{EXAMPLES[seletedTopic]?.title}</h3>
            <p>{EXAMPLES[seletedTopic]?.description}</p>
            <pre>
              <code>
                  {EXAMPLES[seletedTopic]?.code}
              </code>
            </pre>
          </div>:null}

```
- Conditionally showing dynmic content [2nd way]
```javascript
          {!seletedTopic && <p>Please select a topic</p>}
          {seletedTopic && <div id="tab-content">
            <h3>{EXAMPLES[seletedTopic]?.title}</h3>
            <p>{EXAMPLES[seletedTopic]?.description}</p>
            <pre>
              <code>
                  {EXAMPLES[seletedTopic]?.code}
              </code>
            </pre>
          </div>}

```
- Conditionally showing dynmic content [3nd way:  if ? () :()]
```javascript
          {!seletedTopic ? <p>Please select a topic</p>:<div id="tab-content">
            <h3>{EXAMPLES[seletedTopic]?.title}</h3>
            <p>{EXAMPLES[seletedTopic]?.description}</p>
            <pre>
              <code>
                  {EXAMPLES[seletedTopic]?.code}
              </code>
            </pre>
          </div>
}

```
- Conditionally showing dynmic content [4th way using variaable]
```javascript
  const [seletedTopic, setSelectedTopic]=useState();
  // const [seletedTopic, setSelectedTopic]=useState('Please click a tab');


  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }


  let tabContent =<p>Please Select a tab topic</p>
  if(seletedTopic){
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[seletedTopic]?.title}</h3>
    <p>{EXAMPLES[seletedTopic]?.description}</p>
    <pre >
      <code>
          {EXAMPLES[seletedTopic]?.code}
      </code>
    </pre>
  </div>
  }
```


```javascript
export default function TabButton({ children , onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>{" "}
    </li>
  );
}
```

```javascript
import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "../data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {

  const [seletedTopic, setSelectedTopic]=useState();
  // const [seletedTopic, setSelectedTopic]=useState('Please click a tab');


  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
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
            <TabButton onSelect={()=>handleSelect('components')}>Components-Btn</TabButton>
            <TabButton onSelect={()=>handleSelect('jsx')}>JSX-Btn</TabButton>
            <TabButton onSelect={()=>handleSelect('props')}>Props-Btn</TabButton>
            <TabButton onSelect={()=>handleSelect('state') }>State-Btn</TabButton>
            {/* <TabButton onSelect={handleSelect }>State-Btn</TabButton> */}
          </menu>
          <b>useState hook</b> for Dynamic Content showing. <br /> 
          <span> {seletedTopic} </span> tab is selected <br /><br />
          {!seletedTopic ? <p>Please select a topic</p>:null}
          {seletedTopic ?<div id="tab-content">
            <h3>{EXAMPLES[seletedTopic]?.title}</h3>
            <p>{EXAMPLES[seletedTopic]?.description}</p>
            <pre>
              <code>
                  {EXAMPLES[seletedTopic]?.code}
              </code>
            </pre>
          </div>:null}
        
        </section>
      </main>
    </div>
  );
}

export default App;

```