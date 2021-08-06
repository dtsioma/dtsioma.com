import Head from "next/head";
import Container from "../components/general/container/Container";
import Heading from "../components/general/heading/Heading";
import ContactForm from "../components/contact/form/ContactForm";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Me /// Daniil Tsioma</title>
      </Head>
      <Container>
        <Heading colorName="contact-me" centered>
          Contact Me
        </Heading>
        <ContactForm />
      </Container>
    </>
  );
};

export default Contact;
