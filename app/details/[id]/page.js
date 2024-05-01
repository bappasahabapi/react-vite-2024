import EventDetails from "@/app/components/details/EventDetails";
import EventVenue from "@/app/components/details/EventVenue";
import HeroSection from "@/app/components/details/HeroSection";
import React from "react";

const DetailsPage = () => {
  return (
    <>
      <HeroSection />
      <section className="container">
              <div className="grid grid-cols-5 gap-12 my-12">
        <EventDetails />
        <EventVenue />
      </div>
      </section>

    </>
  );
};

export default DetailsPage;
