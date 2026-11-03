import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
    color: {
        // Primary colors
        primary: "#6B8F71",
        primaryHover: "#55765B",
        secondary: "#E2EBDD",
        secondaryHover: "#C4D7C0",

        // Status colors
        success: "#2E8B57",
        successBackground: "#E1F3E8",

        warning: "#D99A27",
        warningBackground: "#FFF1D6",

        danger: "#DC5555",
        dangerHover: "#BE4141",
        dangerBackground: "#FCE4E4",

        // Common colors
        text: "#34483A",
        muted: "#788579",
        background: "#F5F7F1",
        card: "#FFFFFF",
        border: "#E1E7DD",
        white: "#FFFFFF",
        shadow: "rgba(52, 72, 58, 0.08)",
    },

    spacing: {
        extraSmall: "4px",
        small: "8px",
        medium: "16px",
        large: "24px",
        extraLarge: "32px",

        buttonSmall: "8px 14px",
        buttonLarge: "12px 24px",
        badge: "4px 10px",

        cardPadding: "24px",
        cardPaddingMobile: "16px",
    },

    typography: {
        small: "12px",
        medium: "14px",
        large: "18px",
        heading: "24px",
    },

    radius: {
        small: "6px",
        medium: "10px",
        large: "12px",
        round: "999px",
    },

    shadow: {
        card: "0 4px 12px rgba(52, 72, 58, 0.08)",
    },

    fontFamily: {
        body: "Arial, sans-serif",
    },
});
