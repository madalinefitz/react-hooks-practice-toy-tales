import {useState} from "react";

function ToyCard({name, image, likes, id, deleteToy, increaseLikes}) {
  const [numberOfLikes, setNumberOfLikes] = useState(likes)
  
  const handleDelete = () => {
    fetch(`http://localhost:3001/toys/${id}`, {method: "DELETE"})
    deleteToy(id)
  }

  const handleLikes = () => {
    const newNumber = numberOfLikes + 1
    setNumberOfLikes(newNumber)

    fetch(`http://localhost:3001/toys/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(
              {
                likes: newNumber,
              }
            )
        })
        .then(r=>r.json())
        .then(id=>increaseLikes(id))

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
      <p>{numberOfLikes} Likes </p>
      <button onClick={handleLikes} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
