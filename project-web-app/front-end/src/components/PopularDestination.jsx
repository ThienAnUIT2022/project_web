import React from "react";
import DestinationCard from "./DestinationCard";

const PopularDestinations = ({ destinations }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row mb-2">
          <div className="col-md-12 text-center mb-5">
            <h1>Popular destinations</h1>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              imageSrc={destination.imageSrc}
              title={destination.title}
              description={destination.description}
              id={destination.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
