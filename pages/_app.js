import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react";
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          // right now this is set to dark mode only at night
          // changing useSystemColorMode to false, and initialColorMode to "dark", will set it to dark mode 24/7
          initalColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
