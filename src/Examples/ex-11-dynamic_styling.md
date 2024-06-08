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
```javascript

  const [seletedTopic, setSelectedTopic]=useState();
  // const [seletedTopic, setSelectedTopic]=useState('Please click a tab');


  function handleSelect(selectedButton) {
    //selectedButton=>'componetBtn',jsxBtn  // string takes
    setSelectedTopic(selectedButton);
  }

<menu>
            <TabButton isSelected={seletedTopic==='components'} onSelect={()=>handleSelect('components')}>Components-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='jsx'} onSelect={()=>handleSelect('jsx')}>JSX-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='props'} onSelect={()=>handleSelect('props')}>Props-Btn</TabButton>
            <TabButton isSelected={seletedTopic==='state'} onSelect={()=>handleSelect('state') }>State-Btn</TabButton>
          </menu>
```


