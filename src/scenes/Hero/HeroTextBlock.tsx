import HomePageText from "@/assets/HomePageText.png";

const HeroTextBlock = () => {
  return (
    <div className="md:-mt-20">
      <div className="relative">
        <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
          <img src={HomePageText} alt="home-page-text" />
        </div>
      </div>

      <p className="mt-8 md:text-start">
        Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
        Studios to get the Body Shapes That you Dream of.. Get Your Dream Body
        Now.
      </p>
    </div>
  );
};

export default HeroTextBlock;
