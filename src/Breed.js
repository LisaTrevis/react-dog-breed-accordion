import React, { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";

const Breed = ({ breed, info, image }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="card">
      <header>
        <h4>{breed}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <BiMinusCircle /> : <BiPlusCircle />}
        </button>
      </header>
      {showInfo && (
        <div className="row">
          <p className="column">{info}</p>
          <img className="image column" src={image} alt={breed} />
        </div>
      )}
    </article>
  );
};

export default Breed;
