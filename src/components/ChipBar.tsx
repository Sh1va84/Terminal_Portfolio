import styled from "styled-components";

const chips = [
  "projects",
  "skills",
  "experience",
  "resume",
  "about",
  "socials",
  "email",
];

type Props = { runCommand: (cmd: string) => void };

const ChipBar: React.FC<Props> = ({ runCommand }) => (
  <Bar>
    <Label>quick nav →</Label>
    {chips.map(cmd => (
      <Chip key={cmd} onClick={() => runCommand(cmd)}>
        {cmd}
      </Chip>
    ))}
  </Bar>
);

const Bar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-top: 1px solid ${({ theme }) => theme.colors?.primary}40;
  background: ${({ theme }) => theme.colors?.body};
`;

const Label = styled.span`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors?.text[300]};
  margin-right: 0.25rem;
  white-space: nowrap;
`;

const Chip = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  color: ${({ theme }) => theme.colors?.primary};
  font-family: inherit;
  font-size: 0.78rem;
  padding: 0.2rem 0.65rem;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.12s, color 0.12s;

  &:hover {
    background: ${({ theme }) => theme.colors?.primary};
    color: ${({ theme }) => theme.colors?.body};
  }

  &:active {
    opacity: 0.8;
  }
`;

export default ChipBar;
