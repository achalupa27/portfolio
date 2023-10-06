import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textColors, textInvertedColors } from "../../themes";

const WaterModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "water" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-water" />
    </button>
  ) : (
    <button
      className={`theme-button`}
      onClick={() => dispatch(setTheme("water"))}
    >
      <i className="fi fi-rr-water" />
    </button>
  );
};

export default WaterModeButton;
