'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import { DynamicIcon } from 'lucide-react/dynamic';

const Faq = ({data}) => {
    const [openQuestion, setOpenQuestion] = useState(0);

    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h4>{data?.title}</h4>
                </div>

                <div className={styles.faqContainer}>
                    {data?.faqLists.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.questionButton}
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={openQuestion === index}
                            >
                                <span className={styles.questionText}>{faq.question}</span>
                                <span className={styles.chevron}>
                                    {openQuestion === index ? (
                                        <DynamicIcon name='chevron-up' size={25} color="#000" />
                                    ) : (
                                        <DynamicIcon name="chevron-down" size={25} color="#000" />
                                    )}
                                </span>
                            </button>

                            <div className={`${styles.answerContainer} ${openQuestion === index ? styles.open : ''}`}>
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;