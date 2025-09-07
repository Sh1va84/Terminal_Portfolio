import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {

  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect === */

  if (rerender && currentCommand[0] === "resume") {

    window.open("https://drive.google.com/drive/folders/1Wvnhtf325B-PS7qWr6tQNLIxQ9MnTAsr?usp=drive_link", "_blank");
  }

  return <span></span>;
};

export default Resume;
