import TestimonialCard from "@/common/TestimonialCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./styles.module.css"
import { Popup } from "@/common/Popup";

const InsightfulVideos = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(2);
    const centerMode = data.testimonialContent.length === 1

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth > 768) {
    //             setSlidesToShow(2);
    //             setCenterMode(false);
    //         } else if (window.innerWidth <= 768 && window.innerWidth > 576) {
    //             setSlidesToShow(1.5);
    //             setCenterMode(false);
    //         } else {
    //             setSlidesToShow(1);
    //             setCenterMode(true);
    //         }
    //     };

    //     handleResize();
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);
    const openModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedVideo(null);
        setIsModalOpen(false);
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        centerMode: centerMode,
        centerPadding: centerMode ? '0px' : '50px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: centerMode,
                    centerPadding: "0px",
                    infinite: true,
                },
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                    centerMode: centerMode,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: centerMode,
                    centerPadding: "0px",
                    infinite: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    centerMode: true,
                    centerPadding: "0px",
                    infinite: true,
                },
            },
        ],
    };
    return (
        <section>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.testimonialContainer}>
                <Slider key={slidesToShow + (centerMode ? 'c' : '')} {...settings} className={styles.sliderWrapper}>
                    {
                        data?.testimonialContent?.map((item, index) => (
                            <TestimonialCard key={index} imageSrc={item?.imageSrc} openModal={() => openModal(item.videoUrl)} name={item?.name} testimonial={item?.testimonial} />
                        ))
                    }
                </Slider>
            </div>
            <Popup open={isModalOpen} onClose={closeModal} variant="video">
                <button className={styles.closeButton} onClick={closeModal} style={{ float: 'right', marginBottom: "10px" }}> ✖</button>

                {selectedVideo && selectedVideo.includes("youtube.com") ? (
                    <iframe
                        width="100%"
                        height="450"
                        src={selectedVideo + "?autoplay=1"}
                        title="YouTube video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : selectedVideo ? (
                    <video width="100%" height="auto" controls autoPlay>
                        <source src={selectedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : null}
            </Popup>
        </section>
    );
}

export default InsightfulVideos;