import gravatar from "../assets/gravatar.png";
import github from "../assets/logos/github.svg";
import linkedin from "../assets/logos/linkedin.png";
import twitter from "../assets/logos/twitter.svg";

const socials = [
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/hamdan-khan-b5a260226/",
    logo: linkedin,
  },
  { platform: "GitHub", link: "https://github.com/Hamdan-Khan", logo: github },
  {
    platform: "Twitter",
    link: "https://twitter.com/hamdankhan212?t=wQb0gqGbh5mPfmhbOWfqmQ&s=08",
    logo: twitter,
  },
];

const Connect = () => {
  return (
    <div className="px-10 py-12 sm:py-16 dark:text-white flex flex-col gap-8 sm:flex-row items-center justify-evenly bg-slate-100 dark:bg-slate-800">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl uppercase font-bold tracking-wide text-center">
          Connect with me
        </h2>
        <img
          src={gravatar}
          alt="Gravatar QR Code"
          className="w-36 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-center gap-10 items-center">
        {socials.map((s) => {
          const { platform, link, logo } = s;
          return (
            <a
              href={link}
              className="tooltip hover:scale-110 transition-transform duration-300"
              data-tip={platform}
              target="_blank"
              key={platform}
            >
              <img
                src={logo}
                alt={platform}
                className={`w-[45px] ${
                  platform == "GitHub" ? "dark:invert" : ""
                }`}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Connect;
