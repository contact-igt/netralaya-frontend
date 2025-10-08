import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
import styles from "./styles.module.css";

const QuickAction = ({ handleTogglecontactForm }) => {
  return (
    <div
      className={`
        ${styles.quickBar}
        d-flex d-lg-none justify-content-around align-items-center
      `}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/+919990110596"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.actionBtn}`}
      >
        <Image src="/assets/whatsappfilled.png" alt="WhatsApp" width={25} height={25} />
        <p>WA</p>
      </a>

      {/* Address */}
      <a
        href="https://share.google/cBXlbR3PEM4JBk1Rg" 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionBtn}
      >
        <DynamicIcon name="map-pin" color="#2A3B77" size={25} />
        <p>Address</p>
      </a>

      {/* Call */}
      <a
        href="tel:+919990110596"
        className={`${styles.actionBtn}`}
      >
        <DynamicIcon name="phone" color="#21a179" size={25} />
         <p>Call</p>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/antardrashti_netralaya/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.actionBtn}
      >
        <DynamicIcon name="instagram" color="black" size={25} />
        <p>Insta</p>
      </a>

      {/* Book / Calendar */}
      <div
        onClick={handleTogglecontactForm}
        className={styles.actionBtn}
      >
        <DynamicIcon name="calendar" color="#e1ba5a" size={27} />
        <p>Book</p>
      </div>
    </div>
  );
};

export default QuickAction;
