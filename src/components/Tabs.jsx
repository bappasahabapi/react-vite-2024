/* eslint-disable react/prop-types */

export default function Tabs({ children, buttons,buttonContainer="menu" }) {
  const ButtonContainer =buttonContainer ;
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {/* //this part is for content  */}
      {children}
    </>
  );
}
// export default function Tabs({ children, buttons }) {
//   return (
//     <>
//       <menu>{buttons}</menu>
//       {/* //this part is for content  */}
//       {children}
//     </>
//   );
// }

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
