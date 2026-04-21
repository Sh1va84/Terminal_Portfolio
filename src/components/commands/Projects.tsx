import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        <br />
        Here are some projects I've built with passion and code 🚀 <br />
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "NEXTFLOW - AI Visual Workflow Automation Platform",
    desc: "Production-deployed visual workflow engine with drag-and-drop canvas, DAG-based topological execution, and parallel node processing. Uses Trigger.dev v3 for distributed async tasks, Google Gemini API for LLM nodes, and Transloadit for cloud media processing. [GitHub: github.com/Sh1va84/nextflow]",
    url: "https://nextflow-chi-eight.vercel.app/",
  },
  {
    id: 2,
    title: "SEGFAULT - AI-Powered Online Coding Platform",
    desc: "Production-grade coding platform with Judge0 API for multi-language execution (C++, Java, JavaScript), Gemini AI tutor for contextual debugging, Redis-backed JWT blacklisting, MongoDB compound indexing, and 15+ REST endpoints with RBAC. [GitHub: github.com/Sh1va84/SegFault]",
    url: "https://segfault-frontend-1.netlify.app/",
  },
  {
    id: 3,
    title: "PROPEL - AI-Powered Property Management Platform",
    desc: "Full-stack platform connecting property agents with contractors featuring a status-based escrow workflow (HELD → RELEASED/REFUNDED). Integrates Gemini API for AI-powered job description generation from property images and automated email notifications. [GitHub: github.com/Sh1va84/PROPEL-V1]",
    url: "https://propel-v1-pebl.vercel.app/",
  },
  {
    id: 4,
    title: "DAEMON - Terminal-Native Autonomous AI Dev Agent",
    desc: "Terminal-native AI agent that autonomously generates full-stack projects from natural language — executing shell commands, writing files, and committing to git with zero human intervention. Implements Gemini function calling with a self-healing PLAN → EXECUTE → VALIDATE → REPEAT loop.",
    url: "https://github.com/Sh1va84/daemon",
  },
  {
    id: 5,
    title: "Terminal RAG Engine - Document Q&A System",
    desc: "Command-line RAG application enabling intelligent querying of local PDF documents with a two-phase pipeline — document indexing/embedding into Pinecone vector DB and custom context retrieval for accurate responses using LangChain.js and Google Gemini API.",
    url: "https://github.com/Sh1va84/Terminal-RAG-Engine",
  },
];

export default Projects;