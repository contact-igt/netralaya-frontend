import HomePageComponent from "@/pageComponents/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home({handleTogglecontactForm}) {
  return (
    <HomePageComponent handleTogglecontactForm={handleTogglecontactForm} />
  )
}
