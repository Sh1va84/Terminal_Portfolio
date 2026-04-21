import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
    return (
        <AboutWrapper data-testid="about">
            <p>
                <HighlightSpan>Here's what I actually build with code:</HighlightSpan>
            </p>
            <p>
                <HighlightSpan>Languages:</HighlightSpan><br />
                C++, JavaScript, TypeScript<br /><br />

                <HighlightSpan>Frontend:</HighlightSpan><br />
                React.js, Next.js, Redux Toolkit, Zustand, React Flow<br /><br />

                <HighlightSpan>Backend & Tools:</HighlightSpan><br />
                Node.js, Express.js, Prisma, Git, Postman, Linux/Shell<br /><br />

                <HighlightSpan>Databases:</HighlightSpan><br />
                PostgreSQL, MongoDB, Pinecone (Vector DB), Redis<br /><br />

                <HighlightSpan>Generative AI:</HighlightSpan><br />
                LangChain.js, RAG Architecture, Google Gemini API, Function Calling, Vector Search<br /><br />

                <HighlightSpan>CS Foundations:</HighlightSpan><br />
                Data Structures & Algorithms, Operating Systems, DBMS, Computer Networks
            </p>
        </AboutWrapper>
    );
};

export default About;