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

// this sets up our overrides
const overrides = {
    ...chakraTheme, 
    fonts,
}

// we store extendTheme that takes overrides as an argument, in customTheme
const customTheme = extendTheme(overrides)

// and export it
export default customTheme