export default function Navigation() {
  return (
    <div style={{ display: "flex", placeItems: "center", gap: "15px", fontSize:"25px"}}>
      <div>
        <a style={{ color: "yellow" }} href="/">
          Home
        </a>
      </div>
      <div>
        {" "}
        <a style={{ color: "white" }} href="/calculator">
          calculator
        </a>
      </div>
      <div>
        {" "}
        <a style={{ color: "white" }} href="/expenses">
          Expenses
        </a>
      </div>
    </div>
  );
}
