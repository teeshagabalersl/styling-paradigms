import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css.js";

// Common styles shared by all buttons
export const button = style({
  border: "none",
  borderRadius: vars.radius.medium,
  fontWeight: "600",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  selectors: {
    "&:focus-visible": {
      outline: `3px solid ${vars.color.primary}`,
      outlineOffset: "2px",
    },

    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  },
});

// Button color variants
export const buttonVariants = styleVariants({
  primary: {
    backgroundColor: vars.color.primary,
    color: vars.color.white,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.primaryHover,
      },
    },
  },

  secondary: {
    backgroundColor: vars.color.secondary,
    color: vars.color.text,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.secondaryHover,
      },
    },
  },

  danger: {
    backgroundColor: vars.color.danger,
    color: vars.color.white,

    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: vars.color.dangerHover,
      },
    },
  },
});

// Button size variants
export const buttonSizes = styleVariants({
  small: {
    padding: vars.spacing.buttonSmall,
    fontSize: vars.typography.small,
  },

  large: {
    padding: vars.spacing.buttonLarge,
    fontSize: vars.typography.medium,
  },
});
