import Button from "@/common/Button";
import styles from "./styles.module.css";

const TestimonalText = ({ data, handleTogglecontactForm }) => {
  return (
    <section>
      <div className={styles.testimonialContainer}>
        <div className={styles.overlay}></div>
        <div className={styles.testimonialContent}>
          <h5>{data?.title}</h5>
          <img className={styles.quoteIcon} src={data?.quoteIcon} alt="" loading="lazy"  />
          <p>{data?.description}</p>
          <p className={styles.testimonialName}> {` - ${data?.name}`}</p>
        </div>
        <div className={styles.testimonialMore}>
          <div className={styles.moreContent1}>
            <div className={styles.moreContent1Overlay}></div>
            <div className={styles.content}>
              <p>{data?.content1description}</p>
              <Button
                onClick={handleTogglecontactForm}
                textColor="#fff"
                bgColor="#42474d"
                btnTitle={data?.button1text}
                btnIcon={data?.button1icon}
                iconColor="#fff"
              />
            </div>
          </div>
          <div className={styles.moreContent2}>
            <div className={styles.moreContent2Overlay}></div>
            <div className={styles.content}>
              <p>{data?.content2description}</p>
              <Button
                onClick={handleTogglecontactForm}
                textColor="#fff"
                bgColor="#a98927"
                btnTitle={data?.button2text}
                btnIcon={"arrow-right"}
                iconColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonalText;
