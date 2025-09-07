import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <div>
          Hey! I'm Shiva — a passionate developer currently studying at NIT Hamirpur.
          <br></br>
          <br></br>
          What drives me?<br></br>
          I code. I create. I solve. Repeat.

          <br></br>
          <br></br>
          Built a full-stack coding platform because I wanted to create something meaningful. Been working with modern web technologies, diving into AI integration, and yeah — JavaScript made me fall in love with programming (for real).
          <br></br>
          <br></br>
          I live for building projects. Clean code is my obsession. Give me a challenge, some energy drinks, and I'll probably build you something functional and efficient.

          <br></br>
          <br></br>
          Learned. Built. Optimized. Still coding. Always creating.
          <br></br>
          Let's build something amazing!

          </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;