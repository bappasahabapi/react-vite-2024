import Header from "../components/Header";
import CoreConcepts from "../components/CoreConcepts";
import Examples from "../components/Examples";

function HomePage() {
  return (
    <>
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
