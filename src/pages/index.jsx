import HomePageComponent from "@/pageComponents/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MetaTitle } from "@/common/MetaTitle";


export default function Home({ handleTogglecontactForm }) {
  return (
    <>
      <MetaTitle
        title="Cataract - Best Eye Hospital in Indore"
        description="Dr. Prateek Tiwari, Cataract Specialist at Antardrashti Netralaya, Indore. Trusted eye surgeon offering advanced technology and compassionate care."
        keywords="cataract surgery, eye hospital Indore, Dr Prateek Tiwari, Antardrashti Netralaya"
      />
      <HomePageComponent handleTogglecontactForm={handleTogglecontactForm} />
    </>
  )
}
