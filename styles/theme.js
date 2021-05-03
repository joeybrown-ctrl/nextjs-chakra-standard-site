// imports include the chakra-ui theme for react, and createBreakpoints from chakra-ui's theme tools. 
// more info on createBreakpoints can be found at 'https://chakra-ui.com/docs/theming/theme'
import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// this sets up our fonts
const fonts = {
    ...chakraTheme.fonts,
    body: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji,"Segoe UI Emoji","Segoe UI Symbol',
    heading: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji,"Segoe UI Emoji","Segoe UI Symbol'
}


// this sets our breakpoints, which are then set using the createBreakpoints hook imported from Chakra-UI. Breakpoints allow us to add mobile responsive styling. We use breakpoints instead of writing and then adding in media queries.
const breakpoints = createBreakpoints({
    sm: "40em",
    md: "52em",
    lg: "64em",
    // we don't want extra-large, but we do have to set four breakpoints, so we're adding another large.
    lg: "62em",
})

// this sets up our overrides
const overrides = {
    ...chakraTheme, 
    fonts,
    breakpoints,
    fontWeights: {
        normal: 300,
        medium: 600,
        bold: 700.
    },
    fontSizes: {
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "64px",
    }
}

// we store extendTheme that takes overrides as an argument, in customTheme
const customTheme = extendTheme(overrides)

// and export it
export default customTheme