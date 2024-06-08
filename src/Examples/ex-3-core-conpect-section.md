```javascript


import CoreConcept from '../components/CoreConcept';
import componentImg from './assets/components.png'
import Header from "./components/Header";


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept title="Componets" description="Component concept" image={componentImg}/>
            <CoreConcept title='JSX' description="JSX concept"/>
            <CoreConcept title='props' description="Props concept"/>
            <CoreConcept title='State' description="State concept"/>
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
```