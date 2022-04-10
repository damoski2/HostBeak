import React, { useState, useEffect } from "react";
import styles from "../../styles/Analytics.module.css";
import { messageIcon, newIcon } from "../../images";

const Analytics = () => {
  const initialData = [
    {
      type: "Feburary Report",
      date: "4th, October 2021 11:20am",
      active: true,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "March 2021 Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
    {
      type: "Feburary Report",
      date: "4th, October 2021 11:20am",
      active: false,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(initialData);
  }, [data]);

  return (
    <main className={styles.cnt}>
      <h1>View reports</h1>
      {data.map((item, index) => (
        <div key={index} className={styles.row__details}>
          <div className={styles.inner__div1}>
            <input type="checkbox" />
            <h3 style={{ color: item.active&& '#081494' }} >
             {item.type} &nbsp; {item.active&&<img src={newIcon} alt="newIcon" />}
            </h3>
            <p>{item.date}</p>
          </div>
          <div className={styles.inner__div2}>
            <button>View</button>
            <img
              src={messageIcon}
              className={styles.messageIcon}
              alt="messageIcon"
            />
          </div>
        </div>
      ))}
    </main>
  );
};

export default Analytics;
