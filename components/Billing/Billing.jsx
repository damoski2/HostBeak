import React from "react";
import styles from "../../styles/Billing.module.css";
import {
  billingArrow,
  uploadIcon,
  calenderIcon,
  deleteIcon,
  editIcon,
} from "../../images";
import BillingTable from "./BillingTable";



const Billing = () => {
  return (
    <div className={styles.cnt}>
      <h1>Add bill</h1>
      <div className={styles.add__field}>
        <div className={styles.input__col}>
          <div className={styles.elem}>
            <label>Vendor</label>
            <div className={styles.select__parent}>
              <select>
                <option>Choose</option>
              </select>
              <img
                className={styles.billingArrow}
                src={billingArrow}
                alt="billingArrow"
              />
            </div>
          </div>
          <div className={styles.elem}>
            <label>Currency</label>
            <div className={styles.select__parent}>
              <select>
                <option>USD - U.S dollar</option>
              </select>
              <img
                className={styles.billingArrow}
                src={billingArrow}
                alt="billingArrow"
              />
            </div>
          </div>
          <div className={styles.elem}>
            <label>Upload Copy of Bill</label>
            <div className={styles.file__parent}>
              <label htmlFor="upload-file">
                <div className={styles.file__label}>Upload file</div>
              </label>
              <img
                className={styles.uploadIcon}
                src={uploadIcon}
                alt="uploadIcon"
              />
            </div>
          </div>
        </div>
        <div className={styles.input__col}>
          <div className={styles.elem}>
            <label>Date</label>
            <div className={styles.select__parent}>
              <input type="date" />
            </div>
          </div>
          <div className={styles.elem}>
            <label>Due Date</label>
            <div className={styles.select__parent}>
              <input type="date" />
            </div>
          </div>
          <div className={styles.elem}>
            <label>P.O./S.O</label>
            <input type="text" />
          </div>
        </div>
        <div className={styles.input__col}>
          <div className={styles.elem}>
            <label>Bill #</label>
            <input type="text" />
          </div>
          <div className={styles.elem}>
            <label>Notes</label>
            <textarea />
          </div>
        </div>
      </div>
      <input
        id="upload-file"
        style={{
          visibility: "hidden",
          zIndex: "0",
          position: "absolute",
          opacity: "0",
        }}
        type="file"
        placeholder="Upload File"
      />
      <BillingTable />
    </div>
  );
};

export default Billing;
