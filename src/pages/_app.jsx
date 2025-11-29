import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import useUTMSource from "@/hooks/useUTMSource";
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@/styles/globals.css";
import { useState } from "react";

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

      <Component
        {...pageProps}
        handleTogglecontactForm={handleTogglecontactForm}
      />
      <Popup open={open} onClose={() => handleTogglecontactForm(false)}>
        <Form handleTogglecontactForm={handleTogglecontactForm} />
      </Popup>
    </>
  );
}
