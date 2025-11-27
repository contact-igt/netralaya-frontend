import Form from "@/common/Form";
import styles from "./styles.module.css";
import useSticky from "@/hooks/useSticky";

const StickyForm = ({ handleTogglecontactForm }) => {
  const [elementRef, isSticky] = useSticky(20);

  return (
    <section className={styles.stickySection}>
      <div
        ref={elementRef}
        className={`${styles.stickyFormWrapper} ${
          isSticky ? styles.sticky : ""
        }`}
      >
        <Form handleTogglecontactForm={handleTogglecontactForm} />
      </div>
    </section>
  );
};

export default StickyForm;
