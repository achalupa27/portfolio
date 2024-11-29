import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textColors, textInvertedColors } from "../../themes";

const EarthModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "earth" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-leaf" />
    </button>
  ) : (
    <button
      className={`theme-button hover:${bgInvertedColor} hover:${textInvertedColor}`}
      onClick={() => dispatch(setTheme("earth"))}
    >
      <i className="fi fi-rr-leaf" />
    </button>
  );
};

export default EarthModeButton;
