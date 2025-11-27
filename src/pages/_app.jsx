import Footer from "@/common/Footer";
import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import useUTMSource from "@/hooks/useUTMSource";
import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Script from "next/script";
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
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"
        strategy="afterInteractive"
      />

      <Header handleTogglecontactForm={handleTogglecontactForm} />

      <Component
        {...pageProps}
        handleTogglecontactForm={handleTogglecontactForm}
      />
      <Popup open={open} onClose={() => handleTogglecontactForm(false)}>
        <Form handleTogglecontactForm={handleTogglecontactForm} />
      </Popup>
      <Footer />
    </>
  );
}
