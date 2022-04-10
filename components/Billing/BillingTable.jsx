import React from "react";
import styles from "../../styles/Billing.module.css";
import {
  billingArrow,
  uploadIcon,
  calenderIcon,
  deleteIcon,
  editIcon,
} from "../../images";

const BillingTable = () => {
  return (
    <form className={styles.form} >
      <section className={styles.sect__cnt}>
        <table style={{ borderSpacing: "10px" }} className={styles.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Expense Catgory</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Amount</th>
            </tr>
            <tr className={styles.rule}>
              <td colSpan="7"></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.select__parent2}>
                  <select>
                    <option>Choose</option>
                  </select>
                  <img
                    className={styles.billingArrow}
                    src={billingArrow}
                    alt="billingArrow"
                  />
                </div>
              </td>
              <td>
                <div className={styles.select__parent2}>
                  <select>
                    <option>Choose</option>
                  </select>
                  <img
                    className={styles.billingArrow}
                    src={billingArrow}
                    alt="billingArrow"
                  />
                </div>
              </td>
              <td style={{ width: "15%" }} >
                <input type="text" />
              </td>
              <td style={{ width: "10%" }}>
                <input type="text" placeholder="1" />
              </td>
              <td style={{ width: "15%" }}>
                <input type="text" placeholder="0" />
              </td>
              <td
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  marginTop: "12px",
                  marginRight: '0'
                }}
              >
                <input type="text" />
                <img
                  src={editIcon}
                  style={{ marginLeft: "5px" }}
                  alt="editIcon"
                />
              </td>
              <td style={{ width:'fit-content', margin: '0' }}>
                <p style={{ width:'fit-content' }} >N0.00 <img style={{ position:'relative', top:'5px' }} src={deleteIcon} alt="deleteIcon" /></p>
              </td>
            </tr>
            <tr className={styles.rule2}>
              <td colSpan="7"></td>
            </tr>
          </tbody>
        </table>
        <p className={styles.para} >Subtotal: &nbsp;&nbsp;&nbsp;  N0.00</p>
        <p className={styles.para} >Total(NGN): &nbsp;&nbsp;&nbsp;  N0.00</p>
      </section>
      <div className={styles.buttons}>
        <button className={styles.save}>Save</button>
        <button className={styles.cancel}>Cancel</button>
      </div>
    </form>
  );
};

export default BillingTable;
