import {
    AboutWrapper,
    HighlightAlt,
    HighlightSpan,
} from "../styles/About.styled";

import {
    Cmd
} from "../styles/Welcome.styled";

const Hello: React.FC = () => {
    return (
        <AboutWrapper>
            <p>
                <HighlightSpan> Namaste, I'm Shiva. How can I help you today? </HighlightSpan><br />
                For a list of available commands, type `<Cmd>help</Cmd>`.
            </p>
        </AboutWrapper>
    );
};

export default Hello;