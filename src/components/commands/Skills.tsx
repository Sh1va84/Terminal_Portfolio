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
                <HighlightSpan>🚀 Technologies I work with:</HighlightSpan><br />
                JavaScript, C++, Node.js, React, Express.js, MongoDB, Redis<br /><br />
                
                <HighlightSpan>🛠️ Tools I use to build and deploy:</HighlightSpan><br />
                Git, Cloudinary, Judeo API, Monaco Editor, Supabase<br /><br />
                
                <HighlightSpan>💡 What I'm currently exploring:</HighlightSpan><br />
                Generative AI, RAG Architecture, Vector Databases, Web 3.0<br /><br />
                
                <HighlightSpan>🎯 My development approach:</HighlightSpan><br />
                Clean code architecture, Database optimization, Real-time systems,<br />
                Scalable backend solutions, and User-friendly interfaces<br /><br />
                
                <HighlightSpan>🏆 Beyond coding:</HighlightSpan><br />
                Problem-solving (300+ DSA problems), Team collaboration,<br />
                Continuous learning, and Building projects that make an impact
            </p>
        </AboutWrapper>
    );
};

export default About;