import Footer from "@/common/Footer";
import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import useUTMSource from "@/hooks/useUTMSource";
import "@/styles/globals.css";
import {  useState } from "react";

export default function App({ Component, pageProps }) {
  useUTMSource();
  const [open, setOpen] = useState(false);
  const handleTogglecontactForm = (value) => {
    if (typeof value === "boolean") {
      setOpen(value);
    } else {
      setOpen((prev) => !prev);
    }
  };


  return (
    <>
      <Header handleTogglecontactForm={handleTogglecontactForm} />

      <Component {...pageProps} handleTogglecontactForm={handleTogglecontactForm} />
      <Popup open={open} onClose={() => handleTogglecontactForm(false)}>
        <Form handleTogglecontactForm={handleTogglecontactForm}
        />
      </Popup>
      <Footer />

    </>
  )
}
