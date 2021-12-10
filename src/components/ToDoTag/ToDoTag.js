import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

import styled from "styled-components";
const animatedComponents = makeAnimated();

const ToDoTag = ({ todos }) => {
  const [tagInputValue, setTagInputValue] = useState("");
  const [tagValue, setTagValue] = useState("");

  const handleChange = (field, newValue) => {
    switch (field) {
      case "tags":
        setTagValue(newValue);
        break;

      default:
        break;
    }
  };

  const handleInputChange = (value) => {
    setTagInputValue(value);
  };

  const handleKeyDown = (event) => {
    if (!tagInputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setTagValue([...tagValue, createOption(tagInputValue)]);
        setTagInputValue("");

        event.preventDefault();
        break;

      default:
        break;
    }
  };

  const createOption = (label) => ({
    label,
    value: label,
  });
  return (
    <TagWrapper>
      <label>Tags</label>
      <CreatableSelect
        isClearable
        isMulti
        menuIsOpen={false}
        components={({ DropdownIndicator: null, animatedComponents })}
        inputValue={tagInputValue}
        onChange={(value) => handleChange("tags", value)}
        placeholder="add tags here"
        onKeyDown={handleKeyDown}
        onInputChange={handleInputChange}
        value={tagValue}
        onCreateOption={createOption}
      />
    </TagWrapper>
  );
};

//style
const TagWrapper = styled.div`
  margin-left: 35px;
  margin-top: 10px;
  width: 200px;

`;

export default ToDoTag;
