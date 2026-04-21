import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>
        How did I get into tech?<br />
        It started with curiosity about how things work behind the screen.<br />
        From debugging my first JavaScript code to building full-stack applications - the journey continues!<br />
        <br />
        Here to create impact through code, not just chase grades.
      </EduIntro>

      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Electronics & Communication Engineering",
    desc: "National Institute of Technology, Hamirpur | 2022 - 2026 | CGPA: 8.4/10.0",
  },
  {
    title: "Higher Secondary Education (12th)",
    desc: "Government Senior Secondary School Boys, Jogindernagar | 2019 - 2021 | Percentage: 82.8%",
  },
  {
    title: "Secondary Education (10th)",
    desc: "Government Senior Secondary School Dohag | 2017 - 2019 | Percentage: 90.4%",
  },
];

export default Education;