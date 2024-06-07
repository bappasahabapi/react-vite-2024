/* eslint-disable react/prop-types */
export default function TabButton({ children, }) {

    function handleClick(){
        console.table('hello');
    }


  return (
    <li>
      <button
      onClick={handleClick}
      >{children}</button>{" "}
    </li>
  );
}

// export default function TabButton({label}) {
//           return (
//             <li><button>{label}</button> </li>
//           )
//         }


import Header from "./components/Header";
import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
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
            <TabButton >Component-Btn</TabButton>
            <TabButton>JSX-Btn</TabButton>
            <TabButton>Props-Btn</TabButton>
            <TabButton>State-Btn</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
