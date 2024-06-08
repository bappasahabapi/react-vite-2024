/* eslint-disable react/prop-types */

export default function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>
      {/* //this part is for content  */}
      {children}
    </>
  );
}

{
  /* <menu>
<TabButton
  isSelected={seletedTopic === "components"}
  onClick={() => handleSelect("components")}
//   onSelect={() => handleSelect("components")}
>
  Components-Btn
</TabButton>

</menu>
 {tabContent} */
}
