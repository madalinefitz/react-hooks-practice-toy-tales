import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  
  const [toyData, setToyData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
      .then(r=>r.json())
      .then(setToyData)
  }, [])

  const createNewToy = (newToy) => {
    setToyData([...toyData, newToy])
  }

  const deleteToy = (deletedToyId) => {
    const newArray = toyData.filter(toy => {
      if( toy.id !== deletedToyId ) {
      return true }
    })
    setToyData(newArray)
  }

  const increaseLikes = (likedToyId) => {
    const changedLikes = toyData.map(toy => {
      return (toy.id !== likedToyId ? toy :likedToyId)
    })
    setToyData(changedLikes)
  }

  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const [searchedToy, setSearchedToy] = useState('')
  const pickAToy = toyData.filter(toy => {
      return (toy.name.toLowerCase().includes(searchedToy.toLowerCase()))
    })
  const handleSearch = e=>setSearchedToy(e.target.value)

  return (
    <>
      <Header />
      {showForm ? <ToyForm createNewToy={createNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <div classname="buttonContainer">
        <input onChange={handleSearch} type="text" placeholder="Search Toys..."/>
      </div>
      <ToyContainer toyData={pickAToy} deleteToy={deleteToy} increaseLikes={increaseLikes}/>
    </>
  );
}

export default App;
