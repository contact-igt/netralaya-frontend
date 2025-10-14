import ThankyouPageComponent from "@/pageComponents/ThankYou";
import { useEffect } from "react";



export default function Thankyou() {
  useEffect(()=>{
    console.log("Thank you page loaded");
  },[])
  return <ThankyouPageComponent />;
}
