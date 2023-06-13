import React, {useState} from "react";

function ListingCard({item, deleteFromScreen}) {
  const {id,description,image,location}= item
  const [isFav, setFav] = useState(true)
  const onFavClick = () => setFav(!isFav)
  const handleDelete = () =>{
    console.log("id",id)
    fetch(`http://localhost:6001/listings/${id}`, {method : "DELETE"})
    .then((r) => r.json())
    .then(()=>deleteFromScreen(id))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={onFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={onFavClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
