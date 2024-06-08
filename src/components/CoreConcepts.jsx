import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts sections</h2>
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept {...item} key={item.title} />
        ))}
      </ul>
      {/* <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
          </ul> */}
    </section>
  );
}
