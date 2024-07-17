import Marquee from "react-fast-marquee";

const SliderSkills = ({
  direction,
  children,
}: {
  direction: "left" | "right";
  children: React.ReactNode;
}) => {
  return <Marquee direction={direction}>{children}</Marquee>;
};

export default SliderSkills;
