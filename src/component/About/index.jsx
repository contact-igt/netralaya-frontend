import Button from "@/common/Button";
import styles from "./styles.module.css";

const About = ({ aboutData, handleTogglecontactForm }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className={styles.aboutWrapper}>
              <h4>Most Recognised Laser Eye Surgeon in India</h4>
              <p>
                Dr. Prateek Tiwari is a trusted Ophthalmology surgeon associated
                with Antardrashti Netralaya. Known for compassionate,
                patient-first care and modern surgical techniques, Dr. Tiwari
                blends advanced technology with clear communication so every
                patient feels informed, safe, and confident about their vision.
              </p>
              <div className={styles.aboutBtn}>
                <Button
                onClick={handleTogglecontactForm}
                  btnTitle={"Book Your Consultation Today !"}
                  bgColor={"#a98927"}
                  textColor={"#ffff"}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={`${styles.aboutimgWrapper} position-relative`}>
              <div className={styles.bgWrapper}></div>

              <div className={`${styles.bgimgWrapper} position-absolute`}>
                <img src="\assets\profile2.png" className="img-fluid" />
              </div>

              <div className={`${styles.imgDetail} text-center mt-3 `}>
                <h5>Dr Prateek Tiwari </h5>
                <h6>Ophthalmology - Visionary Eye Surgeon & Innovator</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
