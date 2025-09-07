import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        A passionate <HighlightSpan>Full-Stack Developer</HighlightSpan> with a knack for turning complex problems into elegant solutions.
      </p>

      <p>
        My coding journey began with C++ and JavaScript, and quickly evolved into building full-stack applications using the MERN stack. <br />
        I thrive on creating systems that make a real impact - whether it's optimizing database performance by 40% with MongoDB indexing <br />
        or implementing secure authentication systems with JWT and Redis.<br />
        <br />
        Currently exploring the cutting edge of technology with Generative AI and Web 3.0, while solving 300+ DSA problems to strengthen <br />
        my algorithmic thinking. I believe in building solutions that are not just functional but scalable and efficient.<br />
        <br />
        When I'm not coding, you'll find me exploring new tech stacks or contributing to open source projects.<br />
        Always learning, always building, always pushing boundaries.<br />

        <HighlightSpan>#BuildTheFuture</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;