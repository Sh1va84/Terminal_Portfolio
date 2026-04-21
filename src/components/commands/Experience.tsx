import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="experience">
      <EduIntro>
        Real-world experience building production systems that real users depend on.
      </EduIntro>

      {experiences.map(({ title, company, points }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{company}</div>
          {points.map((point, i) => (
            <div className="desc" key={i}>• {point}</div>
          ))}
        </EduList>
      ))}
    </Wrapper>
  );
};

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Rentr — AI-Powered PropTech Startup (UK-based)",
    points: [
      "Engineered a comprehensive Bid Quotation System that streamlined contractor project estimate submission, tracking, and digital management.",
      "Implemented authentication, file upload system, and resolved critical bugs in Rentr's core contractor portal.",
    ],
  },
];

export default Experience;
