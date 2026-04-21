import useTypewriter from '../../hooks/useTypewriter';
import {
  BlinkCursor,
  Cmd,
  HeroContainer,
  PreImg,
  Seperator,
} from '../styles/Welcome.styled';

const GREETING = "I don't just code — I ship. Full-stack, AI-native, production-ready.";

const ASCII_ART = `███████╗██╗  ██╗██╗██╗   ██╗ █████╗
██╔════╝██║  ██║██║██║   ██║██╔══██╗
███████╗███████║██║╚██╗ ██╔╝███████║
╚════██║██╔══██║██║ ╚████╔╝ ██╔══██║
███████║██║  ██║██║  ╚██╔╝  ██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝`;

const Welcome: React.FC = () => {
  const { output, isDone } = useTypewriter(GREETING, 22);

  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <div>
          {output}
          {!isDone && <BlinkCursor>▋</BlinkCursor>}
        </div>

        {isDone && (
          <>
            <br />
            <div>Hey, I'm <strong>Shiva</strong> — Full-Stack Developer, NIT Hamirpur '26.</div>
            <br />
            <div>
              ▸ &nbsp;Interned at <strong>Rentr</strong> (AI PropTech, UK) — built a Bid Quotation System to production<br />
              ▸ &nbsp;<strong>5 deployed projects</strong> — workflow engines, coding platforms, autonomous AI agents<br />
              ▸ &nbsp;Stack: React · Next.js · Node.js · TypeScript · PostgreSQL · LangChain.js · Gemini API
            </div>
            <br />
            <Seperator>----</Seperator>
            <div>
              → &nbsp;Type <Cmd>projects</Cmd> to see my work &nbsp;|&nbsp; <Cmd>resume</Cmd> to download CV &nbsp;|&nbsp; <Cmd>help</Cmd> for all commands
            </div>
          </>
        )}
      </div>

      <div className="illu-section">
        <PreImg>{ASCII_ART}</PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
