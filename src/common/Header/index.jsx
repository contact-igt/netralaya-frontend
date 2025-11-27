import Image from "next/image";
import styles from "./styles.module.css";
import Button from "../Button";
import { DynamicIcon } from "lucide-react/dynamic";

const Header = ({ handleTogglecontactForm }) => {
  return (
    <header style={{ backgroundColor: "#fff9eb" }}>
      <div className="container">
        <div
          className={`${styles.headerwrapper} d-flex justify-content-between align-items-center py-2`}
        >
          <a href="https://antardrashtinetralaya.com/" target="blank">
          <div className={styles.headerImg}>
            <Image src={"/assets/logo2.png"} alt="logo" width={140} height={120} />
          </div>
          </a>
          <div className="d-none d-md-block">
            <div
              className={`${styles.headerCta} d-flex gap-3 align-items-center`}
            >
              <div className={styles.callCta}>
                <Button
                  bgColor={"#fff"}
                  btnIcon={"phone"}
                  textColor={"#2F3032"}
                  btnTitle2={"+91 9990110596"}
                  link={"tel:+919990110596"}
                  iconColor={"#ae8624"}
                />
              </div>

              <div className={styles.enquiryCta}>
                <Button
                  onClick={handleTogglecontactForm}
                  bgColor={"#a98927"}
                  btnIcon={"arrow-right"}
                  textColor={"#ffff"}
                  btnTitle={"Enquiry Now"}
                  iconColor={"#ffff"}
                />
              </div>
            </div>
          </div>
          <div className="d-block d-md-none">
            <div className="d-flex  gap-3 ">
              <a href="tel:+919990110596">
                <div className={styles.ctabtn}>
                  <DynamicIcon name="phone" size={22} color="#fff" />
                </div>
              </a>
              <div className={styles.ctabtn} onClick={handleTogglecontactForm}>
                <DynamicIcon
                  name="message-circle-more"
                  size={22}
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
