import Footer from "@/common/Footer";
import Form from "@/common/Form";
import Header from "@/common/Header";
import { Popup } from "@/common/Popup";
import useUTMSource from "@/hooks/useUTMSource";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  useUTMSource();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleTogglecontactForm = (value) => {
    if (typeof value === "boolean") {
      setOpen(value);
    } else {
      setOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    const pushPageview = (url) => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "pageview",
        page: url,
      });
      console.log("GTM pageview event pushed:", url);
    };

    pushPageview(router.asPath);

    const handleRouteChange = (url) => {
      pushPageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, router.asPath]);
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
