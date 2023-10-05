"use client";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";

export default function Home() {
  const [clientID, setClientID] = useState("");
  const [clientName, setClientName] = useState("");
  const [tracking, setTracking] = useState(false);

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
      done: false,
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

  useEffect(() => {
    if (tracking) {
      onSnapshot(doc(db, "clients", clientID), (doc) => {
        console.log(doc.data().status);
        setClientName(doc.data().clientName);
        if (doc.data().status === "Inquiry") {
          setStepsdata([
            {
              stepName: "Documents checking",
              done: true,
              index: 0,
              desciption:
                "Checking credentials and important details for your loan application",
            },
            {
              stepName: "Personal Information",
              done: false,
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
              stepName: "Approved and Ready to Claim",
              done: false,
              index: 4,
              activeform: false,
              desciption:
                "Checking credentials and important details for your loan application",
              // formFields: <GeneratePdf />,
            },
          ]);
        } else if (doc.data().status === "follow-up") {
          setStepsdata([
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
              stepName: "Approved and Ready to Claim",
              done: false,
              index: 4,
              activeform: false,
              desciption:
                "Checking credentials and important details for your loan application",
              // formFields: <GeneratePdf />,
            },
          ]);
        } else if (doc.data().status === "In-process") {
          setStepsdata([
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
              done: true,
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
              stepName: "Approved and Ready to Claim",
              done: false,
              index: 4,
              activeform: false,
              desciption:
                "Checking credentials and important details for your loan application",
              // formFields: <GeneratePdf />,
            },
          ]);
        }
        setTracking(false);
      });
    }
  }, [tracking]);

  const trackID = (id) => {
    if (id === "" || id === undefined) {
      alert("provide ID to track");
    } else {
      console.log("set tracking to true");
      setTracking(true);
    }
    setTracking(true);
  };
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
          {clientName && <p className="">Client Name: {clientName}</p>}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
          />

          <button className="btn w-full my-2" onClick={() => trackID(clientID)}>
            Track Now
          </button>
        </div>
      </div>

      <ul className="steps steps-horizontal lg:steps-vertical container mx-auto h-screen">
        {stepsdata.map((step) => {
          return (
            <li
              data-content={`${step.done ? "✓" : "●"}`}
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
