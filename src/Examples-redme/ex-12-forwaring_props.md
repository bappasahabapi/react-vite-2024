```javascript
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active":undefined} onClick={onSelect}>
        {children}
      </button>{" "}
    </li>
  );
}


```
To

```javascript
/* eslint-disable react/prop-types */
export default function TabButton({ children, isSelected,  ...props }) {
  return (
    <li>
      <button className={isSelected ? "active":undefined}  {...props}>
        {children}
      </button>{" "}
    </li>
  );
}


```
```javascript
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

```
```javascript
export default function Section({children, title, ...props}) {
  return (
    <section {...props} >
        <h2>{title}</h2>
        {children}
    </section>
  )
}

 <Section title="Example Tab Buttons sections" id="examples" className="">

```
```javascript


```