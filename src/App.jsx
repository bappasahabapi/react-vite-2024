import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navabr from "./components/Navabr";
import SearchBox from "./components/SearchBox";
import Table from "./components/Table";

function App() {
  return (
    <>
      <div className="bg-[#172227] font-[Inter] text-white">
        {/* Navbar  */}
        <Navabr />

        {/* Hero  */}
        <Hero />
        {/* <!--Begin Students table --> */}
        <section className="py-24 lg:pt-[120px] lg:pb-28">
          <div className="container">
            <div className="mb-16 flex flex-col items-center">
              <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                <span className="text-[#00CC8C]">Students</span> of the Year
              </h2>
              {/* <!-- Search Box --> */}
              <SearchBox />
            </div>
            <div className="max-w-[848px] mx-auto overflow-auto">
              {/* table  */}
              <Table />
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
