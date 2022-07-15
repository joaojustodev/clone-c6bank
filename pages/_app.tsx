import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MobileMenuContextProvider } from "../contexts/MobileMenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileMenuContextProvider>
      <Component {...pageProps} />
    </MobileMenuContextProvider>
  );
}

export default MyApp;
