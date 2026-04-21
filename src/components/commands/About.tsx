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
        My coding journey began with C++ and JavaScript, and quickly evolved into building full-stack applications spanning the entire stack —
        from React and Next.js on the frontend to Node.js, Express, Prisma, and PostgreSQL on the backend.<br />
        <br />
        Previously a <HighlightSpan>Software Developer Intern at Rentr</HighlightSpan> (AI-Powered PropTech, UK), where I engineered a
        Bid Quotation System, implemented authentication, a file upload system, and resolved critical bugs in their contractor portal.<br />
        <br />
        Deep into <HighlightSpan>Generative AI</HighlightSpan> — building with LangChain.js, RAG architecture, Google Gemini API,
        function calling, and vector search using Pinecone. 500+ DSA problems solved across LeetCode, GeeksforGeeks, and Codeforces.<br />
        <br />
        I believe in building solutions that are not just functional but scalable and efficient.<br />
        Always learning, always building, always pushing boundaries.<br />

        <HighlightSpan>#BuildTheFuture</HighlightSpan>
      </p>
    </AboutWrapper>
  );
};

export default About;