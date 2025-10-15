import { useFormik } from "formik";
import Button from "../Button";
import styles from "./styles.module.css";
import * as Yup from "yup";

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

        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        const Formdata = {
          Name: value.name,
          MobileNumber: value.mobile,
          IP_Address: ipData.ip,
          utm_source: localStorage.getItem("utm_source"),
        };

        const params = new URLSearchParams();
        Object.keys(Formdata).forEach((key) => {
          params.append(key, Formdata[key]);
        });

        const res = await fetch(
          "https://script.google.com/macros/s/AKfycby0V7V8j32RnoU3ymvynxDNaH1bwdZEx14WqBN2R26EcNrKEyB3qXAm8qwDAnWWJQxc/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
          }
        );

        if (!res.ok) throw new Error("Submission failed");


        const data = await res.json();

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
        <p>Fill the form below and we will get back to you asap.</p>
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
