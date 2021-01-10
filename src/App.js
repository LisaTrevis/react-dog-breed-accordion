import React from "react";
import dogs from "./data";
import Breed from "./Breed";

function App() {
  return (
    <main>
      <div className="container">
        <h3>Dog Breeds</h3>
        <section>
          {dogs.map((dog) => {
            return <Breed key={dog.id} {...dog} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
