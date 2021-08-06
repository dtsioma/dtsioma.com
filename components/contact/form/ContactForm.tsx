import { useState } from "react";
import { Button } from "../../general/button/Button";
import { Formik, Form, Field, FormikValues, FormikHelpers } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

interface ContactFormik {
  email: string;
  fullName: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const ContactSchema = Yup.object().shape({
    email: Yup.string().email("invalid email :(").required("email!"),
    fullName: Yup.string()
      .min(2, "too short :(")
      .max(40, "too long :0")
      .required("name!"),
    message: Yup.string().max(1000, "too long :0").required("message!"),
  });

  const handleSubmit = async (
    values: FormikValues,
    { resetForm }: FormikHelpers<ContactFormik>
  ) => {
    setLoading(true);
    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        "#contactForm",
        process.env.EMAILJS_USER_ID!
      )
      .then(
        (result) => {
          resetForm();
          setEmailError(false);
          setLoading(false);
          setResponse("Message sent!");
          setTimeout(() => {
            setResponse("");
          }, 3000);
        },
        (error) => {
          setEmailError(true);
          setLoading(false);
          setResponse("There was an error. Try again later.");
        }
      );
  };

  return (
    <Formik
      initialValues={{ email: "", fullName: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form id="contactForm" className={styles.Form}>
          <Field
            name="email"
            placeholder="email"
            className={[styles.Control, styles.Input].join(" ")}
          />
          <Field
            name="fullName"
            placeholder="name"
            className={[styles.Control, styles.Input].join(" ")}
          />
          <Field
            as="textarea"
            rows="5"
            name="message"
            placeholder="message"
            className={[styles.Control, styles.Textarea].join(" ")}
          />
          <div className={styles.Footer}>
            <Button colorName="contact-me" type="submit">
              Send
            </Button>
            {!loading && (
              <div className={styles.Validation}>
                {touched.email && (
                  <span
                    style={{
                      color: errors.email ? "var(--red)" : "var(--green)",
                    }}
                    className={styles.ValidationItem}
                  >
                    {errors.email || "email :D"}
                  </span>
                )}
                {touched.fullName && (
                  <span
                    style={{
                      color: errors.fullName ? "var(--red)" : "var(--green)",
                    }}
                    className={styles.ValidationItem}
                  >
                    {errors.fullName || "name :D"}
                  </span>
                )}
                {touched.message && (
                  <span
                    style={{
                      color: errors.message ? "var(--red)" : "var(--green)",
                    }}
                    className={styles.ValidationItem}
                  >
                    {errors.message || "message :D"}
                  </span>
                )}
              </div>
            )}
            {loading && "Loading..."}
            {response && (
              <span style={{ color: "var(--green)" }}>{response}</span>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
