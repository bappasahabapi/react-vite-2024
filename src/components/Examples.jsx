import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../../data";
import Section from "./Section";

export default function Examples() {
  const [seletedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a tab topic</p>;
  if (seletedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3 style={{ color: "yellow" }}>{EXAMPLES[seletedTopic]?.title}</h3>
        <p>{EXAMPLES[seletedTopic]?.description}</p>
        <pre>
          <code>{EXAMPLES[seletedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Example Tab Buttons sections" id="examples" className="">
      <h2></h2>
      <menu>
        <TabButton
          isSelected={seletedTopic === "components"}
          onClick={() => handleSelect("components")}
        //   onSelect={() => handleSelect("components")}
        >
          Components-Btn
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "jsx"}
        //   onSelect={() => handleSelect("jsx")}
        onClick={() => handleSelect("jsx")}
        >
          JSX-Btn
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "props"}
        //   onSelect={() => handleSelect("props")}
        onClick={() => handleSelect("props")}
        >
          Props-Btn
        </TabButton>
        <TabButton
          isSelected={seletedTopic === "state"}
        //   onSelect={() => handleSelect("state")}
        onClick={() => handleSelect("state")}
        >
          State-Btn
        </TabButton>
        {/* <TabButton onSelect={handleSelect}>State-Btn</TabButton> */}
      </menu>
      <b>useState hook</b> for Dynamic Content showing. <br />
      {seletedTopic && (
        <>
          <span style={{ border: "2px solid white", padding:'2px' }}>{seletedTopic}</span> tab
          is selected
          <br />
        </>
      )}
      <br />
      {tabContent}
    </Section>
  );
}
