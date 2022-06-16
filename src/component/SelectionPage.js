import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  department,
  semester,
  sub3rdSem,
  sub5thSem,
  sub7thSem,
  sub6thSem,
  cse4thSemSub,
  courseOutcomeOs,
  courseOutcomeCn,
  courseOutcomeDbms,
  courseOutcomeIp,
  courseOutcomeFe,
  POs,
  POS1,
  POS2,
  POS3,
} from "../array";
import logoLight from "./logoLight.png";

const SelectionPage = () => {
  const [dept, setDept] = useState("");
  const [sem, setSem] = useState("");
  const [sub, setSub] = useState("");

  console.log(dept);
  return (
    <div>
      <div className="header">
        <img src={logoLight} alt="----"></img>
        {/* <h3>Mapper</h3> */}
      </div>

      <h3 className="heading">COs and POs Mapping</h3>

      <div className="select">
        <div className="box">
          <h3 className="select-head">Select the Department</h3>
          <select
            className="select-box"
            onChange={(e) => setDept(e.target.value)}
          >
            {department.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="box">
          <h3 className="select-head">Select the Academic Semester</h3>
          <select
            className="select-box"
            onChange={(e) => setSem(e.target.value)}
          >
            {semester.map((sem) => (
              <option key={sem} value={sem}>
                {sem}
              </option>
            ))}
          </select>
        </div>
        <div className="box">
          <h3 className="select-head">Select the Subject</h3>
          {dept === "Computer Science Engineering" && sem === "4th Semester" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {cse4thSemSub.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}

          {dept === "Information Technology" && sem === "3rd Semester" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {sub3rdSem.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}
          {dept === "Information Technology" && sem === "6th Semester" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {sub6thSem.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}
          {dept === "Information Technology" && sem === "5th Semester" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {sub5thSem.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}
          {dept === "Information Technology" && sem === "7th Semester" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {sub7thSem.map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      <div className="select-2">
        <div>
          <h3 className="select-head">Select Course Outcome</h3>
          {/* <select className="select-box-2">
            {courseOutcome.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select> */}
          {sem === "6th Semester" && sub === "Operating System" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {courseOutcomeOs.map((cos) => (
                <option key={cos} value={cos}>
                  {cos}
                </option>
              ))}
            </select>
          )}
          {sem === "6th Semester" && sub === "Computer Network" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {courseOutcomeCn.map((cos) => (
                <option key={cos} value={cos}>
                  {cos}
                </option>
              ))}
            </select>
          )}
          {sem === "6th Semester" && sub === "Database Management System" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {courseOutcomeDbms.map((cos) => (
                <option key={cos} value={cos}>
                  {cos}
                </option>
              ))}
            </select>
          )}
          {sem === "6th Semester" && sub === "Internet Programming" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {courseOutcomeIp.map((cos) => (
                <option key={cos} value={cos}>
                  {cos}
                </option>
              ))}
            </select>
          )}
          {sem === "6th Semester" && sub === "Functional English" && (
            <select
              className="select-box"
              onChange={(e) => setSub(e.target.value)}
            >
              {courseOutcomeFe.map((cos) => (
                <option key={cos} value={cos}>
                  {cos}
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <h3 className="select-head">Select Program Outcome</h3>
          <select className="select-box-2">
            {POs.map((po) => (
              <option key={po} value={po}>
                {po}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="select-head">Select PO S-Statement1</h3>
          <select className="select-box-2">
            {POS1.map((pos1) => (
              <option key={pos1} value={pos1}>
                {pos1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="select-head">Select PO S-Statement2</h3>
          <select className="select-box-2">
            {POS2.map((pos2) => (
              <option key={pos2} value={pos2}>
                {pos2}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h3 className="select-head">Select PO S-Statement3</h3>
          <select className="select-box-2">
            {POS3.map((pos3) => (
              <option key={pos3} value={pos3}>
                {pos3}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="btn-container">
        <Link to="/table">
          <button className="btn-submit">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default SelectionPage;
