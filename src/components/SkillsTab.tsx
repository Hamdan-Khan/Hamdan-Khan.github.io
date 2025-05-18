const SkillsTab = ({ tab, setTab }) => {
  return (
    <div className="btm-nav dark:text-white bg-transparent text-lg sm:text-xl font-semibold static h-[3rem]">
      <button
        className={`flex flex-row ${
          tab === "cert"
            ? "active text-accent bg-transparent"
            : "border-t dark:border-t-zinc-500 border-t-gray-200"
        }`}
        onClick={() => setTab("cert")}
      >
        Certifications{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </button>
      <button
        className={`flex flex-row ${
          tab === "skills"
            ? "active text-accent bg-transparent"
            : "border-t dark:border-t-zinc-500 border-t-gray-200"
        }`}
        onClick={() => setTab("skills")}
      >
        Skills
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SkillsTab;
