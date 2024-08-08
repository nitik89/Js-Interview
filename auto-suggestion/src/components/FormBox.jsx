import React, { useCallback, useEffect, useRef, useState } from "react";
import Recipies from "./Recipies";
import debounce from "lodash/debounce";
import useCache from "../hooks/useCache";

const FormBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { setCache, getCache } = useCache("autocompleteCache", 3600);
  const scrollRef = useRef(null);
  // console.log("sugges", inputValue);
  const fetchData = async (inputValue) => {
    try {
      const res = await fetch(
        `https://dummyjson.com/recipes/search?q=${inputValue}`
      );
      const data = await res.json();
      setCache(inputValue, data);
      setSuggestions(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  const handleSuggestionClick = (suggestion) => {
    console.log(suggestion);
    setInputValue(suggestion);
    setSuggestions([]);
  };
  const handleKeyDown = (e) => {
    console.log(e.key);
    switch (e.key) {
      case "ArrowDown":
        setSelectedIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % suggestions.recipes.length;
          return newIndex;
        });
        break;
      case "ArrowUp":
        setSelectedIndex((prevIndex) => {
          const newIndex =
            (prevIndex - 1 + suggestions.recipes.length) %
            suggestions.recipes.length;
          return newIndex;
        });
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < suggestions.recipes.length) {
          handleSuggestionClick(suggestions.recipes[selectedIndex].name);
        }
        break;
      default:
        break;
    }
  };
  const getSuggestionsDebounced = useCallback(debounce(fetchData, 300), []);
  useEffect(() => {
    if (inputValue.length > 1) {
      const cachedSuggestions = getCache(inputValue);
      if (cachedSuggestions) {
        setSuggestions(cachedSuggestions);
      } else {
        getSuggestionsDebounced(inputValue);
      }
    } else {
      setSuggestions([]);
    }
    setSelectedIndex(-1);
  }, [inputValue]);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="recipie-container">
      <input
        type="text"
        placeholder="Enter Recipie"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
      />
      <ul className="recipie-list" ref={scrollRef}>
        <Recipies
          selectedIndex={selectedIndex}
          recipies={suggestions.recipes}
          inputValue={inputValue}
        />
      </ul>
    </div>
  );
};

export default FormBox;
