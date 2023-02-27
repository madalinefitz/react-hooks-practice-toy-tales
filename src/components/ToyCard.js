import React from "react";

function ToyCard({key, name, img, likes}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        key={key}
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
