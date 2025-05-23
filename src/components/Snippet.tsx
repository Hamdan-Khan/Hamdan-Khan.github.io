import { motion } from "framer-motion";
import { useState } from "react";

const Snippet = () => {
  const [snippet, setSnippet] = useState("one");
  const [installing, setInstalling] = useState("installing");
  const codeStart = () => {
    setSnippet("start");
    setInstalling("installing");
    const intervalID = setInterval(() => {
      setInstalling((prevValue) => {
        if (prevValue === "installing....") {
          return "installing";
        } else {
          return prevValue + ".";
        }
      });
    }, 250);
    setTimeout(() => {
      clearInterval(intervalID);
      setInstalling("Installed");
      setSnippet("result");
    }, 2500);
  };
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      className="mockup-code max-w-[85vw] sm:w-auto sm:flex-grow sm:m-2 pr-2 dark:bg-zinc-600"
    >
      <pre data-prefix="$">
        <code>
          npm install Hamdan{" "}
          <span className="">
            {snippet === "one" ? (
              <span
                className="ml-2 mb-1 text-white cursor-pointer py-2 px-1 rounded-lg inter bg-green-500 dark:bg-green-600"
                onClick={codeStart}
                title="Runs the silly code"
              >
                Run{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 90"
                  viewBox="0 0 31.18 36"
                  id="play-button"
                  className="w-5 h-5 max-w-6 inline"
                  fill="#fff"
                >
                  <path d="M0 18V0l15.59 9 15.59 9-15.59 9L0 36V18z"></path>
                </svg>
              </span>
            ) : (
              snippet === "result" && (
                <span
                  className="ml-2 mb-1 text-zinc-100 cursor-pointer pb-2 pt-1 px-1 rounded-lg inter bg-yellow-500"
                  title="Re-run code"
                  onClick={codeStart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="refresh"
                    className="w-6 h-6 max-w-6 inline"
                    fill="#fff"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>
                  </svg>
                </span>
              )
            )}
          </span>
        </code>
      </pre>
      {(snippet === "start" || snippet === "result") && (
        <pre data-prefix=">" className="text-warning">
          <code>{installing}</code>
        </pre>
      )}
      {snippet === "result" && (
        <pre data-prefix=">" className="text-success">
          <code>Hamdan hates CSS :{"("}</code>
        </pre>
      )}
    </motion.div>
  );
};

export default Snippet;
