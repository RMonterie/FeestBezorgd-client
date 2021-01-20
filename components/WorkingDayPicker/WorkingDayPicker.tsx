import React, { useState } from "react";
import { faSave } from "@fortawesome/free-solid-svg-icons";

import { editCatererDetails } from "../../api/caterers/catererMethods";
import Button from "../Button";

import "./WorkingDayPicker.scss";

const DAYS_OF_THE_WEEK: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/**
 * Form containing checkboxes and timepickers to determine the opening days and
 * times for a caterer.
 */
const WorkingDayPicker: React.FC = () => {
  const [workingDays, setWorkingDays] = useState([]);
  const [openingTime, setOpeningTime] = useState(null);
  const [closingTime, setClosingTime] = useState(null);

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isChecked: boolean = event.target.checked;

    if (isChecked) {
      const addedWorkingDays = [...workingDays, event.target.value];
      setWorkingDays(addedWorkingDays);
    } else {
      const removedWorkingDays = workingDays.filter(
        (day) => day !== event.target.value
      );
      setWorkingDays(removedWorkingDays);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const response = await editCatererDetails(
      ...[, , , ,],
      workingDays,
      openingTime.toString(),
      closingTime.toString()
    );
    if (response) {
      console.log("response:", response);
    }
  };

  return (
    <form className="working-day-picker" onSubmit={onSubmitHandler}>
      <h2>Pick the days where you're open for business</h2>
      {DAYS_OF_THE_WEEK.map((day, index) => (
        <div key={index}>
          <input
            name={day.toLowerCase()}
            type="checkbox"
            value={day}
            onChange={onChangeHandler}
          />
          <label htmlFor={day.toLowerCase()}>{day}</label>
        </div>
      ))}
      <div className="opening-closing-time-pickers">
        <label htmlFor="openingTime">Opening Time</label>
        <input
          type="time"
          name="openingTime"
          onChange={(event) => setOpeningTime(event.target.value)}
        />
        <label htmlFor="closingTime">Closing Time</label>
        <input
          type="time"
          name="closingTime"
          onChange={(event) => setClosingTime(event.target.value)}
        />
      </div>
      <div className="submit-button-container">
        <Button
          text="Save"
          style="btn--success--solid"
          type="submit"
          icon={faSave}
        />
      </div>
    </form>
  );
};

export default WorkingDayPicker;
