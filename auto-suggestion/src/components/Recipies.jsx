import React from "react";

const Recipies = ({ selectedIndex, recipies, inputValue }) => {
  const highlightText = (text, searchString) => {
    if (!searchString) return <span>{text}</span>;

    const regex = new RegExp(`(${searchString})`, "gi");
    const parts = text.split(regex);

    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === searchString.toLowerCase() ? (
            <span key={index} className="highlight">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return recipies?.map((recipes, index) => {
    //method to highlight the key
    return (
      <li aria-selected={selectedIndex === index} key={index}>
        {" "}
        {highlightText(recipes.name, inputValue)}
      </li>
    );
  });
};

export default Recipies;
