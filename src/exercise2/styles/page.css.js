import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css.js";

// Main page container
export const page = style({
  minHeight: "100vh",
  width: "100%",
  boxSizing: "border-box",
  backgroundColor: vars.color.background,
  fontFamily: vars.fontFamily.body,
  padding: vars.spacing.extraLarge,

  "@media": {
    "(max-width: 600px)": {
      padding: vars.spacing.medium,
    },
  },
});

// Main content area
export const main = style({
  maxWidth: "850px",
  margin: "0 auto",
});

// Page header
export const pageHeader = style({
  marginBottom: vars.spacing.extraLarge,
});

// Main heading
export const pageTitle = style({
  fontSize: "28px",
  fontWeight: "bold",
  color: vars.color.text,
  margin: `0 0 ${vars.spacing.small}`,
});

// Subtitle
export const pageSubtitle = style({
  color: vars.color.muted,
  fontSize: vars.typography.medium,
  margin: 0,
});

// Sections
export const section = style({
  marginBottom: vars.spacing.large,
});

// Section headings
export const sectionTitle = style({
  color: vars.color.text,
  fontSize: vars.typography.large,
  fontWeight: "600",
  margin: `0 0 ${vars.spacing.small}`,
});

// Flexible component groups
export const group = style({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "12px",
});

// Spacing between button groups
export const buttonGroup = style({
  marginBottom: vars.spacing.large,
});