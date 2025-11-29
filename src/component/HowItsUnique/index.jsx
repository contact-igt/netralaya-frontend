import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";

const HowItsUnique = ({ data }) => {
  return (
    <section className={styles.unique}>
      <div className={styles.bgWrapper}>
        <Image
          src="/assets/uniqueBgImage.webp"
          alt="Unique features background"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <h4 className={styles.title}>{data?.title}</h4>
        <div className={styles.uniqueList}>
          {
            data?.uniqueList?.map((item, index) => (
              <div key={index} className={styles.uniqueItem}>
                <div className={styles.iconWrapper}>
                  <DynamicIcon name={item?.icon} size={32} />
                </div>
                <div className={styles.content}>
                  <h5 className={styles.uniqueTitle}>
                    {item?.title}
                  </h5>
                  <p className={styles.uniqueDescription}>{item?.description}</p>
                </div>
              </div>
            )
            )}
        </div>
      </div>
    </section>
  );
};

export default HowItsUnique;
