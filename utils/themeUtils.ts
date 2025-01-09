import { themes } from '../themes';

export const getThemeStyles = (themeName: ThemeName) => {
    const theme = themes[themeName];
    return {
        // Basic styles
        text: theme.text,
        bg: theme.bg,
        border: theme.border,

        // Combined styles
        button: `${theme.bg} ${theme.text} ${theme.border}`,
        buttonHover: `${theme.hover.bg} ${theme.hover.text}`,
        input: `${theme.bg} ${theme.text} ${theme.border} ${theme.placeholder}`,

        // Inverted styles
        inverted: `${theme.inverted.bg} ${theme.inverted.text}`,
    };
};
