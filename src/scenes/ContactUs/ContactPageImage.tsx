import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

const ContactPageImage: React.FC = () => {
  return (
    <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
      <img
        className="w-full"
        src={ContactUsPageGraphic}
        alt="contact-us-page-graphic"
      />
    </div>
  );
};

export default ContactPageImage;
