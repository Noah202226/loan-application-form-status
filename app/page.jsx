"use client";
import { useState } from "react";

export default function Home() {
  const [stepsdata, setStepsdata] = useState([
    {
      stepName: "Documents checking",
      done: true,
      index: 0,
      desciption:
        "Checking credentials and important details for your loan application",
    },
    {
      stepName: "Personal Information",
      done: true,
      index: 1,
      desciption:
        "Checking credentials and important details for your loan application",
    },
    {
      stepName: "Work And Finances",
      done: false,
      index: 2,
      desciption:
        "Checking credentials and important details for your loan application",
    },
    {
      stepName: "References",
      done: false,
      index: 3,
      activeform: false,
      desciption:
        "Checking credentials and important details for your loan application",
    },
    {
      stepName: "Generate PDF",
      done: false,
      index: 4,
      activeform: false,
      desciption:
        "Checking credentials and important details for your loan application",
      // formFields: <GeneratePdf />,
    },
  ]);
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between h-screen">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <div className="form-control w-full max-w-xs">
          <h1 className="text-4xl w-full md:text-6xl mb-10">
            LOAN APPLICATION FORM STATUS MONITOR
          </h1>
          <label className="label">
            <span className="label-text">Application tracking ID</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn w-full my-2">Track Now</button>
        </div>
      </div>

      <ul className="steps steps-horizontal lg:steps-vertical container mx-auto h-screen">
        {stepsdata.map((step) => {
          return (
            <li
              key={step.index}
              className={`step ${step.done ? "step-info" : ""} flex flex-col ${
                step.activeform ? "after:text-2xl underline" : ""
              }
                `}
            >
              <div>
                <p className="text-xs md:text-2xl">{step.stepName}</p>
                <p className="hidden lg:block text-sm">{step.desciption}</p>
                <p className="hidden lg:block text-sm">{step.desciption}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
