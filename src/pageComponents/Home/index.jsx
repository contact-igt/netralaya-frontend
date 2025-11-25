import About from "@/component/About";
import AdvancedCataract from "@/component/AdvancedCataract";
import Faq from "@/component/Faq";
import AreYouACanditate from "@/component/AreYouACanditate";
import Hero from "@/component/Hero";
import HowItsUnique from "@/component/HowItsUnique";
import StickyForm from "@/component/StickyForm";
import TestimonalText from "@/component/TestimonalText";
import { HomeConstantData } from "@/constant/Home";
import InsightfulVideos from "@/component/InsightfulVideos";
import styles from "./styles.module.css";
import QuickAction from "@/common/QuickAction";

const HomePageComponent = ({ handleTogglecontactForm }) => {
  return (
    <div className={styles.layoutContainer}>
      <Hero handleTogglecontactForm={handleTogglecontactForm} />
      <div className={styles.contentContainer}>
        <div className={`row ${styles.mainrow}`}>
          <div className="col-12 col-lg-8">
            <About aboutData={HomeConstantData?.About} handleTogglecontactForm={handleTogglecontactForm} />
            <AdvancedCataract
              cataractData={HomeConstantData?.AdvancedCataract}
            />
            <HowItsUnique data={HomeConstantData?.HowItsUnique} />
            <AreYouACanditate data={HomeConstantData?.areYouACanditate} handleTogglecontactForm={handleTogglecontactForm} />
            <InsightfulVideos data={HomeConstantData?.InsightfulVideos} />
            <TestimonalText
              data={HomeConstantData?.TestimonalText}
              handleTogglecontactForm={handleTogglecontactForm}
            />
            <Faq data={HomeConstantData?.Faq} />
          </div>
          <div className={`col-lg-4 d-none d-lg-block ${styles.rightContent}`}>
            <StickyForm handleTogglecontactForm={handleTogglecontactForm} />
          </div>
        </div>
      </div>
      <QuickAction handleTogglecontactForm={handleTogglecontactForm} />
    </div>
  );
};

export default HomePageComponent;
