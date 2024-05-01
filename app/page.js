import EventList from "./components/landinng/EventList";
import Header from "./components/landinng/Header";

export default function Home() {
  return (
   <section className="container border border-teal-100">
    <Header/>
    <EventList/>
   </section>
  );
}
