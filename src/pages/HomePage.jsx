import Header from "../components/Header";
import CoreConcepts from "../components/CoreConcepts";
import Examples from "../components/Examples";

function HomePage() {
  return (
    <>
    {/* <a style={{color:'white',fontSize:'50px'}} href="/calculator">calculator</a> */}
      <Header />
      <main>
        <Examples />
        <hr /> <br />
        <CoreConcepts />
      </main>
    </>
  );
}

export default HomePage;
