type Props = {
  children: React.ReactNode;
};

const HText: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="basis-3/5 font-montserrat text-3xl font-bold uppercase">
      {children}
    </h2>
  );
};

export default HText;
