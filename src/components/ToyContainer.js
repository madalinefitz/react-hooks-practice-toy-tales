import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData, deleteToy, increaseLikes}) {

  const toyComponents = toyData.map(toy =>{
    return <ToyCard key={toy.id} {...toy} deleteToy={deleteToy} increaseLikes={increaseLikes}/>
  })

  return (
    <div id="toy-collection">
      {toyComponents}
    </div>
  );
}

export default ToyContainer;
