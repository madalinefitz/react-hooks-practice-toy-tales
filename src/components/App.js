import React, { useState, useEffect } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  
  const [toyData, setToyData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(r=>r.json())
      .then(setToyData)
    }, [])

    useEffect(() => {
      fetch("http://localhost:3001/toys", )
        .then(r=>r.json())
        .then(setToyData)
      }, [])
  
  const [showForm, setShowForm] = useState(false);
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyData={toyData}/>
    </>
  );
}

export default App;
