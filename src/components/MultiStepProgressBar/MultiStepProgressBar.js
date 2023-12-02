import React, { useContext } from "react";
import { AppContext } from "../Context";
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 16;
  } else if (page === "pagetwo") {
    stepPercentage = 49.5;
  } else if (page === "pagethree") {
    stepPercentage = 82.5;
  } else if (page === "pagefour") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  const { themeName } = useContext(AppContext);

  return (
    <span className={` ${themeName == "dark" && "darkmultistep"}`}>
      <ProgressBar percent={stepPercentage}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished
                  ? themeName == "dark"
                    ? "darkaccomplished"
                    : "accomplished"
                  : null
              }`}
              onClick={() => onPageNumberClick("1")}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished
                  ? themeName == "dark"
                    ? "darkaccomplished"
                    : "accomplished"
                  : null
              }`}
              onClick={() => onPageNumberClick("2")}
            >
              {index + 1}
            </div>
          )}
        </Step>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${
                accomplished
                  ? themeName == "dark"
                    ? "darkaccomplished"
                    : "accomplished"
                  : null
              }`}
              onClick={() => onPageNumberClick("3")}
            >
              {index + 1}
            </div>
          )}
        </Step>
      </ProgressBar>
      <div>
        <span
          style={{ marginLeft: "20%", color: themeName == "dark" && "white" }}
        >
          Enter Details
        </span>
        <span
          style={{ marginLeft: "10%", color: themeName == "dark" && "white" }}
        >
          Upload Documents/bills
        </span>
        <span
          style={{ marginLeft: "8%", color: themeName == "dark" && "white" }}
        >
          Review & Submit
        </span>
      </div>
    </span>
  );
};

export default MultiStepProgressBar;
