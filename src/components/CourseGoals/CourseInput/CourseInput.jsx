import React, { useState } from "react";

import Button from "../../UI/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    if (event.target.valuetrim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control  ${!isValid ? "invalid" : "  "}`}>
        <label>Course Goal</label>
        <input
          //   style={{
          //     borderColor: !isValid ? "red" : "black",
          //     backgroundColor: !isValid ? "salmon" : "transparent",
          //   }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit" className={!isValid ? "invalid" : ""}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
