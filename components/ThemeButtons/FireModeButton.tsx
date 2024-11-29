import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { textColors, bgInvertedColors, textInvertedColors } from "../../themes";

const FireModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const textColor = textColors[theme];
  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "fire" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-flame" />
    </button>
  ) : (
    <button
      className={`theme-button hover:${bgInvertedColor} hover:${textInvertedColor}`}
      onClick={() => dispatch(setTheme("fire"))}
    >
      <i className="fi fi-rr-flame" />
    </button>
  );
};

export default FireModeButton;
