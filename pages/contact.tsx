import Head from "next/head";
import Container from "../components/general/container/Container";
import Heading from "../components/general/heading/Heading";
import ContactForm from "../components/contact/form/ContactForm";

const Contact = () => {
  return (
    <main className="main">
      <Head>
        <title>Contact Me /// Daniil Tsioma</title>
      </Head>
      <Container>
        <Heading colorName="contact-me" centered>
          Contact Me
        </Heading>
        <ContactForm />
      </Container>
    </main>
  );
};

export default Contact;
