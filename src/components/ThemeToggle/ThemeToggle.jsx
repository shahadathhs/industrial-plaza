import { GiMoon } from "react-icons/gi";
import { useContext } from "react";

import { GoSun } from "react-icons/go";
import { ThemeContext } from "../../Providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <label className="swap swap-rotate">
        <input onClick={toggleTheme} type="checkbox" className="theme-controller"  />
        {
          theme === 'light' 
          ?
          <GoSun className="m-2 text-3xl" />
          :
          <GiMoon className="m-2 text-3xl"  />
        }
      </label>
    </div>
  );
};

export default ThemeToggle;