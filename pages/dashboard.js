import React, { useState } from "react";
import { Navbar, Links, LinksDrawer, BackDrop, Billing, Analytics } from "../components/import";
import styles from "../styles/dashboard.module.css";

const dashboard = () => {
  const [activeTab, setActiveTab] = useState("Purchases");
  const [openMenu, setOpenMenu] = useState(false);



  const renderActiveTab = ()=>{
    switch(activeTab){
      case "Purchases":
        return <Billing />
        break;

      case "Analytics":
        return <Analytics />
        break;

      default:
        return <></>
    }
  }



  return (
    <main className={styles.cnt}>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <section className={styles.main__body}>
        <Links
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <LinksDrawer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        <BackDrop openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <div className={styles.bill__section}>
         {renderActiveTab()}
        </div>
      </section>
    </main>
  );
};

export default dashboard;
