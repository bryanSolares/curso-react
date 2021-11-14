import React, { useState } from "react";
import PropTypes from "prop-types";

export const CategoryAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((categories) => [...categories, inputValue]);
      setInputValue("");
    }
  };

  return (
    <>
      <h2>Category Add</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
