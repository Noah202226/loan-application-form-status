import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAt8OGQmEMJLtZVpkHiC9lB92ccd_UnRBs",
  authDomain: "rsbc-agents-app.firebaseapp.com",
  projectId: "rsbc-agents-app",
  storageBucket: "rsbc-agents-app.appspot.com",
  messagingSenderId: "102758156659",
  appId: "1:102758156659:web:c1b2504ccc264b3df15d06",
  measurementId: "G-7FE26GB53S",
};

export const db = getFirestore(initializeApp(firebaseConfig));
