import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";
import Counter5 from "./Counter5";
import Counter6 from "./Counter6";

export default function App() {
  return (
    <>
      <div>
        <b>State is tied to a position in the render tree</b>
        <div style={{ display: "flex", gap: "15px" }}>
          <div style={{ border: "1px solid red" }}>
            <Counter1 />
            <Counter1 />
          </div>
          <div style={{ border: "1px solid green" }}>
            <Counter2 />
          </div>
        </div>
      </div>
      <br />
      <div>
        <b>Same component at the same position preserves state</b>
        <div style={{ display: "flex", gap: "15px" }}>
          <div style={{ border: "1px solid black" }}>
            <Counter3 />
          </div>
        </div>
      </div>
      <br />
      <div>
        <b>Different components at the same position reset state</b>
        <div style={{ display: "flex", gap: "15px" }}>
          <div style={{ border: "1px solid black" }}>
            <Counter4 />
          </div>
          <div style={{ border: "1px solid black" }}>
            <Counter5 />
          </div>
          <div style={{ border: "1px solid black" }}>
            <Counter6 />
          </div>
        </div>
      </div>
    </>
  );
}
