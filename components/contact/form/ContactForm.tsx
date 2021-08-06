import { useState } from "react";
import { Button } from "../../general/button/Button";
import { Formik, Form, Field, FormikValues, FormikHelpers } from "formik";
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

  const ContactSchema = Yup.object().shape({
    email: Yup.string().email("invalid email :(").required("email!"),
    fullName: Yup.string()
      .min(2, "too short :(")
      .max(40, "too long :0")
      .required("name!"),
    message: Yup.string().max(1000, "too long :0").required("message!"),
  });

  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<ContactFormik>
  ) => {
    setLoading(true);
    setTimeout(() => {
      resetForm();
      setLoading(false);
      setResponse("Message sent!");
      setTimeout(() => {
        setResponse("");
      }, 3000);
    }, 3000);
  };

  return (
    <Formik
      initialValues={{ email: "", fullName: "", message: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
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
