import {useState} from "react";

function ToyCard({name, id, image, likes, deleteToy, increaseLikes}) {
  const [addedLikes, setAddedLikes] = useState(likes)

  const handleLikes = () => {
    const newLikes = addedLikes + 1
    setAddedLikes(newLikes)


    fetch(`http://localhost:3001/toys/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify ({
                likes: newLikes
             })
          })
      .then (r=>r.json())
      .then (increaseLikes)
  }

  const handleDelete = () => {
    fetch (`http://localhost:3001/toys/${id}`, {method: "DELETE"})
    deleteToy(id)
  }
  
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        key={id}
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{addedLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
