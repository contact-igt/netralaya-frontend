import Image from "next/image";
import Number from "@/common/Number";
import styles from "./styles.module.css";
import Form from "@/common/Form";

const Hero = ({ handleTogglecontactForm }) => {
  return (
    <section>
      <div className="container">
        <div className={`position-relative ${styles.heroContainer}`}>
          <div className={styles.bgWrapper}>
            <Image
              src="/assets/bgimage.webp"
              alt="Cataract surgery hero background"
              fill
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              style={{ objectFit: 'cover', objectPosition: '40% 50%' }}
            />
          </div>
          <div className={`${styles.layerText} position-absolute`}>
            <h4>Painless</h4>
            <h4>Precise</h4>
            <h4>Proven</h4>
            <p>Cataract Surgery That Brings Life Into Focus</p>
          </div>

          {/* Form */}
          <div className={styles.layerForm}>
            <Form handleTogglecontactForm={handleTogglecontactForm} />
          </div>

          {/* Number Section */}
          <div className={`${styles.layerNumber} w-100`}>
            <Number />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
