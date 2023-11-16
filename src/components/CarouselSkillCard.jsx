export default function CarouselSkillCard({ image, title, description }) {
  return (
    <li className="core-concept-item">
      <img className="concept-image" src={image} alt={title} />
      <h3 className="concept-title">{title}</h3>
      <p className="concept-description">{description}</p>
    </li>
  );
}
