import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListing] = useState([]);
  
  useEffect(() => {
    fetch(" http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setListing(data);
        console.log(data);
      });
  }, []);

  const deleteFromScreen = (itemId) => {
    
    setListing(listing.filter((item) => (itemId !== item.id)))
  }

  function searchSequence(searchValue) {
    console.log("searchValue", searchValue)
    //searchedItem = (listing.filter((item) => (item.description === searchValue)));
    setListing((listing.filter((item) => (item.description.includes(searchValue)))));
  }
  function showAll() {
    fetch(" http://localhost:6001/listings")
      .then((r) => r.json())
      .then((data) => {
        setListing(data);
        
      });
  }

  return (
    <div className="app">
      <Header searchSequence={searchSequence}/>
      <ListingsContainer listing={listing} deleteFromScreen={deleteFromScreen}/>
      <button onClick={showAll}>show all</button>
    </div>
  );
}

export default App;
