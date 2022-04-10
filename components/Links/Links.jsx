import React, { useState, useEffect } from "react";
import {
  AccountingIcon,
  analyticsIcon,
  arrowLogoIcon,
  bankIcon,
  dashboardIcon,
  logOutIcon,
  payrollIcon,
  purchaseIcon,
  salesIcon,
  welcomeIcon,
  reportsIcon,
  settingsIcon,
  linkArrowIconClose,
  linkArrowIconOpen,
  paymentIcon
} from "../../images";
import styles from "../../styles/Links.module.css";

const Links = ({ activeTab, setActiveTab, openMenu, setOpenMenu }) => {
  const linkData = [
    {
      name: "Welcome",
      icon: welcomeIcon,
      arrow: false,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Dashboard",
      icon: dashboardIcon,
      arrow: false,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Sales",
      icon: salesIcon,
      arrow: true,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Purchases",
      icon: purchaseIcon,
      arrow: true,
      onClick: () => {
        activeTab === "Purchases"
          ? setActiveTab("")
          : setActiveTab("Purchases");
      },
      sublinks: ["Bills", "Vendors", "Product & Services"],
    },
    {
      name: "Accounting",
      icon: AccountingIcon,
      arrow: true,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Banking",
      icon: bankIcon,
      arrow: true,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Payroll",
      icon: payrollIcon,
      arrow: true,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Reports",
      icon: reportsIcon,
      arrow: false,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
    {
      name: "Analytics",
      icon: analyticsIcon,
      arrow: true,
      onClick: () => {
        activeTab === "Analytics"
          ? setActiveTab("")
          : setActiveTab("Analytics");
      },
      sublinks: [
        "View Report",
        "To-Do",
        "Upload Docs",
        "Chat",
        "Schedule",
        "Message Board",
        "Make Payments",
        "Billing",
      ],
    },
    {
      name: "Settings",
      icon: settingsIcon,
      arrow: false,
      onClick: () => {
        setActiveTab("");
      },
      sublinks: [],
    },
  ];

  const [links, setLinks] = useState();

  useEffect(() => {
    setLinks(linkData);
  }, [activeTab]);

  return (
    links && (
      <main className={styles.cnt} >
        {links.map((link, index) => (
          <div key={index} className={styles.outer__div}>
            <div
              onClick={link.onClick}
              className={styles.row__link}
              style={{ marginBottom: link.name === activeTab && "0" }}
            >
              {link.name === activeTab ? (
                <div className={styles.activeImg}>
                  <img src={link.icon} alt={`${link.icon}`} />
                </div>
              ) : (
                <img src={link.icon} alt={`${link.icon}`} />
              )}
              <p>{link.name}</p>
              {link.arrow ? (
                link.name === activeTab ? (
                  <img src={linkArrowIconOpen} alt="linkArrowIconClose" />
                ) : (
                  <img src={linkArrowIconClose} alt="linkArrowIconClose" />
                )
              ) : (
                <img
                  style={{ visibility: "hidden" }}
                  src={linkArrowIconClose}
                  alt="linkArrowIconClose"
                />
              )}
            </div>
            {link.name === activeTab && (
              <div className={styles.subList}>
                <div />
                <ul>
                  {link.sublinks.map((sublink, index) => (
                    <li key={index} style={{ color: index == 0 && "#081494" }}>
                      {sublink}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div className={styles.row__link} style={{ marginTop: '3em' }} >
          <img src={logOutIcon} alt="logOutIcon" />
          <p>Logout</p>
          <img
            style={{ visibility: "hidden" }}
            src={linkArrowIconClose}
            alt="linkArrowIconClose"
          />
        </div>
        <div className={styles.accept__payment} >
            <img src={paymentIcon} alt="paymentIcon" />
            <p>Accept Payment</p>
        </div>

        <div className={styles.rule} />
      </main>
    )
  );
};

export default Links;
