import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";

const Notification = () => {
  const navigate = useNavigate();
  //
  
  const [compName, setcompName] = useState("");
  const [visitDate, setvisitDate] = useState("");
  const [reportTime, setReportTime] = useState("");

  const handlecompName = (e) => {
    setcompName(e.target.value);
  };

  const handlevisitDate = (e) => {
    setvisitDate(e.target.value);
  };

  const handleReportTime = (e) => {
    setReportTime(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("yo");
    try {
      const compDetails = collection(db, "CompDetails");
      await setDoc(doc(db, "CompDetails", compName), {
        compName: compName,
        visitDate: visitDate,
        reportTime: reportTime,
      });
      //   });
      console.log("Input entered");
    } catch (error) {
      console.log(error.message);
    }
    alert("Notification Published Successfully");
    navigate("/AdminNavTemplate");
  };
  return (
    <div className="adminNav">
      <Link to="/AdminNavTemplate">
        <button className="otherBtn">Main Menu</button>
      </Link>
      <form action="">
        <input
          type="text"
          className="labelIN"
          value={compName}
          onChange={handlecompName}
        />{" "}
        is coming to our college for Placement on{" "}
        <input
          type="date"
          name=""
          id=""
          className="labelIn"
          value={visitDate}
          onChange={handlevisitDate}
        />{" "}
        <br /> reporting time is{" "}
        <input
          type="time"
          name=""
          id=""
          className="labelIn"
          value={reportTime}
          onChange={handleReportTime}
        />
        <br />
        <Link to="/AdminNavTemplate">
        <button className="login" onClick={handleSubmit}>
          Publish
        </button>
        </Link>
      </form>
    </div>
  );
};

export default Notification;
// export {compName};
