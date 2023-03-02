import React, {useState} from "react";

function ToyForm({createNewToy}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleName = e => setName(e.target.value)
  const handleImage = e => setImage(e.target.value)

  const handleForm = (e) => {
      e.preventDefault()

      const newToy = {
        name: name,
        image: image,
        likes: 0,
      }

      fetch("http://localhost:3001/toys", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify (newToy)
          })
        .then (r=>r.json())
        .then (createNewToy)

        e.target.reset()
  }
  
  return (
    <div className="container">
      <form onSubmit={handleForm} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
