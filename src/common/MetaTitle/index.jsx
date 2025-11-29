import Head from "next/head";
import React from "react";

export const MetaTitle = ({ title, description, keywords }) => {
  return (
    <Head>
      <link rel="icon" href="assets/logo2.webp" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};
