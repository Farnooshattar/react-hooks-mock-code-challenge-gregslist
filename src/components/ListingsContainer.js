import React from "react";
import ListingCard from "./ListingCard";
// import ListingCard from "./ListingCard";

function ListingsContainer({ listing, deleteFromScreen }) {
  return (
    <main>
      <ul className="cards">
        {listing.map((item, index) => {
          return <ListingCard key={index} item={item} deleteFromScreen={deleteFromScreen} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
