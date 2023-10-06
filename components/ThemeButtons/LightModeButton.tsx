import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textInvertedColors } from "../../themes";

const LightModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "light" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-brightness" />
    </button>
  ) : (
    <button
      className={`theme-button`}
      onClick={() => dispatch(setTheme("light"))}
    >
      <i className="fi fi-rr-brightness" />
    </button>
  );
};

export default LightModeButton;
