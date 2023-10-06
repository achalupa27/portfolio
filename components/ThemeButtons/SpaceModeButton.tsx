import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textColors, textInvertedColors } from "../../themes";

const EarthModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "space" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-planet-ringed" />
    </button>
  ) : (
    <button
      className={`theme-button`}
      onClick={() => dispatch(setTheme("space"))}
    >
      <i className="fi fi-rr-planet-ringed" />
    </button>
  );
};

export default EarthModeButton;
