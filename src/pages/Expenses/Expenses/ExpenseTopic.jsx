import { useState } from "react";
import { EXPENSES } from "../../../../data";
import TabButton from "../../../components/TabButton";
import Section from "../../../components/Section";
import Tabs from "../../../components/Tabs";


export default function ExpenseTopic() {
  const [seletedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please Select a tab topic</p>;
  if (seletedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3 style={{ color: "yellow" }}>{EXPENSES[seletedTopic]?.title}</h3>
        <p>{EXPENSES[seletedTopic]?.description}</p>
        <pre>
          <code>{EXPENSES[seletedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  let tabButtons = (
    <>
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
    </>
  );

  return (
    <Section title="Example Tab Buttons sections" id="examples" className="">
      <b>useState hook</b> for Dynamic Content showing. <br />
      <Tabs buttons={tabButtons}
      // buttonContainer='menu'
      >
        {seletedTopic && (
          <>
            <span style={{ border: "2px solid white", padding: "2px" }}>
              {seletedTopic}
            </span>{" "}
            tab is selected
            <br />
          </>
        )}
        {tabContent}
      </Tabs>
    </Section>
  );
}
