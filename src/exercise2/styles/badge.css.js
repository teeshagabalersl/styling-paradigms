import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../theme.css.js";

// Common styles for all badges
export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.spacing.badge,
  borderRadius: vars.radius.round,
  fontSize: vars.typography.small,
  fontWeight: "600",
});

// Badge color variants
export const badgeVariants = styleVariants({
  success: {
    backgroundColor: vars.color.successBackground,
    color: vars.color.success,
  },

  warning: {
    backgroundColor: vars.color.warningBackground,
    color: vars.color.warning,
  },

  error: {
    backgroundColor: vars.color.dangerBackground,
    color: vars.color.danger,
  },
});
