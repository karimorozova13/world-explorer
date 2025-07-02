export type ThemeType = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
    accent: string;
  };
  fonts: {
    main: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export const lightTheme: ThemeType = {
  colors: {
    primary: "teal",
    secondary: "#cbd71b",
    background: "#F2F2F2",
    text: "#3e3772",
    border: "#E0E0E0",
    accent: "#eb14b1",
  },
  fonts: {
    main: "'Roboto', sans-serif",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    extraLarge: "60px",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
  },
};

export const darkTheme: ThemeType = {
  ...lightTheme,
  colors: {
    primary: "#95e4a1",
    secondary: "#d8e52a",
    background: "#030311",
    text: "#948dc8",
    border: "#424242",
    accent: "#eb14b1",
  },
};
