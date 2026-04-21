import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import Experience from "./commands/Experience";
import Man from "./commands/Man";
import GeneralOutput from "./commands/GeneralOutput";
import Blogs from "./commands/Blogs";
import Resume from "./commands/Resume";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Skills from "./commands/Skills";
import Call from "./commands/Call";
import Hello from "./commands/Hello";
import Exit from "./commands/Exit";


import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo", "man"];

  // return 'Usage: <cmd>' if command arg is not valid

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          experience: <Experience />,
          blogs: <Blogs />,
          resume: <Resume />,
          help: <Help />,
          history: <History />,
          man: <Man />,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/shiva</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>shiva@nith — Full-Stack Developer | NIT Hamirpur 2026</GeneralOutput>,
          skills: <Skills />,
          hello: <Hello />,
          call: <Call />,
          exit: <Exit />
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
