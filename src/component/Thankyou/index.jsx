import Button from "@/common/Button";
import styles from "./styles.module.css";
import Image from "next/image";
const Thankyou = () => {
    return (
        <section className={`${styles.container} d-flex justify-content-center align-items-center flex-column`}>
            <Image src="/assets/check.png" alt="" width={120} height={120} className={styles.image} />
            <h1 className={`${styles.title} mt-3 fw-bold`}>Thank You for Booking Your Consultation!</h1>
            <p>We’ve received your mobile number and our specialist will contact you soon.</p>

            <div className={`${styles.videoContainer} mt-4`}>
                <iframe
                    src="https://www.youtube.com/embed/wUcA6ghzZxo?si=df4UUJd_Vt8AwKzU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={styles.card}>
                <h4 className="fs-6">Next Step</h4>
                <ul>
                    <li>
                        Our team will call or message you within 24 hours.
                    </li>
                    <li>Prepare your questions about cataract surgery.</li>
                </ul>
            </div>
            <div className="mt-4">
                <Button link={"https://antardrashtinetralaya.com/"} btnTitle2="Back to Home" bgColor="#e1ba5c" textColor="#42474d" btnIcon={"arrow-left"} iconColor={"#42474d"} />
            </div>
        </section>
    );
};

export default Thankyou;