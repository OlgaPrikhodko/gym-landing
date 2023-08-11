import Link from "./Link";

const Links: React.FC = () => {
  const pageNames = ["Home", "Benefits", "Our classes", "Contact Us"];

  return (
    <>
      {pageNames.map((pageName, index) => (
        <Link key={index} page={pageName} />
      ))}
    </>
  );
};

export default Links;
