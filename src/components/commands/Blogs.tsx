import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Blogs: React.FC = () => {

  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect === */

  if (rerender && currentCommand[0] === "blogs") {

    window.open("https://utkarshlabs.tech", "_blank");
  }

  return <span></span>;
};

export default Blogs;
