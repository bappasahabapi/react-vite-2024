import Scoreboard1 from "./Scoreboard1";
import Scoreboard2 from "./Scoreboard2";
import Scoreboard3 from "./Scoreboard3";
import Messenger from "./chat/Messenger";



function App() {
  return (
    <>
      <div style={{ display: "flex", alignItems:'center', justifyContent:'center', gap:'10px' }}>
        <div style={{ border: "1px solid black" }}>
          <Scoreboard1 />
        </div>
        <div style={{ border: "1px solid black" }}>
          <Scoreboard2 />
        </div>
        <div style={{ border: "1px solid black" }}>
          <Scoreboard3 />
        </div>
      </div>
      <br /> <br />
      <div style={{ display: "flex", alignItems:'center', justifyContent:'center', gap:'10px' }}>
        <div style={{ border: "1px solid black" }}>
         <Messenger/>
        </div>

      </div>
    </>
  );
}

export default App;
