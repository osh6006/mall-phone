interface HeadingProps {
  title: string;
  desc: string;
}

const Heading: React.FC<HeadingProps> = ({ title, desc }) => {
  return (
    <div className="max-w-[220px] sm:max-w-[450px] lg:max-w-[940px] space-y-3 text-center ">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-base text-neutral-400 ">{desc}</p>
    </div>
  );
};

export default Heading;
