import { FC, useState, useLayoutEffect } from "react";
import { NavComponent } from "./components/Nav";
import { SocialMedia } from "./components/SocialMedia";
import { useTranslation } from "react-i18next";
const App: FC = () => {
  const { t, i18n } = useTranslation(["home"]);
  const [darkMode, setDarkMode] = useState(false);
  useLayoutEffect(() => {
    const theme = localStorage.getItem("@R.THEME.AJ");
    const lang = localStorage.getItem("i18nextLng");
    if (theme && theme !== undefined) {
      setDarkMode(theme === "dark" ? true : false);
    }

    if (lang && lang !== undefined) {
      i18n.changeLanguage(lang);
    }
  }, []);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => {
      localStorage.setItem(
        "@R.THEME.AJ",
        !prevDarkMode === true ? "dark" : "light"
      );
      return !prevDarkMode;
    });
  }

  function toggleLanguage() {
    const lang = i18n.language === "pt-BR" ? "en-US" : "pt-BR";
    i18n.changeLanguage(lang);
  }

  return (
    <main
      className={`min-h-screen min-w-screen mx-auto ${
        darkMode ? "dark" : "light"
      }`}
    >
      <NavComponent
        darkMode={darkMode}
        toggle={toggleDarkMode}
        toggleLanguage={toggleLanguage}
      />
      <section className="h-[calc(100vh_-_90px)] flex items-center justify-center flex-col dar:bg-[#1f2937]">
        <div className="p-4 flex items-center justify-center mb-5 bg-[#f4f4f4] dark:bg-[#374151] rounded-full">
          <img
            src="https://github.com/ajjunior33.png"
            className="w-44 h-44 rounded-full"
          />
        </div>
        <h1 className="font-medium text-3xl mb-5">
          {t("home", { ns: ["home"] })}
          <span className="ml-4 dark:text-[#16a99b] text-[#14b8a6]">
            André Souza
          </span>
        </h1>
        <p className="text-center dark:text-zinc-300 w-[350px] md:w-[700px]">
          {t("message", { ns: ["home"] })}
          <strong> Node.JS , PHP, Lua, React.JS </strong>
        </p>
        <div className="mt-10 grid grid-cols-4 gap-5">
          <SocialMedia />
        </div>
      </section>
    </main>
  );
};
export { App };
