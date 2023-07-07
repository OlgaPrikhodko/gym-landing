import HomePageGraphic from "@/assets/HomePageGraphic.png";

const HeroImage = () => {
  return (
    <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
      <img src={HomePageGraphic} alt="home-page-graphic" />
    </div>
  );
};

export default HeroImage;
