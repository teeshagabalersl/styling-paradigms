import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css.js";

export const card = style({
  backgroundColor: vars.color.card,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.large,
  padding: vars.spacing.cardPadding,
  boxShadow: vars.shadow.card,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.medium,

  "@media": {
    "(max-width: 600px)": {
      padding: vars.spacing.cardPaddingMobile,
    },
  },
});

export const cardTitle = style({
  color: vars.color.text,
  fontSize: vars.typography.large,
  fontWeight: "600",
  margin: 0,
});

export const cardContent = style({
  color: vars.color.muted,
  fontSize: vars.typography.medium,
  lineHeight: 1.5,
});
