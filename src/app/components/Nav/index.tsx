import { FC } from "react";
import { Moon, Sun, Languages } from "lucide-react";

interface NavProps {
  darkMode: boolean;
  toggle: () => void;
  toggleLanguage: () => void;
}

const NavComponent: FC<NavProps> = ({
  darkMode,
  toggle,
  toggleLanguage,
}: NavProps) => {
  return (
    <nav className="w-full h-[90px] flex items-center justify-between p-[20px] bg-[#fafafa] dark:bg-[#374151]">
      <h4 className="font-bold text-4xl dark:text-[#27cdd8] text-[#2dd5d5]">
        AJ
      </h4>
      <div className="flex items-center gap-5">
        <button onClick={toggleLanguage}>
          <Languages />
        </button>
        <button onClick={toggle}>{darkMode ? <Sun /> : <Moon />}</button>
      </div>
    </nav>
  );
};
export { NavComponent };
