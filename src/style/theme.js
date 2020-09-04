const colors = {
  portage: "#9195F8",
  indigo: "#54168D",
  cinnabar: "#E1454A",
};

export const theme = {
  breakpoints: {
    mobile: "768px",
    tablet: "992px",
    desktop: "1024px",
  },
  primary: colors.portage,
  primaryDark: colors.indigo,
  gradient: `linear-gradient(147deg, ${colors.portage} 0%, ${colors.indigo} 74%);`,
  accent: colors.cinnabar,
  offblack: "#242424",
  offwhite: "#fafafa",
};
