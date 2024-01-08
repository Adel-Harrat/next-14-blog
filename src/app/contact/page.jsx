import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/footer/Footer";
import Container from "@/components/ui/Container";
import Image from "next/image";

export const metadata = {
  title: "Contact us",
  description: "This is the contact page",
};

const ContactPage = () => {
  return (
    <>
      <Container classes={"grid grid-cols-1 md:grid-cols-2 my-10 gap-10"}>
        <div className="mt-10 md:mt-0 flex items-center justify-center ">
          <Image
            src="/contact.png"
            alt="contact page"
            height={250}
            width={500}
            priority
          />
        </div>

        <ContactForm />
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
