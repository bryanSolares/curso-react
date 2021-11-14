import React, { useState } from "react";
import { CategoryAdd } from "./components/CategoryAdd";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Samurai X"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((categorie) => (
          <GifGrid key={categorie} categorie={categorie} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
