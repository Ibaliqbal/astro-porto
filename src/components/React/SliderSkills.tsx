import { skills } from "@/utils/constant";
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

const SliderSkills = ({ direction }: { direction: "left" | "right" }) => {
  return (
    <Marquee direction={direction}>
      {skills.map((skill, i) => (
        <a
          rel="noopener noreferrer"
          href={skill.tutorial}
          target="_blank"
          key={i}
          className="inline-block m-0"
        >
          <div className="flex items-center gap-2 mr-16">
            <img
              src={skill.image}
              alt={skill.name}
              width={100}
              height={100}
              loading="lazy"
              className="w-[50px] h-[50px]"
            />
            <p className="text-xl font-bold">{skill.name}</p>
          </div>
        </a>
      ))}
    </Marquee>
  );
};

export default SliderSkills;
