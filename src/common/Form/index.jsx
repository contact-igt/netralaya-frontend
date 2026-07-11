import { useFormik } from "formik";
import Button from "../Button";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useState } from "react";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const CLIENT_KEY = process.env.NEXT_PUBLIC_CLIENT_KEY;
const REGISTER_API_URL = `${BACKEND_URL}/api/v1/antardrashti-netralaya/register`;
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby0V7V8j32RnoU3ymvynxDNaH1bwdZEx14WqBN2R26EcNrKEyB3qXAm8qwDAnWWJQxc/exec";

const getIpAddress = async () => {
  try {
    const ipResponse = await fetch("https://api.ipify.org?format=json");

    if (!ipResponse.ok) {
      throw new Error("IP lookup failed");
    }

    const ipData = await ipResponse.json();
    return ipData?.ip || "";
  } catch (error) {
    console.error("IP fetch failed:", error);
    return "";
  }
};

const submitToRegisterApi = async (payload) => {
  if (!BACKEND_URL || !CLIENT_KEY) {
    throw new Error("Missing backend environment configuration");
  }

  const response = await fetch(REGISTER_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Key": CLIENT_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`API submission failed with status ${response.status}`);
  }

  return response;
};

const submitToGoogleScript = async ({
  name,
  mobile_number,
  ip_address,
  utm_source,
}) => {
  const params = new URLSearchParams();

  params.append("Name", name);
  params.append("MobileNumber", mobile_number);
  params.append("IP_Address", ip_address);
  params.append("utm_source", utm_source);

  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(
      `Google Script submission failed with status ${response.status}`
    );
  }

  return response;
};

const Form = ({ handleTogglecontactForm }) => {
  const [loading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s']+$/, "Enter valid name"),
      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile must be 10 digits")
        .required("Mobile is required"),
    }),
    onSubmit: async (value, Formik) => {
      try {
        setisLoading(true);

        const ipAddress = await getIpAddress();
        const payload = {
          name: value.name,
          mobile_number: value.mobile,
          service: "Cataract",
          ip_address: ipAddress,
          utm_source: localStorage.getItem("utm_source") || "direct",
        };

        try {
          await submitToRegisterApi(payload);
        } catch (apiError) {
          console.error(
            "Primary API submission failed. Falling back to Google Script:",
            apiError
          );
          await submitToGoogleScript(payload);
        }

        Formik.resetForm();
        handleTogglecontactForm(false);
        if (window.location !== undefined) {
          window.location.href = "/thank-you";
        }
      } catch (err) {
        console.error("Error:", err);
        handleTogglecontactForm(false);
      } finally {
        setisLoading(false);
      }
    },
  });

  return (
    <div>
      <div className={styles.formTopic}>
        <h4>Book Your Consultation</h4>
        <p>Fill the form below and we will get back to you soon.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="text-danger">{formik.errors.name}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            {...formik.getFieldProps("mobile")}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <small className="text-danger">{formik.errors.mobile}</small>
          )}
        </div>

        <div className={styles.inputgrp}>
          <Button
            disabled={loading}
            btnTitle={loading ? "Submitting..." : "Submit"}
            bgColor="#42474D"
            textColor="#fff"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
