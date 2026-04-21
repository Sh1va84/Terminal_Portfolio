import { useContext } from 'react';
import { commands } from '../Terminal';
import { termContext } from '../Terminal';
import { Wrapper } from '../styles/Output.styled';

type ManEntry = { synopsis: string; description?: string };

const manDetails: Record<string, ManEntry> = {
  about:     { synopsis: 'about',             description: 'Displays a bio of who I am and what I work on.' },
  call:      { synopsis: 'call',              description: 'Shows my contact phone number.' },
  clear:     { synopsis: 'clear',             description: 'Clears all terminal output.' },
  echo:      { synopsis: 'echo [text]',       description: 'Prints the given text to the terminal.' },
  education: { synopsis: 'education',         description: 'Shows academic background and institutions.' },
  email:     { synopsis: 'email',             description: 'Opens a mailto link to contact me by email.' },
  exit:      { synopsis: 'exit',              description: 'Closes the current terminal session.' },
  experience:{ synopsis: 'experience',        description: 'Lists my professional work experience.' },
  help:      { synopsis: 'help',              description: 'Prints all available commands with descriptions.' },
  history:   { synopsis: 'history',           description: 'Shows the list of commands you have run this session.' },
  man:       { synopsis: 'man [command]',     description: 'Shows the manual page for a given command.' },
  projects:  { synopsis: 'projects [go N]',   description: 'Lists all projects. Use "projects go N" to open project N in the browser (live URL for deployed projects).' },
  pwd:       { synopsis: 'pwd',               description: 'Prints the current working directory path.' },
  resume:    { synopsis: 'resume',            description: 'Opens my resume in a new browser tab.' },
  skills:    { synopsis: 'skills',            description: 'Displays my technical skill set by category.' },
  socials:   { synopsis: 'socials [go N]',    description: 'Lists social media profiles. Use "socials go N" to open profile N in the browser.' },
  themes:    { synopsis: 'themes [set N]',    description: 'Lists available terminal themes. Use "themes set N" to apply one.' },
  welcome:   { synopsis: 'welcome',           description: 'Shows the introductory welcome screen.' },
  whoami:    { synopsis: 'whoami',            description: 'Prints the current user identity.' },
};

const Man: React.FC = () => {
  const { arg } = useContext(termContext);

  if (arg.length === 0) {
    return (
      <Wrapper>
        <div>What manual page do you want?</div>
        <div style={{ marginTop: '0.4rem', color: 'inherit', opacity: 0.7 }}>Usage: man [command]</div>
      </Wrapper>
    );
  }

  const cmdName = arg[0];
  const command = commands.find(c => c.cmd === cmdName);

  if (!command) {
    return (
      <Wrapper>
        <div>No manual entry for <strong>{cmdName}</strong></div>
      </Wrapper>
    );
  }

  const entry = manDetails[cmdName];

  return (
    <Wrapper>
      <div><strong>NAME</strong></div>
      <div style={{ paddingLeft: '1.5rem' }}>{cmdName} — {command.desc}</div>

      {entry && (
        <>
          <br />
          <div><strong>SYNOPSIS</strong></div>
          <div style={{ paddingLeft: '1.5rem' }}>{entry.synopsis}</div>

          {entry.description && (
            <>
              <br />
              <div><strong>DESCRIPTION</strong></div>
              <div style={{ paddingLeft: '1.5rem' }}>{entry.description}</div>
            </>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Man;
