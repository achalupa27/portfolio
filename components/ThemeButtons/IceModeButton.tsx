import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectTheme, setTheme } from "../../redux/slices/themeSlice";
import { bgInvertedColors, textColors, textInvertedColors } from "../../themes";

const IceModeButton = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const bgInvertedColor = bgInvertedColors[theme];
  const textInvertedColor = textInvertedColors[theme];

  return theme === "ice" ? (
    <button className={`theme-button ${bgInvertedColor} ${textInvertedColor}`}>
      <i className="fi fi-rr-snowflake" />
    </button>
  ) : (
    <button
      className={`theme-button hover:${bgInvertedColor} hover:${textInvertedColor}`}
      onClick={() => dispatch(setTheme("ice"))}
    >
      <i className="fi fi-rr-snowflake" />
    </button>
  );
};

export default IceModeButton;
