import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { textColors, bgInvertedColors, textInvertedColors } from "../../themes";

const RainModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "rain" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-raindrops" />
    </button>
  ) : (
    <button
      className={`theme-button hover:${bgInvertedColor} hover:${textInvertedColor}`}
      onClick={() => dispatch(setTheme("rain"))}
    >
      <i className="fi fi-rr-raindrops" />
    </button>
  );
};

export default RainModeButton;
