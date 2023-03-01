import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  
  const [toyData, setToyData] = useState([])

  useEffect(()=>{
    fetch ("http://localhost:3001/toys")
      .then(r => r.json())
      .then(setToyData)
  }, [])
  
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const addNewToy = (newToy) => {
    setToyData([...toyData, newToy])
  }

  const deleteToy = (deletedToy) => {
    const newArray = toyData.filter(toy => {
      if (toy.id !== deletedToy) {
        return true
      }
    })
    setToyData(newArray)
  }

  const increaseLikes = (toyLikedId) => {
    const likedArray = toyData.map(toy => {
      if (toy.id !== toyLikedId) {
        return toy
      } else {
        return toyLikedId
      }
    })
    setToyData(likedArray)
  }

  const [searchedToy, setSearchedToy] = useState('')

  const handleSearch =(toy) => {
    setSearchedToy(toy.toLowerCase())
  }

  const whichToy = toyData.filter(toy => {
    if (toy.name.toLowerCase().includes(searchedToy)) {
    return true
    }
  })

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <div classname="buttonContainer">
        <input onChange={e => handleSearch(e.target.value)} type="text" placeholder="Search Toys..."/>
      </div>
      <ToyContainer toyData={whichToy} increaseLikes={increaseLikes} deleteToy={deleteToy}/>
    </>
  );
}

export default App;
