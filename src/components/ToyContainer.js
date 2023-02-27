import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyData}) {

  const toyCards = toyData.map((toy)=>{
    return <ToyCard key={toy.id} name={toy.name} img={toy.image} likes={toy.likes}/>
  })

  return (
    <div id="toy-collection">
      {toyCards}
    </div>
  );
}

export default ToyContainer;
