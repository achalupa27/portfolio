import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textColors, textInvertedColors } from "../../themes";

const DarkModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "dark" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-moon" />
    </button>
  ) : (
    <button
      className={`theme-button`}
      onClick={() => dispatch(setTheme("dark"))}
    >
      <i className="fi fi-rr-moon" />
    </button>
  );
};

export default DarkModeButton;
