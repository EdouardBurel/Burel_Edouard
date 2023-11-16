import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CORE_CONCEPTS_FR } from "../data";
import { CORE_CONCEPTS_EN } from "../data";
import CarouselSkillCard from "./CarouselSkillCard";

export default function CarouselSkills({ islanguage }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills">
      <h2 id="skills">{islanguage === 'FR' ? 'Compétences' : 'Skills'}</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        className="skill-slider"
      >
        {islanguage === "FR"
          ? CORE_CONCEPTS_FR.map((conceptItem) => (
              <CarouselSkillCard key={conceptItem.title} {...conceptItem} />
            ))
          : CORE_CONCEPTS_EN.map((conceptItem) => (
              <CarouselSkillCard key={conceptItem.title} {...conceptItem} />
            ))}
      </Carousel>
    </section>
  );
}
